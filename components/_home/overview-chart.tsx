import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  SimpleGrid,
  AspectRatio,
  Image,
  Grid,
  BackgroundImage,
  Flex,
  Box,
  useMantineTheme,
} from "@mantine/core";

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

const OverviewChart = () => {
  const theme = useMantineTheme();

  return (
    <Flex direction="row">
      <BackgroundImage
        sx={{ width: "40%", flexGrow: 1, backgroundColor: "yellow" }}
        src="/demo/dishes.jpg"
      >
        test
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
            <XAxis dataKey="name" />
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
