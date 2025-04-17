import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(null);
  const [savedUser, setSavedUser] = useState({});

  useEffect(() => {
    setSavedUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    if (loggedUser) {
      document.body.classList.add("logged-in-bg"); // Add class after login
    } else {
      document.body.classList.remove("logged-in-bg"); // Remove class on logout
    }
  }, [loggedUser]);

  const login = (email, password) => {
    if (email === savedUser.email && password === savedUser.password) {
      setLoggedUser(savedUser);
    } else {
      console.log("Error while logging in");
    }
  };

  const logout = () => {
    setLoggedUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
