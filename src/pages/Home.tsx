import BrandsCarousel from "../components/BrandsCarousel/BrandsCarousel";
import ExploreCourses from "../components/Explore/ExploreCourses";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Spotlight from "../components/Spotlight/Spotlight";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsCarousel />
      <ExploreCourses />
      <Spotlight />
    </>
  );
};

export default Home;
