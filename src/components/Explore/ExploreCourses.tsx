import CategoryPills from "../Courses/CategoryPills";
import CourseCards from "../Courses/CourseCards";
import TopicCards from "./TopicCards";

const ExploreCourses = () => {
  return (
    <section
      aria-labelledby="explore-courses-heading"
      className="page-section text-center"
    >
      {/* Section header */}
      <div>
        <h2 id="explore-courses-heading">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p className="text-light-gray">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      {/* Category pills */}
      <CategoryPills />

      {/* Courses */}
      <CourseCards limit={6} />

      <article aria-labelledby="learning-paths-heading">
        {/* Section header */}
        <div>
          <h3 id="learning-paths-heading">
            Explore Diverse Learning Paths at Bytespace
          </h3>

          <p className="text-light-gray">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        <TopicCards />
      </article>
    </section>
  );
};

export default ExploreCourses;
