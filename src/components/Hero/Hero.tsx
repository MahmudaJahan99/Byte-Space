import HeroHeading from "./HeroHeading";
import ornaments from "../../assets/3d ornament.png";
import HeroVisuals from "./HeroVisuals";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-electric-blue min-h-screen overflow-hidden pt-20 relative flex flex-col"
    >
      {/* Decorative ornaments */}
      <img
        src={ornaments}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-0"
      />

      {/* Hero Heading */}
      <HeroHeading />

      {/* Hero decorations and cards */}
      <HeroVisuals />
    </section>
  );
};

export default Hero;
