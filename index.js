// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import Contact from "./src/components/Contact";
// //import About from "./src/components/About";
// import Error from "./src/components/Error";
// import Header from "./src/components/Header";
// import Footer from "./src/components/Footer";
// import Cart from "./src/components/Cart";
// import ProductDetails from "./src/components/ProductDetails";
// import App from "./src/App";
// import { useState, lazy, Suspense, useEffect } from "react";
// import useOnlineStatus from "./src/utils/useOnlineStatus";
// import UserContext from "./src/utils/UserContext";
// import AppStore from "./src/utils/AppStore";
// import { Provider } from "react-redux";

// const About = lazy(() => import("./src/components/About"));

// const InnerPagesLayout = () => {
//   return (
//     <div className="inner-page">
//       <Outlet />
//     </div>
//   );
// };

// const AppLayout = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const isOnline = useOnlineStatus();
//   const [userName, setUserName] = useState("Hii User");

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch("https://api.github.com/users/rizwana573");
//       const json = await data.json();
//       setUserName(json.login);
//     };
//     fetchData();
//   }, []);
//   //const userName = UseContext(UserContext);

//   return isOnline ? (
//     <>
//       <UserContext.Provider value={{loggedInUser: userName}}>
//         <Header
//           setIsLoggedIn={setIsLoggedIn}
//           isLoggedIn={isLoggedIn}
//           isOnline={isOnline}
//         />
//         <Suspense
//           fallback={
//             <div style={{ padding: "2rem", textAlign: "center" }}>
//               Loading page...
//             </div>
//           }
//         >
//           <Outlet />
//         </Suspense>
//         <Footer />
//       </UserContext.Provider>
//     </>
//   ) : (
//     <>
//       <UserContext.Provider value={{loggedInUser: userName}}>
//         <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
//         <div className="offline-message">
//           <h2>You’re offline ⚠️</h2>
//           <p>Please check your internet connection.</p>
//         </div>
//         <Footer />
//       </UserContext.Provider>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <App />,
//       },
//       {
//         element: <InnerPagesLayout />,
//         children: [
//           {
//             path: "/contact-us",
//             element: <Contact />,
//           },
//           {
//             path: "/about",
//             element: <About />,
//           },
//           {
//             path: "/products/:productId",
//             element: <ProductDetails />,
//           },
//           {
//             path: "/cart",
//             element: <Cart/>,
//           },
//         ],
//       },
//     ],
//   },
// ]);
// root.render(
// <Provider store={AppStore}>
//   <RouterProvider router={routes} />
//   </Provider>);

// export default AppLayout;

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { routes } from "./src/Router";
import AppStore from "./src/utils/AppStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={AppStore}>
    <RouterProvider router={routes} />
  </Provider>
);
