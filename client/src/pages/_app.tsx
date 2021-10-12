import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AuthProvider } from "@/contexts/auth";
import { globalStyles } from "@/components/global-style";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainLayout } from "@/components/layout-main";
import { AuthLayout } from "@/components/layout-auth";

const queryClient = new QueryClient();

const authLayout = ["/login", "/signup"];

export const MyApp = (props: AppProps) => {
  const router = useRouter();

  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {authLayout.includes(router.pathname) ? (
          <AuthLayout {...props} />
        ) : (
          <MainLayout {...props} />
        )}
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
