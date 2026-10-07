import CategoryPills from "./CategoryPills";
import CourseCards from "./CourseCards";

const Courses = () => {
  return (
    <>
      <article className="page-section text-center pt-30">
        {/* Category pills */}
        <CategoryPills />

        {/* Courses */}
        <CourseCards pageSize={12} />
      </article>
    </>
  );
};

export default Courses;
