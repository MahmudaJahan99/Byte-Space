import { Link, NavLink } from "react-router-dom";
import { navLinksCenter, navLinksRight } from "./navigationLinks";
import Logo from "../../ui/Logo";
import MobileMenuButton from "./MobileMenuButton";
import styles from "./Navbar.module.css";

interface DesktopNavigationProps {
  isMenuOpen: boolean;
  onOpen: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const DesktopNavigation = ({
  isMenuOpen,
  onOpen,
  menuButtonRef,
}: DesktopNavigationProps) => {
  return (
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:grid md:h-20 md:grid-cols-3 md:px-8">
      {/* Logo */}
      <Logo imageSrc="/logo.png" />

      {/* Center Navigation */}
      <div
        aria-label="Main navigation links"
        className="hidden items-center justify-center gap-8 md:flex"
      >
        {navLinksCenter.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Right - Desktop Actions */}
      <div className="hidden items-center justify-end gap-8 md:flex">
        {navLinksRight.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            aria-label={to === "/cart" ? label : undefined}
            className={styles.authLink}
          >
            {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
            {to !== "/cart" && label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <MobileMenuButton
        isMenuOpen={isMenuOpen}
        onOpen={onOpen}
        buttonRef={menuButtonRef}
      />
    </div>
  );
};

export default DesktopNavigation;
