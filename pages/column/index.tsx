import { useState } from "react";
import { Center, Container, SimpleGrid, Space } from "@mantine/core";

import MasterLayout from "~/layouts/master-layout";
import NavigationTiles from "~/components/_column/navigation-tiles";
import ArticleThumbnail from "~/shared/components/article-thumbnail/article-thumbnail";
import ViewMoreButton from "~/shared/components/buttons/view-more-button";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const ColumnPage = () => {
  const [loading, setLoading] = useState(false);
  const [dummpData, setData] = useState(
    new Array(8).fill(0).map((e, i) => {
      return {
        date: "2021-01-01",
        hour: "12:00",
        content:
          "私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      };
    })
  );

  function loadMore() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      const append = new Array(8).fill(0).map((e, i) => {
        return {
          date: "2021-01-01",
          hour: "12:00",
          content:
            "私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        };
      });
      setData([...dummpData, ...append]);
    }, 1500);
  }

  return (
    <Container size="lg">
      <Space h={42} />
      <NavigationTiles />
      <Space h={42} />

      <SimpleGrid
        cols={4}
        spacing="xl"
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
        mb={50}
      >
        {dummpData.map((n, idx) => (
          <ArticleThumbnail
            src={`/demo/thumbs-column/column-${getRandomInt(7) + 1}.jpg`}
            hashtags={["#魚料理", "#和食", "#DHA"]}
            title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
            label="2021.05.17 23:25"
            key={idx}
          />
        ))}
      </SimpleGrid>

      <Center>
        <ViewMoreButton
          loading={loading}
          title="コラムをもっと見る"
          onClick={loadMore}
        />
      </Center>

      <Space h={42} />
    </Container>
  );
};

ColumnPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="Column">{page}</MasterLayout>;
};

export default ColumnPage;
