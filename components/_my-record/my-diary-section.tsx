import { SimpleGrid, Paper, createStyles, Title, Text } from "@mantine/core";

const dummyArray = new Array(30).fill(0).map((e, i) => {
  return {
    date: "2021-01-01",
    hour: "12:00",
    content:
      "私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  };
});

const useStyles = createStyles((theme) => ({
  wrapper: {
    border: `2px solid ${theme.colors.gray[6]}`,
    borderRadius: 0,
  },
}));

const MyDiarySection = () => {
  const { classes } = useStyles();

  return (
    <>
      <SimpleGrid
        cols={4}
        spacing="xl"
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {dummyArray.map((n, idx) => (
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
    </>
  );
};

export default MyDiarySection;
