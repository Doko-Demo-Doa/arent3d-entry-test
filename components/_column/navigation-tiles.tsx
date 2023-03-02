import {
  AspectRatio,
  createStyles,
  Paper,
  SimpleGrid,
  Text,
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
            sx={(theme) => ({ backgroundColor: theme.colors.primaryGray[8] })}
          >
            <Text align="center" color="white" className={classes.subtitle}>
              {n.kanji}
            </Text>
          </Paper>
        </AspectRatio>
      ))}
    </SimpleGrid>
  );
};

export default NavigationTiles;
