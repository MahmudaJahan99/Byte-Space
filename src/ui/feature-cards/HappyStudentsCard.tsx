import { Star } from "lucide-react";
import SmallCard from "../SmallCard";

import student1 from "../../assets/students/Student 1.png";
import student2 from "../../assets/students/Student 2.png";
import student3 from "../../assets/students/Student 3.png";
import student4 from "../../assets/students/Student 4.png";
import student5 from "../../assets/students/Student 5.png";
import student6 from "../../assets/students/Student 6.png";
import student7 from "../../assets/students/Student 7.png";

const HappyStudentsCard = () => {
  return (
    <SmallCard title="Happy Students">
      <p className="flex items-center gap-1 text-[12px]">
        <span aria-hidden="true">4.5</span>
        <span aria-hidden="true" className="text-light-gray">
          (240)
        </span>
        <span>
          <Star
            aria-hidden="true"
            className="w-4 fill-electric-lime text-electric-lime"
          />
          <span className="sr-only">out of 5 stars</span>
        </span>

        {/* Accessibility */}
        <span className="sr-only">
          Rated 4.5 out of 5 based on 240 reviews.
        </span>
      </p>
      <div className="mt-3 flex">
        <img src={student1} alt="" className="h-10.75 w-10.75 rounded-full" />
        <img
          src={student2}
          alt=""
          className="h-10.75 w-10.75 rounded-full -ml-4"
        />
        <img
          src={student3}
          alt=""
          className="h-10.75 w-10.75 rounded-full -ml-4"
        />
        <img
          src={student4}
          alt=""
          className="h-10.75 w-10.75 rounded-full -ml-4"
        />
        <img
          src={student5}
          alt=""
          className="h-10.75 w-10.75 rounded-full -ml-4"
        />
        <img
          src={student6}
          alt=""
          className="h-10.75 w-10.75 rounded-full -ml-4"
        />
        <img
          src={student7}
          alt=""
          className="h-10.75 w-10.75 rounded-full -ml-4"
        />
        <div className="bg-electric-lime flex items-center justify-center h-10.75 w-10.75 rounded-full -ml-4 text-sm font-semibold">
          <span>2K+</span>
        </div>
      </div>
    </SmallCard>
  );
};

export default HappyStudentsCard;
