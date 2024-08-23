import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/AxiosSequre';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import useCart from '../../../../Hooks/usecart';

function Payments() {
    const [error, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure
                .post("/create-payment-intent", { price: totalPrice })
                .then((res) => setClientSecret(res.data.clientSecret));
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);

        if (!card) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setError(error.message);
        } else {
            setError("");
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous",
                },
            },
        });

        if (confirmError) {
            console.log("confirm error");
        } else if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);

            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(),
                cartIds: cart.map((item) => item._id),
                menuItemIds: cart.map((item) => item.menuId),
                status: "pending",
            };

            const res = await axiosSecure.post("/payments", payment);
            refetch();

            if (res.data?.paymentResult?.insertedId) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    },
                });
                Toast.fire({
                    icon: "success",
                    title: "Payment successful!",
                    footer: "Please check your email for details",
                });
                navigate("/dashboard/paymentHistory");
            }
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://yourimageurl.com/background.jpg')`, // Add your background image URL here
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-white bg-opacity-80 rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Payment Details
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        iconColor: "#c4f0ff",
                                        color: "#333",
                                        fontWeight: "500",
                                        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                                        fontSize: "16px",
                                        fontSmoothing: "antialiased",
                                        ":-webkit-autofill": {
                                            color: "#fce883",
                                        },
                                        "::placeholder": {
                                            color: "#87BBFD",
                                        },
                                    },
                                    invalid: {
                                        iconColor: "#FFC7EE",
                                        color: "#FFC7EE",
                                    },
                                },
                            }}
                            className="p-3 bg-white rounded-lg border-2 border-gray-200"
                        />
                    </div>
                    <button
                        className="mt-8 text-lg px-4 py-3 w-full text-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-transform transform hover:scale-105"
                        type="submit"
                        disabled={!stripe || !clientSecret}
                    >
                        Make Payment
                    </button>
                    {error && (
                        <p className="text-red-600 text-center mt-4">{error}</p>
                    )}
                    {transactionId && (
                        <p className="text-green-600 text-center mt-4">
                            Your transaction ID: {transactionId}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Payments;
