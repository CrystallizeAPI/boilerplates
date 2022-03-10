import { AppProps } from "next/app";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const MainLayout = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};
