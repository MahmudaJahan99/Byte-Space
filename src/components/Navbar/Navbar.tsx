import { useCallback, useEffect, useRef, useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import useScrolled from "../../hooks/useScrolled";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolling = useScrolled();

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const currentPaddingRight = window.getComputedStyle(
      document.body,
    ).paddingRight;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `calc(${currentPaddingRight} + ${scrollbarWidth}px)`;
    }

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Restore focus only after the drawer has exited.
  const handleExitComplete = useCallback(() => {
    menuButtonRef.current?.focus();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 z-999 w-full h-18 transition-all duration-500 ease-in-out motion-reduce:transition-none ${
        isScrolling ? "navbar-glass" : "navbar-transparent"
      }`}
    >
      {/* Desktop Navbar */}
      <DesktopNavigation
        isMenuOpen={isMenuOpen}
        onOpen={() => setIsMenuOpen(true)}
        menuButtonRef={menuButtonRef}
      />

      {/* Mobile Navbar */}
      <MobileNavigation
        isMenuOpen={isMenuOpen}
        onClose={closeMenu}
        closeButtonRef={closeButtonRef}
        onExitComplete={handleExitComplete}
      />
    </nav>
  );
};

export default Navbar;
