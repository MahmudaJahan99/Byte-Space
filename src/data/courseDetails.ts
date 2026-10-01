import courseCard1 from "../assets/course-card-1.jpg";
import courseCard2 from "../assets/course-card-2.jpg";
import courseCard3 from "../assets/course-card-3.jpg";
import courseCard4 from "../assets/course-card-4.jpg";
import courseCard5 from "../assets/course-card-5.jpg";
import courseCard6 from "../assets/course-card-6.jpg";

export interface Course {
  id: number;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  title: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  rating: number;
}

export const courses: Course[] = [
  {
    id: 1,
    image: courseCard1,
    lessons: 17,
    duration: "2h 16m",
    comments: 59,
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    level: "Beginner",
    price: 25,
    rating: 4.5,
  },
  {
    id: 2,
    image: courseCard2,
    lessons: 24,
    duration: "3h 42m",
    comments: 42,
    title: "Build Digital Asset",
    instructor: "PixelCraft Studio",
    level: "Intermediate",
    price: 30,
    rating: 4.8,
  },
  {
    id: 3,
    image: courseCard3,
    lessons: 32,
    duration: "4h 18m",
    comments: 36,
    title: "Power of Big Data",
    instructor: "DataMind Academy",
    level: "Advanced",
    price: 40,
    rating: 4.6,
  },
  {
    id: 4,
    image: courseCard4,
    lessons: 15,
    duration: "1h 58m",
    comments: 28,
    title: "Balancing Productivity and Self-Care",
    instructor: "Mindful Living",
    level: "Beginner",
    price: 25,
    rating: 4.9,
  },
  {
    id: 5,
    image: courseCard5,
    lessons: 21,
    duration: "2h 35m",
    comments: 47,
    title: "Mastering Money Management",
    instructor: "Finance Forward",
    level: "Intermediate",
    price: 35,
    rating: 4.8,
  },
  {
    id: 6,
    image: courseCard6,
    lessons: 27,
    duration: "3h 25m",
    comments: 64,
    title: "From Idea to Startup Success",
    instructor: "Startup Lab",
    level: "Intermediate",
    price: 45,
    rating: 4.7,
  },
];
