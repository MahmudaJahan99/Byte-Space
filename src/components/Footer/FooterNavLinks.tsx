import FooterNavLink from "./FooterNavLink";
import type { FooterNavLink as FooterNavLinkType } from "../../data/footerNavLinks";

interface FooterNavLinksProps {
  links: FooterNavLinkType[];
  ariaLabel: string;
}

const FooterNavLinks = ({ links, ariaLabel }: FooterNavLinksProps) => {
  return (
    <nav aria-label={ariaLabel}>
      <ul className="grid gap-y-2">
        {links.map((link) => (
          <FooterNavLink
            key={link.label}
            linkTo={link.linkTo}
            label={link.label}
          />
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavLinks;
