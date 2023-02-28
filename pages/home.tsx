import MasterLayout from "~/layouts/master-layout";

const Home = () => {
  return <div>Test</div>;
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MasterLayout>{page}</MasterLayout>;
};

export default Home;
