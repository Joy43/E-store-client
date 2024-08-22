import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Routers/router";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

      {/* <QueryClientProvider client={queryClient}> */}
        <HelmetProvider>
          <div className="max-w-screen-2xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      {/* </QueryClientProvider> */}
 
  </React.StrictMode>
);