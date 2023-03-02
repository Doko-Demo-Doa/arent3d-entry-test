import { Box, Button, Group, Title, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Line,
} from "recharts";

import data from "~/components/chart-data.json";
import { dataUtils } from "~/utils/utils-data";

type ChartType = "day" | "week" | "month" | "year";

const buttons: Array<{ label: string; type: ChartType }> = [
  {
    label: "日",
    type: "day",
  },
  {
    label: "週",
    type: "week",
  },
  {
    label: "月",
    type: "month",
  },
  {
    label: "年",
    type: "year",
  },
];

const ChartSection = () => {
  const theme = useMantineTheme();
  const [chartMode, setChartMode] = useState<ChartType>("year");
  const [filteredData, setData] = useState(data);

  return (
    <div>
      <Box
        sx={(theme) => ({
          flexGrow: 2,
          backgroundColor: theme.colors.primaryGray[6],
        })}
        px={30}
        py={22}
      >
        <Group mb="lg">
          <Title order={4} color="white" weight="lighter" ff="Inter" mr={40}>
            BODY
            <br />
            RECORD
          </Title>

          <Title order={3} color="white" weight="normal" ff="Inter">
            2021.05.21
          </Title>
        </Group>

        <ResponsiveContainer height={360}>
          <LineChart data={filteredData}>
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

        <Group mt="md">
          {buttons.map((n, idx) => {
            const isActive = chartMode === n.type;

            return (
              <Button
                key={idx}
                compact
                onClick={() => {
                  setChartMode(n.type);
                  setData(
                    data.map((d) => {
                      const newD = {
                        ...d,
                        c1: dataUtils.randomIntFromInterval(500, 3000),
                        c2: dataUtils.randomIntFromInterval(500, 3000),
                        c3: dataUtils.randomIntFromInterval(500, 4000),
                      };
                      return newD;
                    })
                  );
                }}
                sx={{
                  minWidth: 60,
                  borderRadius: 20,
                  fontWeight: "lighter",
                  color: !isActive
                    ? theme.colors.primaryGolden[5]
                    : theme.colors.gray[0],
                  backgroundColor: isActive
                    ? theme.colors.primaryGolden[5]
                    : theme.colors.gray[0],
                  "&:hover": {
                    backgroundColor: theme.colors.primaryGolden[2],
                  },
                }}
              >
                {n.label}
              </Button>
            );
          })}
        </Group>
      </Box>
    </div>
  );
};

export default ChartSection;
