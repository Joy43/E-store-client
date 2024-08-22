import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from './../Pages/Home/Home/Home';
import About from "../Pages/Shared/About";
import SignIn from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Contact from "../Pages/Shared/Contact";





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
      }
     
    ],
  },
  {
    path: "dashboard",
    element: (
      <>
        <></>
      </>
    ),
    children: [
      // ------------- normal user routes -------------
     {

     }
      //----------- admin router-------------
     
    ],
  },
]);