import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssString } from "@/design-system";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
