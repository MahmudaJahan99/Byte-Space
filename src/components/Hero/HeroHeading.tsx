import { Search } from "lucide-react";
import Button from "../../ui/Button";

const HeroHeading = () => {
  return (
    <div className="max-w-11/12 lg:max-w-[calc(100vw-200px) m-auto text-center grid gap-4 lg:gap-8 relative z-50">
      <h1 className="poppins font-semibold text-3xl md:text-5xl lg:text-7xl text-white leading-[1.2]">
        Get Access to Hundreds Courses Available
      </h1>

      <p className="text-gray-white">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>

      <div className="relative mx-auto mt-4 md:mt-6 max-w-xl flex gap-4 md:gap-6 text-sm md:text-[18px] xl:w-3xl">
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute top-1/2 left-6 -translate-y-1/2 text-light-gray"
          />

          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="Search for courses..."
            className="w-full rounded-full bg-white py-2 md:py-4 pr-4 pl-14 text-dark-gray outline-none placeholder:text-light-gray relative z-1"
          />
        </div>
        <Button buttonName="Search" />
      </div>
    </div>
  );
};

export default HeroHeading;
