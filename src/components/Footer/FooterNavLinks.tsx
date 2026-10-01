import FooterNavLink from "./FooterNavLink";
import type { FooterNavLink as FooterNavLinkType } from "../../data/footerNavLinks";

interface FooterNavLinksProps {
  links: FooterNavLinkType[];
}

const FooterNavLinks = ({ links }: FooterNavLinksProps) => {
  return (
    <ul className="grid gap-y-2">
      {links.map((link) => (
        <FooterNavLink
          key={link.label}
          linkTo={link.linkTo}
          label={link.label}
        />
      ))}
    </ul>
  );
};

export default FooterNavLinks;
