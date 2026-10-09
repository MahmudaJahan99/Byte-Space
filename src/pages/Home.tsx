import BrandsCarousel from "../components/BrandsCarousel/BrandsCarousel";
import CreatorCTA from "../components/CreatorCTA/CreatorCTA";
import ExploreCourses from "../components/Explore/ExploreCourses";
import Hero from "../components/Hero/Hero";
import Spotlight from "../components/Spotlight/Spotlight";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <BrandsCarousel />
      <ExploreCourses />
      <Spotlight />
      <CreatorCTA />
      <Testimonials />
    </>
  );
};

export default Home;
