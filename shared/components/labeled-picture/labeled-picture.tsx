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
  label?: string;
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

const LabeledPicture: React.FC<Props> = ({ src, label }) => {
  const { classes } = useStyles();

  return (
    <AspectRatio ratio={1}>
      <BackgroundImage
        src={src}
        sx={(theme) => ({
          position: "relative",
        })}
      >
        <Box className={classes.wrapper}>
          <Box py={4} px={18} className={classes.subtitleBox}>
            <Text align="center" color="white" className={classes.subtitle}>
              {label}
            </Text>
          </Box>
        </Box>
      </BackgroundImage>
    </AspectRatio>
  );
};

export default LabeledPicture;
