import student1 from "../../assets/students/Student 1.png";
import student2 from "../../assets/students/Student 2.png";
import student3 from "../../assets/students/Student 3.png";
import student4 from "../../assets/students/Student 4.png";
import student5 from "../../assets/students/Student 5.png";
import student6 from "../../assets/students/Student 6.png";
import student7 from "../../assets/students/Student 7.png";
import student8 from "../../assets/students/Student 8.png";
import student9 from "../../assets/students/Student 9.png";
import student10 from "../../assets/students/Student 10.png";
import student11 from "../../assets/students/Student 11.png";
import student12 from "../../assets/students/Student 12.png";
import student13 from "../../assets/students/Student 13.png";

interface StudentsImageStackProps {
  comments: number;
  courseId: number;
}

const studentImages = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10,
  student11,
  student12,
  student13,
];

const getRandomStudents = (courseId: number) => {
  return [...studentImages]
    .map((image, index) => ({
      image,
      sortKey: Math.sin((courseId + 1) * (index + 1) * 12.9898) * 43758.5453,
    }))
    .sort((a, b) => {
      const keyA = a.sortKey - Math.floor(a.sortKey);
      const keyB = b.sortKey - Math.floor(b.sortKey);
      return keyA - keyB;
    })
    .slice(0, 4)
    .map(({ image }) => image);
};

const StudentsImageStack = ({
  comments,
  courseId,
}: StudentsImageStackProps) => {
  const randomStudents = getRandomStudents(courseId);
  const remainingStudents = Math.max(0, comments - 4);

  return (
    <div className="flex shrink-0" aria-label={`${comments} learners`}>
      {randomStudents.map((student, index) => (
        <img
          key={student}
          src={student}
          alt=""
          className={`h-8 w-8 rounded-full object-cover ${
            index > 0 ? "-ml-2" : ""
          }`}
        />
      ))}

      <div
        className="bg-electric-lime flex items-center justify-center h-8 w-8 rounded-full -ml-2 text-xs font-semibold"
        aria-label={`${remainingStudents} more students`}
      >
        <span aria-hidden="true" className="flex items-center">
          {remainingStudents} <span className="-mt-0.75">+</span>
        </span>
      </div>
    </div>
  );
};

export default StudentsImageStack;
