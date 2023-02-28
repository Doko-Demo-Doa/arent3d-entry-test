import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NextComponentType } from "next";
import NextProgress from "next-progress";

const CustomApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppLayoutProps
> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <>
      <NextProgress delay={100} height="3px" options={{ showSpinner: false }} />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamilyMonospace: "Monaco, Courier, monospace",
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </>
  );
};

export default CustomApp;
