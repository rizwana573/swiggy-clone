import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import RestaurantMenu from "./src/components/RestaurantMenu";
import App from "./src/App";
import { useState } from "react";

const InnerPagesLayout = () => {
  return (
    <div className="inner-page">
      <Outlet />
    </div>
  );
};

const AppLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        element: <InnerPagesLayout />,
        children: [
          {
            path: "/contact-us",
            element: <Contact />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/recipes/:recipeId",
            element: <RestaurantMenu />,
          },
        ],
      },
    ],
  },
]);
root.render(<RouterProvider router={routes} />);

export default AppLayout;
