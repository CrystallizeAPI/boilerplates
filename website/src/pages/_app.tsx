import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AuthProvider } from "@/contexts/auth";
import { globalStyles } from "@/components/global-style";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainLayout } from "@/components/layout-main";
import { AuthLayout } from "@/components/layout-auth";

const queryClient = new QueryClient();

const authLayout = ["/login", "/signup", "/confirmation"];

export const MyApp = (props: AppProps) => {
  const router = useRouter();

  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {authLayout.some((p) => router.pathname.includes(p)) ? (
          <AuthLayout {...props} />
        ) : (
          <MainLayout {...props} />
        )}
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
