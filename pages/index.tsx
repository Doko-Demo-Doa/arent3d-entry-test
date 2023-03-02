import {
  Space,
  Group,
  Container,
  Grid,
  Center,
  Transition,
} from "@mantine/core";
import { useState } from "react";
import OverviewChart from "~/components/_home/overview-chart";
import MasterLayout from "~/layouts/master-layout";
import ViewMoreButton from "~/shared/components/buttons/view-more-button";

import Hexagon from "~/shared/components/hexagon/hexagon";
import LabeledPicture from "~/shared/components/labeled-picture/labeled-picture";

const dummyData = [
  {
    img: "m01",
    label: "05.21.Morning",
    tag: "morning",
  },
  {
    img: "m02",
    label: "05.21.Lunch",
    tag: "lunch",
  },
  {
    img: "m03",
    label: "05.21.Dinner",
    tag: "dinner",
  },
  {
    img: "m04",
    label: "05.21.Snack",
    tag: "snack",
  },
  {
    img: "m05",
    label: "05.20.Morning",
    tag: "morning",
  },
  {
    img: "m06",
    label: "05.20.Lunch",
    tag: "lunch",
  },
  {
    img: "m07",
    label: "05.20.Dinner",
    tag: "dinner",
  },
  {
    img: "m08",
    label: "05.21.Snack",
    tag: "snack",
  },
];

type TagType = "morning" | "lunch" | "dinner" | "snack" | "";

const Home = () => {
  const [currentTag, setTag] = useState<TagType>("");

  return (
    <>
      <OverviewChart />
      <Space h={42} />
      <Container size="lg">
        <Group position="center" spacing="xl">
          <Hexagon
            label="Morning"
            icon="/icons/icon-knife.svg"
            onClick={() => setTag(currentTag === "morning" ? "" : "morning")}
            inactive={currentTag !== "morning" && currentTag !== ""}
          />
          <Hexagon
            label="Lunch"
            icon="/icons/icon-knife.svg"
            onClick={() => setTag(currentTag === "lunch" ? "" : "lunch")}
            inactive={currentTag !== "lunch" && currentTag !== ""}
          />
          <Hexagon
            label="Dinner"
            icon="/icons/icon-knife.svg"
            onClick={() => setTag(currentTag === "dinner" ? "" : "dinner")}
            inactive={currentTag !== "dinner" && currentTag !== ""}
          />
          <Hexagon
            label="Snack"
            icon="/icons/icon-cup.svg"
            onClick={() => setTag(currentTag === "snack" ? "" : "snack")}
            inactive={currentTag !== "snack" && currentTag !== ""}
          />
        </Group>

        <Space h={42} />

        <Grid gutter="lg">
          {dummyData.map((n, idx) => (
            <Transition
              key={idx}
              mounted={n.tag === currentTag || currentTag === ""}
              transition="fade"
              duration={0}
              timingFunction="ease"
            >
              {(styles) => (
                <Grid.Col styles={styles} key={idx} sm={6} md={3}>
                  <LabeledPicture
                    src={`/demo/thumbs/${n.img}.jpg`}
                    label={n.label}
                  />
                </Grid.Col>
              )}
            </Transition>
          ))}
        </Grid>
      </Container>

      <Space h={42} />

      <Center>
        <ViewMoreButton title="記録をもっと見る" onClick={() => null} />
      </Center>

      <Space h={142} />
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="Home">{page}</MasterLayout>;
};

export default Home;
