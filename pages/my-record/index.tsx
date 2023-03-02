import { Container, Space } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";

import MasterLayout from "~/layouts/master-layout";
import ExercisesSection from "~/components/_my-record/exercises-section";
import NavigationSection from "~/components/_my-record/navigation-section";
import MyDiarySection from "~/components/_my-record/my-diary-section";
import ChartSection from "~/components/_my-record/chart-section";

const MyRecordPage = () => {
  const { scrollIntoView: scrollIntoChart, targetRef: chartRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });

  const { scrollIntoView: scrollIntoExSection, targetRef: exerciseRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 20,
    });

  const { scrollIntoView: scrollIntoDiary, targetRef: diaryRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });

  function onClickSection(params: number) {
    switch (params) {
      case 0:
        scrollIntoChart();
        break;
      case 1:
        scrollIntoExSection();
        break;
      case 2:
        scrollIntoDiary();
        break;
      default:
        break;
    }
  }

  return (
    <Container size="lg">
      <Space h={42} />
      <NavigationSection onClick={(id) => onClickSection(id)} />
      <Space h={42} ref={chartRef} />
      <ChartSection />
      <Space h={42} ref={exerciseRef} />
      <ExercisesSection />
      <Space h={52} ref={diaryRef} />
      <MyDiarySection />
      <Space h={52} />
    </Container>
  );
};

MyRecordPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="My Record">{page}</MasterLayout>;
};

export default MyRecordPage;
