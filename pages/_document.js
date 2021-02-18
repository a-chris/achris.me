import Document, { Head, Html, Main, NextScript } from "next/document";
import common from "../public/static/locales/common";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="it">
        <Head title={common.MY_NAME}>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/Inconsolata.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
