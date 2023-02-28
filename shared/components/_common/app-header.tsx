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
  Menu,
  Title,
} from "@mantine/core";
import { IconHome2, IconCurrencyBitcoin, IconHome } from "@tabler/icons-react";

const menu = [
  {
    label: "For Sale",
    icon: <IconHome2 />,
  },
  {
    label: "For Rent",
    icon: <IconHome />,
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
                height={40}
                width={120}
                fit="contain"
                src="/logos/header-logo.png"
                alt="Logo"
              />
            </Group>

            <Group className={classes.nav}>
              {menu.map((n, idx) => (
                <Menu key={idx} shadow="md" width={200}>
                  <Menu.Target>
                    <Button leftIcon={n.icon} variant="subtle">
                      {n.label}
                    </Button>
                  </Menu.Target>
                </Menu>
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
