import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/pages/Home";
import ProductDetails from "./components/ui/ProductDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/layouts/Login";

let paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ProductDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={paths} />
  </StrictMode>
);
