import type { RefObject } from "react";
import { Menu } from "lucide-react";
import styles from "./Navbar.module.css";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  onOpen: () => void;
  buttonRef: RefObject<HTMLButtonElement | null>;
}

const MobileMenuButton = ({
  isMenuOpen,
  onOpen,
  buttonRef,
}: MobileMenuButtonProps) => {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onOpen}
      aria-label="Open navigation menu"
      aria-expanded={isMenuOpen}
      aria-controls="mobile-navigation"
      className={`${styles.iconButton} ${styles.hamburgerMenu}`}
    >
      <Menu className="h-7 w-7 cursor-pointer" aria-hidden="true" />
    </button>
  );
};

export default MobileMenuButton;
