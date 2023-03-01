import {
  Anchor,
  AspectRatio,
  BackgroundImage,
  Box,
  createStyles,
  Flex,
  Text,
} from "@mantine/core";

interface Props {
  src: string;
  label?: string;
  title: string;
  hashtags: string[];
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 2,
  },
  subtitleBox: {
    backgroundColor: theme.colors.primaryGolden[5],
    alignSelf: "center",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  subtitle: {
    fontFamily: "Inter",
  },
}));

const ArticleThumbnail: React.FC<Props> = ({ src, title, hashtags, label }) => {
  const { classes } = useStyles();

  return (
    <Box>
      <AspectRatio ratio={16 / 10} mb="sm">
        <BackgroundImage
          src={src}
          sx={(theme) => ({
            position: "relative",
          })}
        >
          <Box className={classes.wrapper}>
            <Box py={4} px={12} className={classes.subtitleBox}>
              <Text align="center" color="white" className={classes.subtitle}>
                {label}
              </Text>
            </Box>
          </Box>
        </BackgroundImage>
      </AspectRatio>

      <Text color="gray.7 " lineClamp={2} mb={8}>
        {title}
      </Text>

      <Flex direction="row" wrap="wrap">
        {hashtags.map((hashtag, idx) => (
          <Anchor size="sm" color="primaryDarkOrange.4" key={idx} pr={12}>
            {`${hashtag}`}
          </Anchor>
        ))}
      </Flex>
    </Box>
  );
};

export default ArticleThumbnail;
