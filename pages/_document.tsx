import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link
            href={
              "https://fonts.googleapis.com/css2?family=Poppins&display=optional"
            }
            type="text/css"
            rel="stylesheet"
          />

          <link
            href={
              "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
            }
            type="text/css"
            rel="stylesheet"
          />

          <link
            href={"https://fonts.googleapis.com/css2?family=Inter&display=swap"}
            type="text/css"
            rel="stylesheet"
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
