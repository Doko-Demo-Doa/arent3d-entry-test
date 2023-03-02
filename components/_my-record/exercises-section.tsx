import {
  Box,
  createStyles,
  Divider,
  Group,
  Paper,
  ScrollArea,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

const dummyArray = new Array(30).fill(0).map((e, i) => {
  return {
    headline: "家事全般（立位・軽い）",
    kcal: "26kcal",
    mins: "10 min",
  };
});

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.primaryGray[4],
  },
}));

const ExercisesSection = () => {
  const { classes } = useStyles();

  return (
    <Paper className={classes.wrapper} py={16} px={20}>
      <Group mb="lg">
        <Title order={4} color="white" weight="lighter" ff="Inter" mr={40}>
          MY
          <br />
          EXERCISE
        </Title>

        <Title order={3} color="white" weight="normal" ff="Inter">
          2021.05.21
        </Title>
      </Group>

      <ScrollArea
        style={{ height: 320 }}
        styles={(theme) => ({
          thumb: { backgroundColor: theme.colors.primaryGolden[5] },
        })}
        pr={24}
      >
        <SimpleGrid
          cols={2}
          spacing={32}
          verticalSpacing={8}
          sx={{ color: "white" }}
          breakpoints={[
            { maxWidth: "md", cols: 2, spacing: "md" },
            { maxWidth: "sm", cols: 1, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          {dummyArray.map((n, idx) => (
            <Box key={idx}>
              <Group key={idx} align="baseline" position="apart">
                <Text size={6}>●</Text>
                <Box sx={{ flexGrow: 2 }}>
                  <Text size="lg">{n.headline}</Text>
                  <Text size="md" ff="Inter" color="primaryGolden.5">
                    {n.kcal}
                  </Text>
                </Box>

                <Text size="lg" ff="Inter" color="primaryGolden.5">
                  10 min
                </Text>
              </Group>
              <Divider color="primaryGray.0" my={0} />
            </Box>
          ))}
        </SimpleGrid>
      </ScrollArea>
    </Paper>
  );
};

export default ExercisesSection;
