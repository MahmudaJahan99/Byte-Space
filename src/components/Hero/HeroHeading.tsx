const HeroHeading = () => {
  return (
    <header className="max-w-11/12 lg:max-w-[calc(100vw-200px) m-auto text-center grid gap-4 lg:gap-8 relative z-50">
      {/* Section header */}
      <div>
        <h1 id="hero-heading" className="text-white">
          Get Access to Hundreds <br className="hidden md:flex" /> of Available
          Courses
        </h1>

        <p className="text-gray-white w-3/4 m-auto">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>
    </header>
  );
};

export default HeroHeading;
