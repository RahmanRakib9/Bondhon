import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();
// const JWT_SECRET = 'your_secret_key';

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    token: null,
    user: null,
  });
  console.log(authData);

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setAuthData({
      token: null,
      user: null,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user')); // Assuming user is stored as an object

    if (token && user) {
      setAuthData({ token, user });
    }
  }, []);

  return <AuthContext.Provider value={{ authData, setAuthData, logout }}>{children}</AuthContext.Provider>;
};
