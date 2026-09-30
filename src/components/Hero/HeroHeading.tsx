import { Search } from "lucide-react";
import Button from "../../ui/Button";

const HeroHeading = () => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Search logic will go here.
  };

  return (
    <div className="max-w-11/12 lg:max-w-[calc(100vw-200px) m-auto text-center grid gap-4 lg:gap-8 relative z-50">
      <h1
        id="hero-heading"
        className="poppins font-semibold text-3xl md:text-5xl lg:text-7xl text-white leading-[1.2]"
      >
        Get Access to Hundreds Courses Available
      </h1>

      <p className="text-gray-white">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>

      <form
        role="search"
        onSubmit={handleSearch}
        className="relative mx-auto mt-4 md:mt-6 max-w-xl flex gap-4 md:gap-6 text-sm md:text-[18px] xl:w-3xl"
      >
        <div className="relative flex-1">
          <label htmlFor="course-search" className="sr-only">
            Search for courses
          </label>

          <Search
          aria-hidden="true"
            size={20}
            className="pointer-events-none absolute top-1/2 left-6 -translate-y-1/2 text-light-gray"
          />

          <input
            type="text"
            name="course-search"
            id="course-search"
            placeholder="Search for courses..."
            className="w-full rounded-full bg-white py-2 md:py-4 pr-4 pl-14 text-dark-gray outline-none placeholder:text-light-gray relative z-1"
          />
        </div>
        <Button buttonName="Search" />
      </form>
    </div>
  );
};

export default HeroHeading;
