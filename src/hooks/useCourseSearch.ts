import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "../data/courseDetails";

const useCourseSearch = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return [];

    return courses.filter((course) =>
      course.title.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (filteredCourses.length > 0) {
      navigate("/course");
    }
  };

  const handleCourseSelect = () => {
    navigate("/course");
  };

  return {
    searchQuery,
    setSearchQuery,
    filteredCourses,
    handleSearch,
    handleCourseSelect,
  };
};

export default useCourseSearch;
