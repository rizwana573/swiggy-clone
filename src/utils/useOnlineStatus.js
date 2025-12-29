import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setIsOnline(true);
    });
    window.addEventListener("offline", (event) => {
      setIsOnline(false);
    });
  }, []);
  return isOnline;
};

export default useOnlineStatus;
