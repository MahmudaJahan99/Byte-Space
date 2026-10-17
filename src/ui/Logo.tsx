import { Link } from "react-router-dom";

interface LogoProps {
  onClick?: () => void;
  className?: string;
  imageSrc: string;
}

const Logo = ({ onClick, className = "", imageSrc }: LogoProps) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="ByteSpace home"
      className={`inline-flex items-center w-fit p-1 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-blue ${className}`}
    >
      <img src={imageSrc} alt="" className="h-auto w-auto" />
    </Link>
  );
};

export default Logo;
