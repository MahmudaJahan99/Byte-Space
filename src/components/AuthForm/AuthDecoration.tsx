import DemoCourseCard from "../../ui/feature-cards/DemoCourseCard";
import yellowRing from "../../assets/decorations/Yellow Ring 2.webp";
import yellowSquiggle from "../../assets/decorations/Yellow Squiggle 2.webp";
import yellowCone from "../../assets/decorations/Yellow Cone.webp";
import HappyStudentsCard from "../../ui/feature-cards/HappyStudentsCard";

interface AuthDecorationProps {
  title: string;
  subtitle: string;
}

const AuthDecoration = ({ title, subtitle }: AuthDecorationProps) => {
  return (
    <section
      aria-labelledby="login-promo-title"
      className="hidden flex-col justify-center lg:flex"
    >
      <div className="max-w-xl">
        <div className="text-lightest-gray">
          <h1 id="login-promo-title" className="text-xl">
            {title}
          </h1>

          <p>{subtitle}</p>
        </div>

        <div className="relative mt-20 xl:mt-30">
          <div className="relative z-0">
            <DemoCourseCard />
          </div>

          <div className="absolute -top-15 left-15 xl:-top-25 xl:left-25 z-0">
            <DemoCourseCard />
          </div>

          <div className="absolute right-20 -bottom-20 text-dark-gray hidden xl:flex z-0">
            <HappyStudentsCard />
          </div>

          <div className="absolute -top-20 -left-5 z-10">
            <img src={yellowRing} alt="" />
          </div>

          <div className="absolute -right-15 -bottom-15 xl:-right-5 xl:-bottom-5 z-10">
            <img src={yellowSquiggle} alt="" />
          </div>

          <div className="absolute -bottom-30 z-10">
            <img src={yellowCone} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthDecoration;
