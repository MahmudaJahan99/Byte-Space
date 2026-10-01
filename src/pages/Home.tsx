import BrandsCarousel from "../components/BrandsCarousel/BrandsCarousel";
import CreatorCTA from "../components/CreatorCTA/CreatorCTA";
import ExploreCourses from "../components/Explore/ExploreCourses";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Spotlight from "../components/Spotlight/Spotlight";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
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
