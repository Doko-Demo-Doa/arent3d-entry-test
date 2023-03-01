import React from "react";
import { Text, Box, Image, createStyles } from "@mantine/core";
import { useHover } from "@mantine/hooks";

interface Props {
  icon: string;
  label: string;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 200,
    height: 200,
    backgroundImage: "url(/shapes/hexagon.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    cursor: "pointer",
    filter: "brightness(0.95)",
    transition: "0.2s linear",
  },
  wrapperActive: {
    filter: "brightness(1.16)",
  },
  txt: {
    color: theme.colors.gray[0],
    fontSize: 28,
  },
}));

const Hexagon: React.FC<Props> = ({ icon, label }) => {
  const { classes, cx } = useStyles();
  const { hovered, ref } = useHover();

  return (
    <Box
      ref={ref}
      className={cx(classes.wrapper, hovered ? classes.wrapperActive : "")}
    >
      <Image width={80} height={80} alt="" src={icon} />
      <Text className={classes.txt}>{label}</Text>
    </Box>
  );
};

export default Hexagon;
