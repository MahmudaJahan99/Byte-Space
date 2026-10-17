import yellowTop from "../../assets/yellow-top.png";
import blueTop from "../../assets/blue-top.png";
import blueMiddle from "../../assets/blue-middle.png";
import yellowMiddle from "../../assets/yellow-middle.png";
import bluebottom from "../../assets/blue-bottom.png";

import DecorativeCircle from "../../ui/DecorativeCircle";
import SpotlightFeature from "./SpotlightFeature";
import TopSectionDecoration from "./TopSectionDecoration";
import BottomSectionDecoration from "./BottomSectionDecoration";

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
    <section
      aria-labelledby="spotlight-heading"
      className="relative overflow-hidden bg-[#F6F6F699] py-10"
    >
      {/* Decorative Circles */}
      <div aria-hidden="true">
        <DecorativeCircle src={yellowTop} className="top-0 left-[5%] w-125" />
        <DecorativeCircle src={blueTop} className="top-0 right-0 w-125" />
        <DecorativeCircle src={blueMiddle} className="top-[25%] left-0 w-125" />
        <DecorativeCircle
          src={yellowMiddle}
          className="bottom-0 left-0 w-125"
        />
        <DecorativeCircle src={bluebottom} className="bottom-0 right-0 w-125" />
      </div>

      <div className="page-section relative pt-8 md:pt-16">
        {/* Section heading for screen-reader users */}
        <h2 id="spotlight-heading" className="sr-only">
          Learn and create with ByteSpace
        </h2>

        <SpotlightFeature
          title="Your Path to Professional Growth Starts Here!"
          description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
          visual={<TopSectionDecoration />}
          stats={learningStats}
        />

        <SpotlightFeature
          title="Create & Manage Courses Easily"
          description="ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses."
          visual={<BottomSectionDecoration />}
          checklist={creatorBenefits}
          reverse
        />
      </div>
    </section>
  );
};

export default Spotlight;
