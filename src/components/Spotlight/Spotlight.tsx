import SpotlightFeature from "./SpotlightFeature";
import TopSectionDecoration from "./TopSectionDecoration";
import BottomSectionDecoration from "./BottomSectionDecoration";
import styles from "./Spotlight.module.css";

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
      {/*  Decorative background radial gradients */}
      <div className={styles.yellowTopGlow} aria-hidden="true" />
      <div className={styles.blueTopGlow} aria-hidden="true" />
      <div className={styles.blueMiddleGlow} aria-hidden="true" />
      <div className={styles.yellowMiddleGlow} aria-hidden="true" />
      <div className={styles.blueBottomGlow} aria-hidden="true" />

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
