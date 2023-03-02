"use client";
import React from "react";
import {
  Box,
  Burger,
  Button,
  Container,
  createStyles,
  Flex,
  Group,
  Header,
  Image,
  Indicator,
  Menu,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { IconHome2, IconCurrencyBitcoin, IconHome } from "@tabler/icons-react";
import Link from "next/link";

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

const DOT_SIZE = 20;

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
  indicatorDot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: theme.colors.primaryDarkOrange[6],
    borderRadius: DOT_SIZE / 2,
    top: -4,
    left: 26,
    fontSize: theme.fontSizes.xs,
    color: "white",
    textAlign: "center",
  },
}));

const AppHeader = () => {
  const { classes } = useStyles();

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
              <UnstyledButton key={idx} component={Link} href={n.to}>
                <Group sx={{ position: "relative" }}>
                  <Image width={36} alt="" src={n.icon} />
                  {idx === 2 && <Box className={classes.indicatorDot}>1</Box>}

                  <Text size="lg" weight="lighter" color="white" mr={32}>
                    {n.label}
                  </Text>
                </Group>
              </UnstyledButton>
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
