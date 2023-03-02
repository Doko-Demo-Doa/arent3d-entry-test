import { Container, Space } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";

import MasterLayout from "~/layouts/master-layout";
import ExercisesSection from "~/components/_my-record/exercises-section";
import NavigationSection from "~/components/_my-record/navigation-section";
import MyDiarySection from "~/components/_my-record/my-diary-section";

const MyRecordPage = () => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  function onClickSection(params: number) {
    switch (params) {
      case 0:
        scrollIntoView();
        break;

      default:
        break;
    }
  }

  return (
    <Container size="lg">
      <Space h={42} />
      <NavigationSection onClick={(id) => onClickSection(id)} />
      <Space h={42} ref={targetRef} />
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
