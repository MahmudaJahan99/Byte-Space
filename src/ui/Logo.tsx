import { Link } from "react-router-dom";
import logo from "../assets/Header_Logo.png";

interface LogoProps {
  onClick?: () => void;
  className?: string;
}

const Logo = ({ onClick, className = "" }: LogoProps) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="ByteSpace home"
      className={`inline-flex items-center ${className}`}
    >
      <img src={logo} alt="ByteSpace" className="h-auto w-auto" />
    </Link>
  );
};

export default Logo;
