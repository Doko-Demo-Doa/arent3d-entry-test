import {
  AspectRatio,
  Box,
  Center,
  createStyles,
  Divider,
  Flex,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {},
  subtitle: {},
}));

const data = [
  {
    title: "RECOMMENDED COLUMN",
    kanji: "オススメ",
  },
  {
    title: "RECOMMENDED DIET",
    kanji: "ダイエット",
  },
  {
    title: "RECOMMENDED BEAUTY",
    kanji: "美容",
  },
  {
    title: "RECOMMENDED HEALTH",
    kanji: "健康",
  },
];

const NavigationTiles: React.FC = () => {
  const { classes } = useStyles();

  return (
    <SimpleGrid
      cols={4}
      spacing={32}
      breakpoints={[
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: 32 },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
      {data.map((n, idx) => (
        <AspectRatio key={idx} ratio={16 / 10} mb="sm">
          <Paper
            px="lg"
            sx={(theme) => ({ backgroundColor: theme.colors.primaryGray[8] })}
          >
            <Flex direction="column" justify="center" align="center">
              <Title
                order={3}
                align="center"
                weight="normal"
                color="primaryGolden.5"
              >
                {n.title}
              </Title>

              <Divider w={64} my={10} />

              <Text align="center" color="white" className={classes.subtitle}>
                {n.kanji}
              </Text>
            </Flex>
          </Paper>
        </AspectRatio>
      ))}
    </SimpleGrid>
  );
};

export default NavigationTiles;
