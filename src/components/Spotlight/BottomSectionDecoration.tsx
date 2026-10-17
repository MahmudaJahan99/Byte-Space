import BlueCard from "../../ui/feature-cards/BlueCard";
import person from "../../assets/decorations/girl.webp";
import HappyStudentsCard from "../../ui/feature-cards/HappyStudentsCard";
import yellowSquiggle from "../../assets/decorations/Yellow Squiggle 2.webp";

const BottomSectionDecoration = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-[70%] lg:w-[60%] top-0 left-0 z-0">
        <div className="grid gap-4 mb-15 lg:mb-30">
          <BlueCard
            heading="Total Revenue"
            subHeading="Jul 1 - 28"
            price="120.29"
            progressBar={true}
          />
          <BlueCard
            heading="Year to Date"
            subHeading="2026"
            price="1,200.38"
            badge={true}
          />
        </div>
      </div>

      <div className="absolute inset-0 z-10 overflow-hidden">
        <img
          src={person}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 lg:-left-5 w-[90%] md:w-[120%] xl:w-[90%] 2xl:w-[80%] object-cover"
        />
      </div>

      <div className="absolute bottom-[5%] right-[15%] z-30">
        <HappyStudentsCard />
      </div>

      <div className="relative translate-y-[-150%] lg:translate-y-[-30%] lg:bottom-55 translate-x-[270%] lg:translate-x-[270%] z-40 w-[25%]">
        <img src={yellowSquiggle} alt="" className="rotate-45" />
      </div>
    </div>
  );
};

export default BottomSectionDecoration;
