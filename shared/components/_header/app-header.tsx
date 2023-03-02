import {
  Box,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  Menu,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

import CustomMenuItem from "~/shared/components/_header/custom-menu-item";

const menu = [
  {
    label: "自分の記録",
    icon: "/icons/icon-challenge.svg",
    to: "/my-record",
  },
  {
    label: "チャレンジ",
    icon: "/icons/icon-memo.svg",
    to: "/challenge",
  },
  {
    label: "お知らせ",
    icon: "/icons/icon-info.svg",
    to: "/challenge",
  },
];

const dropDownMenu = [
  {
    label: "コラム一覧",
    to: "/column",
  },
];

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.primaryGray[4],
    height: 80,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      height: 90,
    },
  },
  nav: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
}));

const AppHeader = () => {
  const { classes } = useStyles();
  const router = useRouter();
  console.log(router.pathname);

  return (
    <Header className={classes.header} height={90}>
      <Container
        size="lg"
        sx={() => {
          return { height: "100%" };
        }}
      >
        <Group sx={{ height: "100%" }} position="apart">
          <UnstyledButton href="/" component={Link}>
            <Image
              height={60}
              width={140}
              fit="contain"
              src="/logos/header-logo.png"
              alt="Logo"
            />
          </UnstyledButton>

          <Box style={{ flexGrow: 2 }} />

          <Group className={classes.nav} position="right">
            {menu.map((n, idx) => (
              <CustomMenuItem
                key={idx}
                label={n.label}
                isActive={router.pathname === n.to}
                to={n.to}
                iconSrc={n.icon}
              />
            ))}
          </Group>

          <Box>
            <Menu shadow="md" width="100%">
              <Menu.Target>
                <UnstyledButton>
                  <Image alt="" src="/icons/icon-menu.svg" />
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Navigation</Menu.Label>

                {dropDownMenu.map((n, idx) => (
                  <Menu.Item key={idx}>
                    <UnstyledButton component={Link} href={n.to}>
                      {n.label}
                    </UnstyledButton>
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Group>
      </Container>
    </Header>
  );
};

export default AppHeader;
