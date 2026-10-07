import { courses } from "../../data/courseDetails";
import CourseCard from "./CourseCard";

interface CourseCardsProps {
  limit?: number;
}

const CourseCards = ({ limit }: CourseCardsProps) => {
  const displayedCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 my-8">
      {displayedCourses.map((course) => (
        <li key={course.id}>
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
};

export default CourseCards;
