import { FC, createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthDocument, AuthQuery } from "@/service-api/auth.generated";
import { serviceAPIClient } from "@/clients";

export type AuthContextValue =
  | (AuthQuery["user"] & { isChecked: boolean })
  | null;

const initialAuthValue: AuthContextValue = {
  isLoggedIn: false,
  logoutLink: "",
  email: null,
  isChecked: false,
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
          isChecked: true,
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

export const useOnlyAuthenticated = () => {
  const router = useRouter();
  const { isChecked, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isChecked && !isLoggedIn) router.push("/login");
  }, [isChecked, isLoggedIn]);
};

export const useOnlyUnauthenticated = () => {
  const router = useRouter();
  const { isChecked, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isChecked && isLoggedIn) router.push("/account");
  }, [isChecked, isLoggedIn]);
};
