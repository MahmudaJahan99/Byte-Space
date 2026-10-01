import { Link } from "react-router-dom";

interface LogoProps {
  onClick?: () => void;
  className?: string;
  imageSrc: string
}

const Logo = ({ onClick, className = "", imageSrc }: LogoProps) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="ByteSpace home"
      className={`inline-flex items-center ${className}`}
    >
      <img src={imageSrc} alt="ByteSpace" className="h-auto w-auto" />
    </Link>
  );
};

export default Logo;
