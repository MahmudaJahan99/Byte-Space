import ornament from "../../assets/3d ornament 2.png";
import Button from "../../ui/Button";

const CreatorCTA = () => {
  return (
    <article
      aria-labelledby="creator-cta-heading"
      className="bg-electric-blue overflow-hidden relative py-10"
    >
      <img
        src={ornament}
        alt=""
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* content */}
      <div className="page-section flex flex-col items-center text-lightest-gray text-center xl:p-12 relative z-10">
        {/* Section header */}
        <div>
          <h3 id="creator-cta-heading">
            Unlock Your Potential as a <br className="hidden md:flex" /> Creator
            with ByteSpace
          </h3>
          <p className="text-lg">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
        </div>

        <Button buttonName="Join as Creator" className="w-fit text-dark-gray" />
      </div>
    </article>
  );
};

export default CreatorCTA;
