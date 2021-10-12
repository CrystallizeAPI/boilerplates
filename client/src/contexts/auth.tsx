import { FC, createContext, useContext, useEffect, useState } from "react";
import { AuthDocument, AuthQuery } from "@/service-api/auth.generated";
import { serviceAPIClient } from "@/clients";

export type AuthContextValue = AuthQuery["user"] | null;

const initialAuthValue: AuthContextValue = {
  isLoggedIn: false,
  logoutLink: "",
  email: null,
};

export const AuthContext = createContext<AuthContextValue>(initialAuthValue);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<AuthContextValue>(initialAuthValue);

  useEffect(() => {
    async function checkIfLoggedIn() {
      try {
        const response = await serviceAPIClient.request<AuthQuery>(
          AuthDocument
        );
        const user = response.user;

        // /**
        //  * Specify where the user should land after logging out
        //  * ?redirect=http://example.com
        //  */
        const redirectToPath = "/";
        const logoutLinkWithRedirect = new URL(user.logoutLink);
        logoutLinkWithRedirect.searchParams.append(
          "redirect",
          encodeURIComponent(
            `${location.protocol}//${location.host}${redirectToPath}`
          )
        );

        setUser({
          ...user,
          logoutLink: logoutLinkWithRedirect.toString(),
        });
      } catch (error) {
        console.error(error);
      }
    }

    checkIfLoggedIn();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
