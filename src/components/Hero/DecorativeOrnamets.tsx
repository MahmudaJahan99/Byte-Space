import yellowSquiggle from "../../assets/decorations/Yellow Squiggle.png";
import yellowCylinder from "../../assets/decorations/Yellow Cylinder.png";
import whiteSquiggle from "../../assets/decorations/White Squiggle.png";
import whiteCone from "../../assets/decorations/White Cone.png";
import whiteRing from "../../assets/decorations/White Ring.png";
import whiteSquiggle2 from "../../assets/decorations/White Squiggle 2.png";

const DecorativeOrnamets = () => {
  return (
    <div>
      <img
        src={yellowSquiggle}
        alt=""
        aria-hidden="true"
        className="hidden md:flex absolute md:w-25 lg:w-50 top-[20%]"
      />

      <img
        src={yellowCylinder}
        alt=""
        aria-hidden="true"
        className="hidden md:flex absolute md:w-25 lg:w-50 top-[20%] right-0"
      />

      <img
        src={whiteSquiggle}
        alt=""
        aria-hidden="true"
        className="hidden md:flex absolute md:w-15 lg:w-40 top-[50%] left-[15%]"
      />

      <img
        src={whiteCone}
        alt=""
        aria-hidden="true"
        className="hidden md:flex absolute md:w-15 lg:w-40 top-[50%] right-[15%]"
      />

      <img
        src={whiteRing}
        alt=""
        aria-hidden="true"
        className="hidden md:flex absolute md:w-25 lg:w-50 bottom-0"
      />

      <img
        src={whiteSquiggle2}
        alt=""
        aria-hidden="true"
        className="hidden md:flex absolute md:w-25 lg:w-50 bottom-0 right-0"
      />
    </div>
  );
};

export default DecorativeOrnamets;
