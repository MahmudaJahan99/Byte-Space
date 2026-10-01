import { Link } from "react-router-dom";

interface FooterNavLinkProps {
  linkTo: string;
  label: string;
}

const FooterNavLink = ({ linkTo, label }: FooterNavLinkProps) => {
  return (
    <li className="hover:text-electric-blue transition duration-400">
      <Link to={linkTo}>{label}</Link>
    </li>
  );
};

export default FooterNavLink;
