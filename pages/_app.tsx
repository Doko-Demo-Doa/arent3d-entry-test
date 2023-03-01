import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NextComponentType } from "next";
import NextProgress from "next-progress";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import defaultTheme from "~/themes/default-theme";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
          {getLayout(<Component {...pageProps} />)}
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
};

export default CustomApp;
