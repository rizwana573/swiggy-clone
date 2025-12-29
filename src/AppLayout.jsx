import { Outlet } from "react-router";
import { useState, lazy, Suspense, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnlineStatus();
  const [userName, setUserName] = useState("Hii User");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/rizwana573");
      const json = await data.json();
      setUserName(json.login);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <Header
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        isOnline={isOnline}
      />

      {isOnline ? (
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      ) : (
        <div className="offline-message">
          <h2>You’re offline ⚠️</h2>
          <p>Please check your internet connection.</p>
        </div>
      )}

      <Footer />
    </UserContext.Provider>
  );
};

export default AppLayout;
