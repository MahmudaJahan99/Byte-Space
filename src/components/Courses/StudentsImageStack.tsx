import student2 from "../../assets/students/Student 2.png";
import student3 from "../../assets/students/Student 3.png";
import student4 from "../../assets/students/Student 4.png";
import student5 from "../../assets/students/Student 5.png";

interface StudentsImageStackProps {
  comments: number;
}

const StudentsImageStack = ({ comments }: StudentsImageStackProps) => {
  const remainingStudents = Math.max(0, comments - 4);

  return (
    <div className="flex">
      <img src={student2} alt="" className="h-8 w-8 rounded-full" />
      <img src={student3} alt="" className="h-8 w-8 rounded-full -ml-2" />
      <img src={student4} alt="" className="h-8 w-8 rounded-full -ml-2" />
      <img src={student5} alt="" className="h-8 w-8 rounded-full -ml-2" />

      <div
        className="bg-electric-lime flex items-center justify-center h-8 w-8 rounded-full -ml-2 text-xs font-semibold"
        aria-label={`${remainingStudents} more students`}
      >
        <span aria-hidden="true" className="flex items-center">{remainingStudents} <span className="-mt-0.75">+</span></span>
      </div>
    </div>
  );
};

export default StudentsImageStack;
