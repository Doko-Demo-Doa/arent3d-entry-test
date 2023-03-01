import { SimpleGrid, AspectRatio, Image, Container } from "@mantine/core";
import MasterLayout from "~/layouts/master-layout";
import PictureFrame from "~/shared/components/picture-frame/picture-frame";

const Playground = () => {
  return (
    <Container>
      <SimpleGrid cols={3}>
        <PictureFrame
          src={
            "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          }
          title="BODY RECORD"
          subtitle="自分のカラダの記録"
        />
      </SimpleGrid>
    </Container>
  );
};

Playground.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="Playground">{page}</MasterLayout>;
};

export default Playground;
