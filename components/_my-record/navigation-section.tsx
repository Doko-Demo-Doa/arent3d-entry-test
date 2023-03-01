import { SimpleGrid, Container } from "@mantine/core";
import MasterLayout from "~/layouts/master-layout";
import PictureFrame from "~/shared/components/picture-frame/picture-frame";

const NavigationSection = () => {
  return (
    <>
      <SimpleGrid
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: 32 },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
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
    </>
  );
};

export default NavigationSection;
