import DecorativeOrnamets from "./DecorativeOrnamets";
import HeroHeading from "./HeroHeading";
import HeroVisuals from "./HeroVisuals";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-electric-blue min-h-screen overflow-hidden pt-20 relative flex flex-col"
    >
      {/* Decorative ornaments */}
      <DecorativeOrnamets />

      {/* Hero Heading */}
      <HeroHeading />

      {/* Hero decorations and cards */}
      <HeroVisuals />
    </section>
  );
};

export default Hero;
