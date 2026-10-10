import FooterNavLink from "./FooterNavLink";
import type { FooterNavLink as FooterNavLinkType } from "../../data/footerNavLinks";

interface FooterNavLinksProps {
  links: FooterNavLinkType[];
  ariaLabel: string;
  className?: string;
}

const FooterNavLinks = ({ links, ariaLabel, className = "grid gap-y-2", }: FooterNavLinksProps) => {
  return (
    <nav aria-label={ariaLabel}>
      <ul className={className}>
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
