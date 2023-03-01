import { Box, Space, Group, Container, Grid } from "@mantine/core";
import OverviewChart from "~/components/_home/overview-chart";
import MasterLayout from "~/layouts/master-layout";

import Hexagon from "~/shared/components/hexagon/hexagon";
import LabeledPicture from "~/shared/components/labeled-picture/labeled-picture";

const dummyData = [
  {
    img: "m01",
    label: "05.21.Morning",
  },
  {
    img: "m02",
    label: "05.21.Lunch",
  },
  {
    img: "m03",
    label: "05.21.Dinner",
  },
  {
    img: "m04",
    label: "05.21.Snack",
  },
  {
    img: "m05",
    label: "05.20.Morning",
  },
  {
    img: "m06",
    label: "05.20.Lunch",
  },
  {
    img: "m07",
    label: "05.20.Dinner",
  },
  {
    img: "m08",
    label: "05.21.Snack",
  },
];

const Home = () => {
  return (
    <>
      <OverviewChart />

      <Space h={42} />

      <Container size="lg">
        <Group position="center" spacing="xl">
          <Hexagon label="Morning" icon="/icons/icon-knife.svg" />
          <Hexagon label="Lunch" icon="/icons/icon-knife.svg" />
          <Hexagon label="Dinner" icon="/icons/icon-knife.svg" />
          <Hexagon label="Snack" icon="/icons/icon-cup.svg" />
        </Group>

        <Space h={42} />

        <Grid>
          {dummyData.map((n, idx) => (
            <Grid.Col key={idx} span={3}>
              <LabeledPicture
                src={`/demo/thumbs/${n.img}.jpg`}
                label={n.label}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      <Space h={42} />
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="Home">{page}</MasterLayout>;
};

export default Home;
