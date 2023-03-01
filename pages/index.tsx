import { Box, Container, Group } from "@mantine/core";
import MasterLayout from "~/layouts/master-layout";
import Hexagon from "~/shared/components/hexagon/hexagon";

const Home = () => {
  return (
    <Container>
      <Group position="center" spacing="xl">
        <Hexagon label="Morning" icon="/icons/icon-knife.svg" />
        <Hexagon label="Lunch" icon="/icons/icon-knife.svg" />
        <Hexagon label="Dinner" icon="/icons/icon-knife.svg" />
        <Hexagon label="Snack" icon="/icons/icon-cup.svg" />
      </Group>

      <Box style={{ height: "2000px" }} />
    </Container>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="Home">{page}</MasterLayout>;
};

export default Home;
