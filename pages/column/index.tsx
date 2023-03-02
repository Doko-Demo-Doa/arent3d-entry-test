import { Container, Space } from "@mantine/core";
import MasterLayout from "~/layouts/master-layout";

import ExercisesSection from "~/components/_my-record/exercises-section";
import NavigationSection from "~/components/_my-record/navigation-section";
import MyDiarySection from "~/components/_my-record/my-diary-section";
import NavigationTiles from "~/components/_column/navigation-tiles";

const ColumnPage = () => {
  return (
    <Container size="lg">
      <Space h={42} />
      <NavigationTiles />
      <Space h={42} />
    </Container>
  );
};

ColumnPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="Column">{page}</MasterLayout>;
};

export default ColumnPage;
