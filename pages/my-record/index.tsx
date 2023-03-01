import { SimpleGrid, Container } from "@mantine/core";
import MasterLayout from "~/layouts/master-layout";
import PictureFrame from "~/shared/components/picture-frame/picture-frame";

const link =
  "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80";

const MyRecordPage = () => {
  return (
    <Container>
      <SimpleGrid cols={3}>
        <PictureFrame
          src="/demo/my-recommendation-01.jpg"
          title="BODY RECORD"
          subtitle="自分のカラダの記録"
        />

        <PictureFrame
          src="/demo/my-recommendation-02.jpg"
          title="MY EXERCISE"
          subtitle="自分の運動の記録"
        />

        <PictureFrame
          src="/demo/my-recommendation-03.jpg"
          title="MY DIARY"
          subtitle="自分の日記"
        />
      </SimpleGrid>
    </Container>
  );
};

MyRecordPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="My Record">{page}</MasterLayout>;
};

export default MyRecordPage;
