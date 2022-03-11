import { AppProps } from "next/app";
import Script from "next/script";
import { globalStyles } from "@/components/global-style";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainLayout } from "@/components/layout-main";
import { BasketProvider } from "@/components/basket";
import { locale } from "@/config/locale";

const queryClient = new QueryClient();

export const MyApp = (props: AppProps) => {
  globalStyles();

  return (
    <>
      {/*crystallize-boilerplates-topbar-start*/}
      <div id="cr-boilers" style={{ height: "52px" }}>
        <Script
          src="https://crystallize.com/static-min/scripts/boilerplate-topbar.min.js"
          strategy="afterInteractive"
          defer
        />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        #cr-boilers {
          font-family: var(--fonts-body);
        }
        #cr-boilers a {
          color: inherit;
        }
      `,
        }}
      ></style>
      {/*crystallize-boilerplates-topbar-end*/}
      <QueryClientProvider client={queryClient}>
        <BasketProvider locale={locale}>
          <MainLayout {...props} />
        </BasketProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
