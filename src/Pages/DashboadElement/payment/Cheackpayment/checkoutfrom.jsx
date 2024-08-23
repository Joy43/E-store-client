import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payments from "../Payments/Payments";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
console.log(stripePromise);

const CheackPayment = () => {
  return (
    <div className="bg-base-300 shadow-lg mx-auto p-2 text-white">
      <h1>Welcome to payment method</h1>
      <Elements stripe={stripePromise}>
        <Payments></Payments>
      </Elements>
    </div>
  );
};

export default CheackPayment;