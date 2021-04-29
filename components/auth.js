import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useIsLoggedIn = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    async function check() {
      const status = await fetch("/api/login-status").then((r) => r.json());
      setIsLoggedIn(status.isLoggedIn);
    }
    check();
  }, []);

  return (
    <AuthContext.Provider value={isLoggedIn}>{children}</AuthContext.Provider>
  );
}
