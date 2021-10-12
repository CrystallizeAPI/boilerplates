import { AppProps } from "next/app";
import { Nav } from "@/components/nav";

export const MainLayout = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
};
