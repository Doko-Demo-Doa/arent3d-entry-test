import {
  SimpleGrid,
  Paper,
  createStyles,
  Title,
  Text,
  Loader,
  Button,
  Center,
} from "@mantine/core";
import { useState } from "react";
import ViewMoreButton from "~/shared/components/buttons/view-more-button";
import useFakeApi from "~/shared/hooks/use-fake-api";

const useStyles = createStyles((theme) => ({
  wrapper: {
    border: `2px solid ${theme.colors.gray[6]}`,
    borderRadius: 0,
  },
}));

const MyDiarySection = () => {
  const { classes } = useStyles();
  const { data, isLoading, refetch } = useFakeApi();

  const [dummpData] = useState(
    new Array(8).fill(0).map((e, i) => {
      return {
        date: "2021-01-01",
        hour: "12:00",
        content:
          "私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      };
    })
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
            <Paper key={idx} p="lg" className={classes.wrapper}>
              <Title order={3} weight="normal" color="primaryGray.6" ff="Inter">
                {n.date}
              </Title>
              <Title
                order={3}
                weight="normal"
                color="primaryGray.6"
                ff="Inter"
                mb="lg"
              >
                {n.hour}
              </Title>

              <Text weight="lighter" size="sm" ff="Inter">
                {n.content}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      )}

      {!isLoading && data && (
        <Center>
          <ViewMoreButton
            loading={isLoading}
            title="記録をもっと見る"
            onClick={() => refetch()}
          />
        </Center>
      )}
    </>
  );
};

export default MyDiarySection;
