import {
  Box,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  Menu,
  Text,
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
    label: "自分の記録",
    to: "/my-record",
  },
  {
    label: "体重グラフ",
    to: "/",
  },
  {
    label: "目標",
    to: "/",
  },
  {
    label: "選択中のコース",
    to: "/",
  },
  {
    label: "コラム一覧",
    to: "/column",
  },
  {
    label: "設定",
    to: "/settings",
  },
];

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.primaryGray[5],
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
  dropdown: {
    width: "100%",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "100%",
    },
    backgroundColor: theme.colors.primaryGray[4],
    border: "none",
  },
  menuItem: {
    backgroundColor: theme.colors.primaryGray[4],
    border: "none",
    borderRadius: 0,
    borderBottom: `1px solid ${theme.colors.primaryGray[6]}`,
    boxShadow: `inset 0px 1px ${theme.colors.primaryGray[2]}`,
    padding: "1rem 2rem",
    paddingRight: "3rem",
    userSelect: "none",
    "&:hover": {
      backgroundColor: theme.colors.primaryGray[6],
    },
    "&:focus": {
      backgroundColor: theme.colors.primaryGray[6],
    },
    "&:active": {
      backgroundColor: theme.colors.primaryGray[6],
    },
  },
}));

const AppHeader = () => {
  const { classes } = useStyles();
  const router = useRouter();

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

          <Menu
            shadow="md"
            position="bottom-end"
            offset={18}
            classNames={{
              item: classes.menuItem,
            }}
          >
            <Menu.Target>
              <UnstyledButton>
                <Image alt="" src="/icons/icon-menu.svg" />
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown p={0} className={classes.dropdown}>
              {dropDownMenu.map((n, idx) => (
                <Menu.Item key={idx} onClick={() => router.push(n.to)}>
                  <UnstyledButton
                    component={Link}
                    href={n.to}
                    sx={{ width: "100%" }}
                  >
                    <Text color="white" weight="lighter">
                      {n.label}
                    </Text>
                  </UnstyledButton>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </Header>
  );
};

export default AppHeader;
