import CategoryPills from "./CategoryPills";
import CourseCards from "./CourseCards";
import TopicCards from "./TopicCards";

const ExploreCourses = () => {
  return (
    <section className="max-w-11/12 lg:max-w-[calc(100vw-200px)] m-auto text-center grid gap-4 lg:gap-8 py-10">
      {/* Section head */}
      <h2 className="poppins font-semibold leading-[1.2] text-2xl md:text-4xl lg:text-6xl tracking-tight">
        Discover Your Passion,
        <br />
        Build Your Skills
      </h2>

      <p className="text-light-gray">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>

      {/* Category pills */}
      <CategoryPills />

      {/* Courses */}
      <CourseCards />

      <article>
        <h3 className="poppins font-semibold text-lg md:text-2xl lg:text-4xl leading-[1.2] tracking-tight mb-4">
          Explore Diverse Learning Paths at Bytespace
        </h3>

        <p className="text-light-gray">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>

        <TopicCards />
      </article>
    </section>
  );
};

export default ExploreCourses;
