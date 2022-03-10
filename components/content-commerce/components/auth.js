import { createContext, useContext, useEffect, useState } from "react";

import ServiceApi from "lib/service-api";

const AuthContext = createContext(null);

export const useIsLoggedIn = () => useContext(AuthContext);

export async function loginWithMagicLink(email) {
  const response = await ServiceApi({
    query: `
      mutation {
        user {
          sendMagicLink(
            email: "${email}"
            redirectURLAfterLogin: "${location.protocol}//${location.host}/api/login"
          ) {
            success
            error
          }
        }
      }
    `,
  });

  const { success, error } = response.data.user.sendMagicLink;

  return {
    success,
    error,
  };
}

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
