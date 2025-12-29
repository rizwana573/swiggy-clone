import { createBrowserRouter } from "react-router";
import AppLayout from "./AppLayout";
import App from "./App";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import { lazy } from "react";

const About = lazy(() => import("./components/About"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <App /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/products/:productId", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
