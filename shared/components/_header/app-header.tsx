"use client";
import React from "react";
import {
  Box,
  Burger,
  Button,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  Indicator,
  Menu,
  Text,
  Title,
} from "@mantine/core";
import { IconHome2, IconCurrencyBitcoin, IconHome } from "@tabler/icons-react";

const menu = [
  {
    label: "自分の記録",
    icon: "/icons/icon-challenge.svg",
  },
  {
    label: "チャレンジ",
    icon: "/icons/icon-memo.svg",
  },
  {
    label: "お知らせ",
    icon: "/icons/icon-info.svg",
  },
];

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[4],
    height: 90,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      height: 60,
    },
  },
  nav: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
  menu: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
  menuMobile: {
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
}));

const AppHeader = () => {
  const { classes } = useStyles();

  return (
    <Header className={classes.header} height={90}>
      <Container
        size="xl"
        sx={(theme) => {
          return { height: "100%" };
        }}
      >
        <Group sx={{ height: "100%" }} position="apart">
          <Group mr={40}>
            <Group>
              <Image
                height={60}
                width={140}
                fit="contain"
                src="/logos/header-logo.png"
                alt="Logo"
              />
            </Group>

            <Group className={classes.nav}>
              {menu.map((n, idx) => (
                <Group key={idx}>
                  <Indicator label="1">
                    <Image width={36} alt="" src={n.icon} />
                  </Indicator>
                  <Text>{n.label}</Text>
                </Group>
              ))}
            </Group>
          </Group>

          <Group className={classes.menu}>Test</Group>

          <Box className={classes.menuMobile}>
            <Menu shadow="md" width="100%">
              <Menu.Target>
                <Burger opened={false}>Toggle menu</Burger>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Navigation</Menu.Label>

                {menu.map((n, idx) => (
                  <Menu.Item key={idx} icon={n.icon}>
                    {n.label}
                  </Menu.Item>
                ))}

                <Menu.Divider />
                <Menu.Label>Authentication</Menu.Label>
                <Menu.Item icon={<IconCurrencyBitcoin />}>Test</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Group>
      </Container>
    </Header>
  );
};

export default AppHeader;
