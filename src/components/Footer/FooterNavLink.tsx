import { Link } from "react-router-dom";

interface FooterNavLinkProps {
  linkTo: string;
  label: string;
}

const FooterNavLink = ({ linkTo, label }: FooterNavLinkProps) => {
  return (
    <li className="hover:text-electric-blue transition duration-400">
      <Link
        to={linkTo}
        className="transition duration-400 hover:text-electric-blue focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-blue"
      >
        {label}
      </Link>
    </li>
  );
};

export default FooterNavLink;
