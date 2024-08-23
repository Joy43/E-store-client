import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from './../Pages/Home/Home/Home';
import About from "../Pages/Shared/About";
import SignIn from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Contact from "../Pages/Shared/Contact";
import ProductCart from "../Pages/ProductCart/productCard";
import Dashboard from "../Layout/Dashboad/Dahboad";
import Cart from "../Pages/DashboadElement/Cart/Cart";
import CheckoutForm from "../Pages/DashboadElement/payment/Cheackpayment/checkoutfrom";
import PaymentHistory from "../Pages/DashboadElement/payment/paymentstory/paymentstory";
import Payments from "../Pages/DashboadElement/payment/Payments/Payments";
import CheackPayment from "../Pages/DashboadElement/payment/Cheackpayment/checkoutfrom";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'about',
        element:<About></About>
      },
    
      {
        path:'login',
        element:<SignIn></SignIn>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'product',
        element:<ProductCart></ProductCart>
      }
     
    ],
  },
  {
    path: "dashboard",
    element: (
      <>
        <Dashboard></Dashboard>
      </>
    ),
    children: [
      // ------------- normal user routes -------------
     {
path:'cart',
element:<Cart></Cart>
     },
     {
      path:'payment',
     element: <CheackPayment></CheackPayment>
     },{
      path:'paymentHistory',
      element:<PaymentHistory/>
     }
      //----------- admin router-------------
     
    ],
  },
]);