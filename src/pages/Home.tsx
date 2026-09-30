import BrandsCarousel from "../components/BrandsCarousel/BrandsCarousel";
import ExploreCourses from "../components/Explore/ExploreCourses";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsCarousel />
      <ExploreCourses />
    </>
  );
};

export default Home;
