import { Signal, Star } from "lucide-react";
import GlassBadge from "../../ui/GlassBadge";
import learners from "../../assets/course-learners.png";
import type { Course } from "../../data/courseDetails";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article
      aria-labelledby={`course-title-${course.id}`}
      className="border border-gray-border rounded-3xl p-4"
    >
      {/* Image */}
      <div className="relative mb-4">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="rounded-2xl"
        />

        <div
          aria-label={`${course.lessons} lessons, ${course.duration}, ${course.comments} comments`}
          className="absolute bottom-0 left-0 w-full flex justify-between p-2 xl:p-8"
        >
          <GlassBadge info={`${course.lessons} Lessons`} />
          <GlassBadge info={course.duration} />
          <GlassBadge info={`${course.comments} Comments`} />
        </div>
      </div>

      {/* Course Details */}
      <div className="flex justify-between items-start">
        <div className="text-left flex flex-col gap-4">
          {/* Course & Creator name  */}
          <div>
            <h4
              id={`course-title-${course.id}`}
              className="poppins font-semibold text-lg md:text-xl tracking-tight"
            >
              {course.title}
            </h4>
            <p className="text-xs">
              <span className="text-dark-gray2">by</span>
              <span className="text-electric-blue">{course.instructor}</span>
            </p>
          </div>

          {/* Level & Learners */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="rounded-3xl py-1.5 px-4 w-fit bg-lightest-gray flex items-center gap-2 text-dark-gray2 text-xs">
              <Signal aria-hidden="true" className="w-4" />
              <span>{course.level}</span>
            </div>

            <img
              src={learners}
              alt="26+ learners"
              className="w-26 md:w-30"
              loading="lazy"
            />
          </div>

          {/* Price */}
          <p className="text-dark-gray2 text-xs">
            <span className="text-electric-blue font-semibold text-xl poppins">
              ${course.price}
            </span>
            /lifetime
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
    </article>
  );
};

export default CourseCard;
