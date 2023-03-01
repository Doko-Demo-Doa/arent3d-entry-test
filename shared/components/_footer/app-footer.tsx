"use client";
import React from "react";
import {
  Anchor,
  Box,
  Burger,
  Button,
  Container,
  createStyles,
  Flex,
  Footer,
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
    label: "会員登録",
  },
  {
    label: "運営会社",
  },
  {
    label: "利用規約",
  },
  {
    label: "個人情報の取扱について",
  },
  {
    label: "特定商取引法に基づく表記",
  },
  {
    label: "お問い合わせ",
  },
];

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.primaryGray[4],
  },
  link: {},
}));

const AppFooter = () => {
  const { classes } = useStyles();

  return (
    <Footer className={classes.footer} height={140}>
      <Container
        size="lg"
        sx={(theme) => {
          return {
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          };
        }}
      >
        <Group spacing={54} noWrap={false} position="center">
          {menu.map((n, idx) => (
            <UnstyledButton
              key={idx}
              component={Link}
              href="https://google.com"
              sx={{
                color: "white",
              }}
            >
              {n.label}
            </UnstyledButton>
          ))}
        </Group>
      </Container>
    </Footer>
  );
};

export default AppFooter;
