import { SimpleGrid, AspectRatio, Image, Container } from "@mantine/core";
import MasterLayout from "~/layouts/master-layout";
import ArticleThumbnail from "~/shared/components/article-thumbnail/article-thumbnail";
import LabeledPicture from "~/shared/components/labeled-picture/labeled-picture";
import PictureFrame from "~/shared/components/picture-frame/picture-frame";

const link =
  "https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80";

const Playground = () => {
  return (
    <Container>
      <SimpleGrid cols={3}>
        <PictureFrame
          src={link}
          title="BODY RECORD"
          subtitle="自分のカラダの記録"
        />

        <LabeledPicture src="/demo/sandwich.png" label="05.21 Morning" />

        <ArticleThumbnail
          title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリメリメリメリメリメリメリ…"
          hashtags={[
            "#魚料理",
            "#和食",
            "#DHA",
            "#魚料理",
            "#和食",
            "#DHA",
            "#魚料理",
            "#和食",
            "#DHA",
          ]}
          src="/demo/sandwich.png"
          label="05.21 Morning"
        />
      </SimpleGrid>
    </Container>
  );
};

Playground.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="Playground">{page}</MasterLayout>;
};

export default Playground;
