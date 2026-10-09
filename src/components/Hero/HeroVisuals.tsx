import { Star } from "lucide-react";
import SmallCard from "../../ui/SmallCard";
import students from "../../assets/Students.png";
import limeEllipse from "../../assets/Lime Ellipse.png";
import person from "../../assets/Image.png";

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
        className="absolute bottom-0 left-1/2 z-0 w-[75%] max-w-150 -translate-x-1/2"
      />

      {/* Person */}
      <img
        src={person}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 z-10 w-[60%] max-w-120 -translate-x-1/2"
      />

      {/* UI/UX card */}
      <div className="absolute bottom-[65%] left-[18%] z-20">
        <SmallCard title="UI/UX Design">
          <div className="flex gap-1 text-[12px] text-light-gray">
            <span>200 Courses</span>
            <span aria-hidden="true">•</span>
            <span>1000+ Students</span>
          </div>
        </SmallCard>
      </div>

      {/* Progress card */}
      <div className="absolute bottom-[25%] right-[22%] z-20">
        <SmallCard title="Learning Progress">
          <p
            id="learning-progress-value"
            className="poppins font-semibold md:text-3xl lg:text-5xl"
          >
            55%
          </p>
          <div
            role="progressbar"
            aria-label="Learning progress"
            aria-valuenow={55}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext="55 percent complete"
            className="mt-3 h-2 w-45.25 overflow-hidden rounded-full bg-[#F6F6F6]"
          >
            <div
              className="h-full rounded-full bg-electric-lime transition-all duration-500"
              style={{ width: `${55}%` }}
            />
          </div>
        </SmallCard>
      </div>

      {/* Happy students card */}
      <div className="absolute bottom-[2%] left-[12%] z-20">
        <SmallCard title="Happy Students">
          <p className="flex items-center gap-1 text-[12px]">
            <span aria-hidden="true">4.5</span>
            <span aria-hidden="true" className="text-light-gray">
              (240)
            </span>
            <span>
              <Star
                aria-hidden="true"
                className="w-4 fill-electric-lime text-electric-lime"
              />
              <span className="sr-only">out of 5 stars</span>
            </span>

            {/* Accessibility */}
            <span className="sr-only">
              Rated 4.5 out of 5 based on 240 reviews.
            </span>
          </p>
          <div className="mt-3">
            <img src={students} alt="Over 2000 happy students" />
          </div>
        </SmallCard>
      </div>
    </div>
  );
};

export default HeroVisuals;
