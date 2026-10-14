import limeEllipse from "../../assets/decorations/Lime Ellipse.png";
import person from "../../assets/decorations/Person-Hero.png";
import UiUxCourseCard from "../../ui/feature-cards/UiUxCourseCard";
import LearningProgressCard from "../../ui/feature-cards/LearningProgressCard";
import HappyStudentsCard from "../../ui/feature-cards/HappyStudentsCard";

const HeroVisuals = () => {
  return (
    <div
      aria-label="Course highlights"
      className="relative mx-auto mt-auto h-[42vh] min-h-65 w-full max-w-6xl md:h-[40vh] lg:mt-4 lg:h-70"
    >
      {/* Yellow Ellipse */}
      <img
        src={limeEllipse}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 z-0 w-[75%] max-w-190 -translate-x-1/2"
      />

      {/* Person */}
      <img
        src={person}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-[53%] z-10 w-[60%] max-w-120 -translate-x-1/2"
      />

      {/* UI/UX card */}
      <div className="absolute bottom-[65%] left-[18%] z-20">
        <UiUxCourseCard />
      </div>

      {/* Progress card */}
      <div className="absolute bottom-[25%] right-[22%] z-20">
        <LearningProgressCard />
      </div>

      {/* Happy students card */}
      <div className="absolute bottom-[2%] left-[12%] z-20">
        <HappyStudentsCard />
      </div>
    </div>
  );
};

export default HeroVisuals;
