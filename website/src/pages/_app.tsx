import Script from "next/script";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { globalStyles } from "@/components/global-style";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainLayout } from "@/components/layout-main";
import { AuthLayout } from "@/components/layout-auth";
import { BasketProvider } from "@/components/basket";
import { locale } from "@/config/locale";

const queryClient = new QueryClient();

const authLayout = ["/login", "/signup", "/confirmation"];

export const MyApp = (props: AppProps) => {
  const router = useRouter();

  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <BasketProvider locale={locale}>
      <MainLayout {...props} />
      </BasketProvider>
      
    </QueryClientProvider>
  );
};

export default MyApp;
