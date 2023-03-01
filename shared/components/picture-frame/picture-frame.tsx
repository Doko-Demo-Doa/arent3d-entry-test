import {
  AspectRatio,
  BackgroundImage,
  Box,
  createStyles,
  Text,
  Title,
} from "@mantine/core";

interface Props {
  src: string;
  title?: string;
  subtitle?: string;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 2,
  },
  title: {},
  subtitleBox: {
    backgroundColor: theme.colors.primaryOrange[5],
    alignSelf: "center",
    minWidth: 160,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
}));

const PictureFrame: React.FC<Props> = ({ src, title, subtitle }) => {
  const { classes } = useStyles();

  return (
    <AspectRatio ratio={1}>
      <BackgroundImage
        src={src}
        sx={(theme) => ({
          borderWidth: 26,
          borderColor: theme.colors.primaryGolden[5],
          borderStyle: "solid",
          position: "relative",
        })}
      >
        <Box className={classes.overlay} />
        <Box className={classes.wrapper}>
          <Title
            weight="normal"
            align="center"
            color="primaryGolden.5"
            order={2}
            className={classes.title}
            mb={10}
          >
            {title}
          </Title>
          <Box py={4} px={12} className={classes.subtitleBox}>
            <Text align="center" color="white">
              {subtitle}
            </Text>
          </Box>
        </Box>
      </BackgroundImage>
    </AspectRatio>
  );
};

export default PictureFrame;
