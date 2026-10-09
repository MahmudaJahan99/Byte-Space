import type { Course } from "../../data/courseDetails";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../../ui/Pagination";
import CourseCard from "./CourseCard";

interface CourseCardsProps {
  courses: Course[];
  limit?: number;
  pageSize?: number;
}

const CourseCards = ({ courses, limit, pageSize }: CourseCardsProps) => {
  const source = limit ? courses.slice(0, limit) : courses;

  const { page, totalPages, pageItems, setPage } = usePagination(
    source,
    (pageSize ?? source.length) || 1,
  );

  const displayedCourses = pageSize ? pageItems : source;

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 my-8 items-stretch">
        {displayedCourses.map((course) => (
          <li key={course.id} className="h-full">
            <CourseCard course={course} />
          </li>
        ))}
      </ul>

      {pageSize && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </>
  );
};

export default CourseCards;
