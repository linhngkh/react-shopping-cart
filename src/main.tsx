import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@stripe/stripe-js";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const client = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
