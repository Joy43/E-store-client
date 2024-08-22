import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from './../Pages/Home/Home/Home';
import About from "../Pages/Shared/About";





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
        path:'contact',
        element:<About></About>
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