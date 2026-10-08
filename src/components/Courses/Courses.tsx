import { Search } from "lucide-react";
import Input from "../../ui/Input";
import CategoryPills from "./CategoryPills";
import CourseCards from "./CourseCards";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { courses } from "../../data/courseDetails";

interface CoursesProps {
  category: string | null;
}

const Courses = ({ category }: CoursesProps) => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses =
    searchQuery.trim().length > 0
      ? courses.filter((course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : [];

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (filteredCourses.length > 0) {
      navigate("/course");
    }
  };

  const handleCourseSelect = () => {
    navigate("/course");
  };

  return (
    <>
      <article aria-labelledby="courses-heading" className="text-center">
        {/* Course Search */}
        <header className="bg-electric-blue pt-20">
          <div className="page-section">
            <h2 id="courses-heading" className="text-white">
              Find Your Next Course
            </h2>

            {/* Course search form */}
            <form
              role="search"
              onSubmit={handleSearch}
              className="relative mx-auto mt-2 max-w-xl flex gap-4 md:gap-6 text-sm md:text-[18px] xl:w-3xl"
            >
              <div className="relative flex-1">
                {/* Search input field */}
                <Input
                  label="Search for courses"
                  icon={Search}
                  inputType="text"
                  inputName="course-search"
                  inputId="course-search"
                  inputPlaceholder="Search for courses..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />

                {/* Search suggestion */}
                {searchQuery.trim() && (
                  <ul
                    aria-label="Course search suggestions"
                    className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl bg-white text-left shadow-lg"
                  >
                    {filteredCourses.length > 0 ? (
                      filteredCourses.map((course) => (
                        <li key={course.id}>
                          <button
                            type="button"
                            onClick={handleCourseSelect}
                            className="w-full px-4 py-3 text-left text-sm text-gray-800 transition hover:bg-lightest-gray focus:bg-lightest-gray focus:outline-none"
                          >
                            {course.title}
                          </button>
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-3 text-sm text-dark-gray2">
                        No courses found
                      </li>
                    )}
                  </ul>
                )}
              </div>

              {/* Search buttton */}
              <Button buttonName="Search" />
            </form>
          </div>
        </header>

        <div className="page-section">
          {/* Category pills */}
          <CategoryPills />

          {/* Courses */}
          <CourseCards
            key={category ?? "Featured"}
            pageSize={12}
            category={category}
          />
        </div>
      </article>
    </>
  );
};

export default Courses;
