import { Helmet } from "react-helmet-async";
import CallUs from "../../../components/CallUs/CallUs";
import AboutBistro from "../AboutBistro/AboutBistro";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <AboutBistro></AboutBistro>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Recommends></Recommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
