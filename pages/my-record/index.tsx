import { Container, Space } from "@mantine/core";
import MasterLayout from "~/layouts/master-layout";

import ExercisesSection from "~/components/_my-record/exercises-section";
import NavigationSection from "~/components/_my-record/navigation-section";
import MyDiarySection from "~/components/_my-record/my-diary-section";

const MyRecordPage = () => {
  return (
    <Container size="lg">
      <Space h={42} />
      <NavigationSection />
      <Space h={42} />
      <ExercisesSection />
      <Space h={52} />
      <MyDiarySection />
      <Space h={52} />
    </Container>
  );
};

MyRecordPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="My Record">{page}</MasterLayout>;
};

export default MyRecordPage;
