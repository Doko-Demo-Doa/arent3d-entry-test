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
} from "@mantine/core";

// TODO: Dummy, should be removed
const data = [
  {
    name: "A",
    c1: 3000,
    c2: 2400,
    c3: 1400,
  },
  {
    name: "B",
    c1: 2000,
    c2: 1000,
    c3: 2210,
  },
  {
    name: "C",
    c1: 1400,
    c2: 10100,
    c3: 1290,
  },
  {
    name: "D",
    c1: 3120,
    c2: 4400,
    c3: 1000,
  },
];

const OverviewChart = () => {
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
      >
        <ResponsiveContainer width="95%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="c1"
              stroke="red"
              activeDot={{ r: 4 }}
              strokeWidth={4}
            />
            <Line type="monotone" dataKey="c2" strokeWidth={4} stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  );
};

export default OverviewChart;
