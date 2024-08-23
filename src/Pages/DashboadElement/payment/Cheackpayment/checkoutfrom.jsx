import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payments from "../Payments/Payments";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
console.log(stripePromise);

const CheackPayment = () => {
  return (
    <div className="bg-base-300 shadow-lg mx-auto p-2 text-white">
      
  
    <div class="h-full lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-8 items-center">
        <div
            className="flex flex-col gap-4 text-white dark:text-black p-4 rounded-lg border border-green-300 shadow-xl shadow-green-400/30">
          
            <div className="w-full flex gap-2 items-center justify-around">
                <div className="text-5xl font-semibold uppercase font-serif">Payment Now</div>
                <hr className="w-[50%] h-1 rounded-full border-t-green-500 bg-green-500" />
            </div>

           

          
        </div>
    
</div>


      <Elements stripe={stripePromise}>
        <Payments></Payments>
      </Elements>
    </div>
  );
};

export default CheackPayment;