import React, { createContext, useEffect, useState } from 'react';

export const LoginRegisterContext = createContext();

export const LoginRegisterProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(undefined);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("login") === "true";
    setLoginStatus(storedLoginStatus);
  }, []);

  // If loginStatus is undefined, show loading or don't render children yet
  if (loginStatus === undefined) {
    return null;  // Or add a loading spinner here if you prefer
  }

  return (
    <LoginRegisterContext.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </LoginRegisterContext.Provider>
  );
};
