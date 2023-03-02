import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Flex,
  Box,
  useMantineTheme,
  createStyles,
  Text,
  Image,
} from "@mantine/core";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// TODO: Dummy, should be removed later
import data from "~/components/chart-data.json";

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        flexDirection: "column",
      },
      [`@media (min-width: ${theme.breakpoints.md}px)`]: {
        flexDirection: "row",
      },
    },
    bgSection: {
      [`@media (max-width: ${theme.breakpoints.md}px)`]: {
        width: "unset",
      },
      [`@media (min-width: ${theme.breakpoints.md}px)`]: {
        width: "45%",
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    },
    bgImage: {
      position: "absolute",
    },
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
  };
});

const OverviewChart = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Flex className={classes.wrapper}>
      <Box className={classes.bgSection} py={26}>
        <Image
          fit="fill"
          alt=""
          src="/demo/dishes.jpg"
          height="100%"
          className={classes.bgImage}
        />

        <Box w="40%" sx={{ position: "relative", maxWidth: 300 }}>
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
      </Box>

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
            <XAxis axisLine={false} dataKey="name" tick={{ fill: "white" }} />
            <CartesianGrid
              horizontal={false}
              strokeDasharray="0"
              stroke={theme.colors.primaryGray[2]}
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
