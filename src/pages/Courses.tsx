import { useSearchParams } from "react-router-dom";
import CoursesComponent from "../components/Courses/Courses";

const Courses = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  return <CoursesComponent category={category} />;
};

export default Courses;
