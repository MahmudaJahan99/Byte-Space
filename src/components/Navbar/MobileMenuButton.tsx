import type { RefObject } from "react";
import { Menu } from "lucide-react";

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
      className="p-2 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden"
    >
      <Menu className="h-7 w-7" aria-hidden="true" />{" "}
    </button>
  );
};

export default MobileMenuButton;
