import yellowSquiggle from "../../assets/decorations/Yellow Squiggle.png";
import whiteSquiggle from "../../assets/decorations/White Squiggle.png";
import yellowCone from "../../assets/decorations/Yellow Cone.webp";
import whiteCone from "../../assets/decorations/White Cone.png";
import whiteCylinder from "../../assets/decorations/White Cylinder.webp";
import yellowRing from "../../assets/decorations/Yellow Ring.webp";

const Decorations = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      <div className="absolute -top-10 left-0">
        <img src={yellowSquiggle} alt="" className="w-28 md:w-40" />
      </div>

      <div className="absolute top-0 left-[15%] hidden md:flex">
        <img src={whiteSquiggle} alt="" className="w-36" />
      </div>

      <div className="absolute top-0 right-[10%]">
        <img src={yellowCone} alt="" className="w-24 md:w-36" />
      </div>

      <div className="absolute bottom-[10%] -left-10 hidden md:flex">
        <img src={whiteCone} alt="" className="-rotate-30 w-36" />
      </div>

      <div className="absolute top-[40%] -right-10 hidden md:flex">
        <img src={whiteCylinder} alt="" className="w-40" />
      </div>

      <div className="absolute bottom-0 left-[10%]">
        <img src={yellowRing} alt="" className="w-32 md:w-40" />
      </div>

      <div className="absolute -bottom-10 right-[5%]">
        <img src={yellowSquiggle} alt="" className="w-28 md:w-40 rotate-270" />
      </div>
    </div>
  );
};

export default Decorations;
