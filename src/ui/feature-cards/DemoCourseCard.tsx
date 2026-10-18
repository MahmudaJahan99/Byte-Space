import { Signal, Star } from "lucide-react";
import courseImage from "../../assets/course-card-1.jpg";
import GlassBadge from "../GlassBadge";
import StudentsImageStack from "../../components/Courses/StudentsImageStack";

const DemoCourseCard = () => {
  return (
    <div
      aria-hidden="true"
      className="border border-gray-border rounded-2xl lg:rounded-3xl p-2 md:p-3 lg:p-4 flex flex-col bg-white pointer-events-none select-none max-w-100"
    >
      {/* Image */}
      <div className="relative mb-[1%] overflow-hidden rounded-xl lg:rounded-2xl">
        <img
          src={courseImage}
          alt=""
          loading="eager"
          className="w-full"
          draggable={false}
        />

        <div className="absolute bottom-0 left-0 w-full flex justify-between p-2 lg:p-4">
          <GlassBadge info="17 Lessons" className="text-[8px]" />
          <GlassBadge info="2h 16m" className="text-[8px]" />
        </div>
      </div>

      {/* Course Details */}
      <div className="text-left flex flex-col flex-1 space-y-2 md:space-y-4">
        <div className="flex items-start justify-between lg:gap-4">
          {/* Course & Creator name  */}
          <div>
            <div className="poppins font-semibold text-sm lg:text-lg tracking-tight">
              Learn Figma from ...
            </div>
            <p className=" text-[9px] md:text-xs">
              <span className="text-dark-gray2">by </span>
              <span className="text-electric-blue">purepearl studio</span>
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-0.5 md:gap-1 text-xs lg:text-lg">
            <span>4.5</span>
            <span>
              <Star className="w-3 lg:w-4.5 fill-gray-border text-gray-border" />
            </span>
          </div>
        </div>

        {/* Level & Learners */}
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 justify-between">
          <div className="rounded-3xl py-0.75 lg:py-1.5 px-2 lg:px-4 w-fit bg-lightest-gray flex items-center gap-2 text-dark-gray2 text-xs">
            <Signal className="w-2 lg:w-4" />
            <span>Beginner</span>
          </div>

          <StudentsImageStack comments={50} courseId={1} />
        </div>

        {/* Price */}
        <p className="text-dark-gray2 text-xs mt-auto">
          <span className="text-electric-blue font-semibold md:text-xl poppins">
            $25
          </span>
          /lifetime
        </p>
      </div>
    </div>
  );
};

export default DemoCourseCard;
