import { Signal, Star } from "lucide-react";
import GlassBadge from "../../ui/GlassBadge";
import type { Course } from "../../data/courseDetails";
import { Link } from "react-router-dom";
import StudentsImageStack from "./StudentsImageStack";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link
      to="/course"
      aria-labelledby={`course-title-${course.id}`}
      className="group h-full border border-gray-border rounded-3xl p-4 flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover/50 hover motion-reduce motion-reduce:hover cursor-pointer
      focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-blue"
    >
      {/* Image */}
      <div className="relative mb-4 overflow-hidden rounded-2xl">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="w-full transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        <div
          aria-label={`${course.lessons} lessons, ${course.duration}, ${course.comments} comments`}
          className="absolute bottom-0 left-0 w-full flex justify-between p-2 xl:p-8"
        >
          <GlassBadge info={`${course.lessons} Lessons`} />
          <GlassBadge info={course.duration} />
        </div>
      </div>

      {/* Course Details */}
      <div className="text-left flex flex-col flex-1 space-y-4">
        <div className="flex items-start justify-between gap-4">
          {/* Course & Creator name  */}
          <div>
            <h4
              id={`course-title-${course.id}`}
              className="poppins font-semibold text-lg md:text-xl tracking-tight"
            >
              {course.title}
            </h4>
            <p className="text-xs">
              <span className="text-dark-gray2">by </span>
              <span className="text-electric-blue">{course.instructor}</span>
            </p>
          </div>

          {/* Rating */}
          <div
            aria-label={`Rating: ${course.rating} out of 5`}
            className="flex items-center gap-1 text-lg"
          >
            <span aria-hidden="true">{course.rating}</span>
            <span>
              <Star
                aria-hidden="true"
                className="w-4.5 fill-gray-border text-gray-border"
              />
            </span>
          </div>
        </div>

        {/* Level & Learners */}
        <div className="flex flex-col xl:flex-row gap-4 justify-between">
          <div className="rounded-3xl py-1.5 px-4 w-fit bg-lightest-gray flex items-center gap-2 text-dark-gray2 text-xs">
            <Signal aria-hidden="true" className="w-4" />
            <span>{course.level}</span>
          </div>

          <StudentsImageStack comments={course.comments} courseId={course.id} />
        </div>

        {/* Price */}
        <p className="text-dark-gray2 text-xs mt-auto">
          <span className="text-electric-blue font-semibold text-xl poppins">
            ${course.price}
          </span>
          /lifetime
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
