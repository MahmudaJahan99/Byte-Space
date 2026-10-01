import yellowTop from "../../assets/yellow-top.png";
import blueTop from "../../assets/blue-top.png";
import blueMiddle from "../../assets/blue-middle.png";
import yellowMiddle from "../../assets/yellow-middle.png";
import bluebottom from "../../assets/blue-bottom.png";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import DecorativeCircle from "../../ui/DecorativeCircle";
import SpotlightFeature from "./SpotlightFeature";

const learningStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const Spotlight = () => {
  return (
    <section className="relative overflow-hidden bg-[#F6F6F699] py-10">
      {/* Decorative Circles */}
      <DecorativeCircle src={yellowTop} className="top-0 left-[5%] w-125" />
      <DecorativeCircle src={blueTop} className="top-0 right-0 w-125" />
      <DecorativeCircle src={blueMiddle} className="top-[25%] left-0 w-125" />
      <DecorativeCircle src={yellowMiddle} className="bottom-0 left-0 w-125" />
      <DecorativeCircle src={bluebottom} className="bottom-0 right-0 w-125" />

      <div className="relative max-w-11/12 lg:max-w-[calc(100vw-200px) m-auto grid gap-4 lg:gap-8 pt-8 md:pt-16">
        <SpotlightFeature
          title="Your Path to Professional Growth Starts Here!"
          description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          image={Frame1}
          imageAlt="Illustration representing professional learning and career growth"
          stats={learningStats}
        />

        <SpotlightFeature
          title="Create & Manage Courses Easily"
          description="ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses."
          image={Frame2}
          imageAlt="Illustration representing course creation and management"
          checklist={creatorBenefits}
          reverse
        />
      </div>
    </section>
  );
};

export default Spotlight;
