import {
  Box,
  createStyles,
  Group,
  Image,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import Link from "next/link";
import React from "react";

interface Props {
  counter?: number;
  label?: string;
  isActive?: boolean;
  iconSrc: string;
  to: string;
}

const DOT_SIZE = 20;

const useStyles = createStyles((theme) => ({
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
  hoveredText: {
    color: theme.colors.primaryDarkOrange[5],
  },
}));

const CustomMenuItem: React.FC<Props> = ({
  counter,
  label,
  iconSrc,
  to,
  isActive,
}) => {
  const { classes, cx } = useStyles();
  const { hovered, ref } = useHover<HTMLAnchorElement>();

  return (
    <UnstyledButton ref={ref} component={Link} href={to}>
      <Group sx={{ position: "relative" }}>
        <Image width={36} alt="" src={iconSrc} />
        {counter && <Box className={classes.indicatorDot}>{counter}</Box>}

        <Text
          size="lg"
          weight="lighter"
          color="white"
          mr={32}
          className={cx(hovered || isActive ? classes.hoveredText : "")}
        >
          {label}
        </Text>
      </Group>
    </UnstyledButton>
  );
};

export default CustomMenuItem;
