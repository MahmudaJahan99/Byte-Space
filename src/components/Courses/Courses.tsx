import CategoryPills from "./CategoryPills";
import CourseCards from "./CourseCards";

interface CoursesProps {
  category: string | null;
}

const Courses = ({ category }: CoursesProps) => {
  return (
    <>
      <article className="page-section text-center pt-30">
        {/* Category pills */}
        <CategoryPills />

        {/* Courses */}
        <CourseCards
          key={category ?? "Featured"}
          pageSize={12}
          category={category}
        />
      </article>
    </>
  );
};

export default Courses;
