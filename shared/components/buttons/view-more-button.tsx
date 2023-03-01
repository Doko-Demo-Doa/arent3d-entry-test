import { Button, Title } from "@mantine/core";

interface Props {
  title: string;
  loading?: boolean;
  onClick?: () => void;
}

const ViewMoreButton: React.FC<Props> = ({ title, loading, onClick }) => {
  return (
    <Button
      size="md"
      variant="gradient"
      gradient={{
        from: "primaryGolden.5",
        to: "primaryOrange.5",
        deg: -5,
      }}
      loading={loading}
      styles={(theme) => ({
        root: {
          height: "4rem",
          borderRadius: 8,
          minWidth: 340,
          backgroundColor: theme.colors.dark[7],
        },
        label: {
          color: "white",
        },
      })}
      onClick={onClick}
    >
      <Title align="center" order={3}>
        {title}
      </Title>
    </Button>
  );
};

export default ViewMoreButton;
