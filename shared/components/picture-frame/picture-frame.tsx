import {
  AspectRatio,
  Box,
  createStyles,
  Image,
  Text,
  Title,
} from "@mantine/core";

interface Props {
  src: string;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

const useStyles = createStyles((theme) => ({
  arContainer: {
    cursor: "pointer",
    position: "relative",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 2,
    height: "100%",
    width: "100%",
  },
  title: {},
  subtitleBox: {
    backgroundColor: theme.colors.primaryOrange[5],
    alignSelf: "center",
    minWidth: 160,
  },
  imageFigure: {
    width: "100%",
    height: "100%",
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    filter: "grayscale(1) brightness(0.4)",
  },
}));

const PictureFrame: React.FC<Props> = ({ src, title, subtitle, onClick }) => {
  const { classes } = useStyles();

  return (
    <AspectRatio ratio={1} className={classes.arContainer} onClick={onClick}>
      <Image
        src={src}
        alt=""
        width="100%"
        height="100%"
        classNames={{
          figure: classes.imageFigure,
          imageWrapper: classes.imageWrapper,
        }}
        sx={(theme) => ({
          borderWidth: 26,
          borderColor: theme.colors.primaryGolden[5],
          borderStyle: "solid",
          position: "absolute",
          zIndex: 1,
        })}
      />
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
    </AspectRatio>
  );
};

export default PictureFrame;
