import Input from "../../ui/Input";
import CategoryPills from "./CategoryPills";
import CourseCards from "./CourseCards";
import Button from "../../ui/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { courses, type Course } from "../../data/courseDetails";
import { filterAndSortCourses } from "../../utils/courseFilters";
import useCourseSearch from "../../hooks/useCourseSearch";
import ActiveFilterChips from "./ActiveFilterChips";
import CourseFilters from "./CourseFilters";
import type { SortOption } from "../../utils/courseFilters";
import { Search } from "lucide-react";

const Courses = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const navigate = useNavigate();

  const {
    searchQuery,
    setSearchQuery,
    filteredCourses,
    handleSearch,
    handleCourseSelect,
  } = useCourseSearch();

  const [sortOption, setSortOption] = useState<SortOption>(null);

  const [selectedLevel, setSelectedLevel] = useState<Course["level"] | null>(
    null,
  );

  const filteredAndSortedCourses = filterAndSortCourses({
    courses,
    selectedLevel,
    category,
    sortOption,
  });

  return (
    <>
      <article aria-labelledby="courses-heading" className="text-center">
        {/* Course Header */}
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
          <CourseFilters
            selectedLevel={selectedLevel}
            sortOption={sortOption}
            onLevelChange={setSelectedLevel}
            onSortChange={setSortOption}
          />

          <ActiveFilterChips
            category={category}
            selectedLevel={selectedLevel}
            sortOption={sortOption}
            onRemoveCategory={() => navigate("/courses")}
            onRemoveLevel={() => setSelectedLevel(null)}
            onRemoveSort={() => setSortOption(null)}
            onClearAll={() => {
              navigate("/courses");
              setSelectedLevel(null);
              setSortOption(null);
            }}
          />

          {/* Category pills */}
          {!category && <CategoryPills />}

          {/* Courses */}
          {filteredAndSortedCourses.length > 0 ? (
            <CourseCards courses={filteredAndSortedCourses} pageSize={12} />
          ) : (
            <div
              role="status"
              className="flex flex-col gap-4 items-center justify-center py-16 px-6"
            >
              <h3 className="text-xl font-semibold">No courses found</h3>

              <p className="max-w-xl text-light-gray mb-5">
                We couldn't find any courses matching your current filters. Try
                changing your category or adjusting your filters.
              </p>

              <Button
                buttonName="Clear filters"
                onClick={() => {
                  navigate("/courses");
                  setSelectedLevel(null);
                  setSortOption(null);
                  setSearchQuery("");
                }}
              />
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default Courses;
