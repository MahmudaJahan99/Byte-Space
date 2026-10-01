import { Link } from "react-router-dom";

interface FooterNavLinkProps {
  linkTo: string;
  label: string;
}

const FooterNavLink = ({ linkTo, label }: FooterNavLinkProps) => {
  return (
    <li>
      <Link to={linkTo}>{label}</Link>
    </li>
  );
};

export default FooterNavLink;
