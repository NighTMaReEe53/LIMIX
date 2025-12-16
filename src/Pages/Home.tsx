import Application from "../Components/Application";
import Articels from "../Components/Articels";
import Choose from "../Components/Choose";
import Good from "../Components/Good";
import Landing from "../Components/Landing";
import Review from "../Components/Review";

const Home = () => {
  return (
    <>
      <Landing />
      <Good />
      <Choose />
      <Application />
      <Articels />
      <Review />
    </>
  );
};

export default Home;
