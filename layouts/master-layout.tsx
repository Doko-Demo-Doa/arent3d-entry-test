import { AppShell } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Head from "next/head";

import AppFooter from "~/shared/components/_footer/app-footer";
import AppHeader from "~/shared/components/_header/app-header";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const MasterLayout: React.FC<Props> = ({ children, title, description }) => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>

      <AppShell
        padding={0}
        header={<AppHeader />}
        footer={<AppFooter />}
        fixed={false}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.pink[8]
                : theme.colors.gray[0],
          },
        })}
        sx={{}}
      >
        {children}
      </AppShell>
    </>
  );
};

export default MasterLayout;
