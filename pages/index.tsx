import MasterLayout from "~/layouts/master-layout";
import Hexagon from "~/shared/components/hexagon/hexagon";

const Home = () => {
  return (
    <div>
      <Hexagon label="mmm" icon="/icons/icon-knife.svg" />
    </div>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout title="Home">{page}</MasterLayout>;
};

export default Home;
