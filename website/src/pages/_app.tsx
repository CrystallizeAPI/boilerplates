import Script from "next/script";
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
            <MainLayout {...props} />
          </>
        )}
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
