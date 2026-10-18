import DemoCourseCard from "../../ui/feature-cards/DemoCourseCard";
import person from "../../assets/decorations/Person-Hero.png";
import yellowSquiggle from "../../assets/decorations/Yellow Squiggle 2.webp";

const TopSectionDecoration = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-[70%] lg:w-[60%] top-0 left-0 z-0 mb-15 lg:mb-30">
        <DemoCourseCard />
      </div>

      <div className="absolute bottom-0 -left-5 lg:right-0 z-10 w-[140%]">
        <img src={person} alt="" aria-hidden="true" className="" />
      </div>

      <div className="absolute top-[35%] lg:top-[30%] right-0 lg:right-5 z-30 w-[25%]">
        <img src={yellowSquiggle} alt="" />
      </div>
    </div>
  );
};

export default TopSectionDecoration;
