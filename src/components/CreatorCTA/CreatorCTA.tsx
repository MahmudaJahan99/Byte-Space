import ornament from "../../assets/3d ornament 2.png";
import Button from "../../ui/Button";

const CreatorCTA = () => {
  return (
    <article className="bg-electric-blue overflow-hidden relative py-10">
      <img
        src={ornament}
        alt=""
        className="hidden md:block absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* content */}
      <div className="flex flex-col items-center max-w-11/12 md:max-w-3/4 m-auto gap-4 text-lightest-gray text-center my-8 relative z-10">
        <h2 className="poppins font-semibold leading-[1.2] tracking-tight text-xl md:text-2xl lg:text-4xl">
          Unlock Your Potential as a <br className="hidden md:flex" /> Creator
          with ByteSpace
        </h2>
        <p className="text-lg">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button buttonName="Join as Creator" className="w-fit text-dark-gray" />
      </div>
    </article>
  );
};

export default CreatorCTA;
