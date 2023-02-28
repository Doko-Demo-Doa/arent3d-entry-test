import React from "react";
import { Text, Box, Image, createStyles } from "@mantine/core";

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
  },
  txt: {
    color: theme.colors.gray[0],
    fontSize: 28,
  },
}));

const Hexagon: React.FC<Props> = ({ icon, label }) => {
  const { classes, cx } = useStyles();

  return (
    <Box className={cx(classes.wrapper)}>
      <Image width={80} height={80} alt="" src={icon} />
      <Text className={classes.txt}>{label}</Text>
    </Box>
  );
};

export default Hexagon;
