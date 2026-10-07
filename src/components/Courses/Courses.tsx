import CategoryPills from "./CategoryPills";
import CourseCards from "./CourseCards";

const Courses = () => {
  return (
    <>
      <article className="page-section text-center pt-30">
        {/* Category pills */}
        <CategoryPills />

        {/* Courses */}
        <CourseCards />
      </article>
    </>
  );
};

export default Courses;
