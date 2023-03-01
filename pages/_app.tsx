import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NextComponentType } from "next";
import NextProgress from "next-progress";
import defaultTheme from "~/themes/default-theme";

const CustomApp: NextComponentType<
  AppContext,
  AppInitialProps,
  AppLayoutProps
> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <>
      <NextProgress
        delay={100}
        height="3px"
        color="#ECC851"
        options={{ showSpinner: false }}
      />

      <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </>
  );
};

export default CustomApp;
