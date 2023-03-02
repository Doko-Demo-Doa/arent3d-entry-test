import {
  AppShell,
  createStyles,
  Image,
  Transition,
  UnstyledButton,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Head from "next/head";
import { useMemo } from "react";

import AppFooter from "~/shared/components/_footer/app-footer";
import AppHeader from "~/shared/components/_header/app-header";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  btn: {
    cursor: "absolute",
    position: "fixed",
    right: 60,
    bottom: "20%",
  },
  none: {},
}));

const SCROLL_THRESHOLD_CEIL = 200;

const MasterLayout: React.FC<Props> = ({ children, title, description }) => {
  const [scroll, scrollTo] = useWindowScroll();
  const { classes } = useStyles();

  const shouldShowScrollUp = useMemo(() => {
    return scroll.y >= SCROLL_THRESHOLD_CEIL;
  }, [scroll.y]);

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

        <Transition
          mounted={shouldShowScrollUp}
          transition="fade"
          duration={1400}
          timingFunction="ease"
        >
          {(styles) => (
            <UnstyledButton
              onClick={() => scrollTo({ y: 0 })}
              styles={styles}
              className={classes.btn}
            >
              <Image alt="" src="/icons/icon-scrolltop.svg" />
            </UnstyledButton>
          )}
        </Transition>
      </AppShell>
    </>
  );
};

export default MasterLayout;
