import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  BackgroundImage,
  Flex,
  Box,
  useMantineTheme,
  createStyles,
  Text,
} from "@mantine/core";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// TODO: Dummy, should be removed
const data = [
  {
    name: "6月",
    c1: 3000,
    c2: 2400,
    c3: 1400,
  },
  {
    name: "7月",
    c1: 2000,
    c2: 1000,
    c3: 2210,
  },
  {
    name: "8月",
    c1: 1400,
    c2: 10100,
    c3: 1290,
  },
  {
    name: "9月",
    c1: 3120,
    c2: 4400,
    c3: 1000,
  },
  {
    name: "10月",
    c1: 3120,
    c2: 4400,
    c3: 1000,
  },
  {
    name: "11月",
    c1: 3120,
    c2: 4400,
    c3: 1000,
  },
  {
    name: "12月",
    c1: 3120,
    c2: 4400,
    c3: 1000,
  },
  {
    name: "1月",
    c1: 3120,
    c2: 4400,
    c3: 2000,
  },
  {
    name: "2月",
    c1: 3120,
    c2: 4400,
    c3: 1000,
  },
  {
    name: "3月",
    c1: 3120,
    c2: 4400,
    c3: 1000,
  },
  {
    name: "4月",
    c1: 2000,
    c2: 1000,
    c3: 1000,
  },
  {
    name: "5月",
    c1: 3120,
    c2: 4400,
    c3: 1000,
  },
];

const useStyles = createStyles((theme) => ({
  bgSection: { width: "40%", flexGrow: 1, backgroundColor: "yellow" },
  link: {},
  innerCircularTextWrapper: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  progressValue1: {
    fontSize: 24,
    fontFamily: "Inter",
    color: "white",
    textShadow: `0 0 20px ${theme.colors.primaryGolden[5]}, 0 0 10px ${theme.colors.primaryGolden[5]}`,
  },
  progressValue2: {
    fontSize: 44,
    fontFamily: "Inter",
  },
}));

const OverviewChart = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Flex direction="row">
      <BackgroundImage
        sx={(theme) => ({
          width: "45%",
          backgroundColor: "yellow",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
        src="/demo/dishes.jpg"
      >
        <Box w="46%" sx={{ position: "relative" }}>
          <CircularProgressbar
            value={80}
            strokeWidth={2}
            styles={{
              path: {
                stroke: "white",
                filter: "drop-shadow(5px 5px 4px rgba(255, 204, 33, 0.5))",
              },
              trail: {
                stroke: "transparent",
              },
            }}
          />

          <Box className={classes.innerCircularTextWrapper}>
            <Text className={classes.progressValue1}>
              05/21{" "}
              <Text component="span" className={classes.progressValue2}>
                75%
              </Text>
            </Text>
          </Box>
        </Box>
      </BackgroundImage>

      <Box
        sx={(theme) => ({
          flexGrow: 2,
          backgroundColor: theme.colors.primaryGray[6],
        })}
        px={30}
        py={12}
      >
        <ResponsiveContainer width="95%" height={400}>
          <LineChart data={data}>
            <XAxis axisLine={false} dataKey="name" />
            <CartesianGrid
              horizontal={false}
              strokeDasharray="0"
              stroke={theme.colors.primaryGray[5]}
            />
            <Tooltip />

            <Line
              type="linear"
              dataKey="c1"
              stroke={theme.colors.primaryGolden[5]}
              activeDot={{ r: 4 }}
              strokeWidth={4}
            />
            <Line
              type="monotone"
              dataKey="c2"
              strokeWidth={4}
              stroke={theme.colors.secondaryTeal[5]}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  );
};

export default OverviewChart;
