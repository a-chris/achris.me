import Document, { Head, Html, Main, NextScript } from "next/document";
import { MY_NAME } from "../contents";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="it">
        <Head title={MY_NAME}>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/fonts/Inconsolata.ttf"
            as="font"
            type="font/ttf"
            crossorigin=""
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
