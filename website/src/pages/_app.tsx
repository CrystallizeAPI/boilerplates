import { AppProps } from "next/app";
import { useRouter } from "next/router";
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
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <div id="cr-boilers" style="height: 52px;">
          <script>(function () {const d = document.createElement('script');d.src='https://crystallize.com/static-min/scripts/boilerplate-topbar.min.js';d.defer=true;document.head.appendChild(d);}())</script>
        </div>
        <style>
          #cr-boilers {
            font-family: var(--fonts-body);
            font-size: var(--fontSizes-2);
          }
        </style>
        `,
        }}
      />
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
