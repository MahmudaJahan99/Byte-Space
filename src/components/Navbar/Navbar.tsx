import { useCallback, useEffect, useRef, useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Blue glass background after the user scrolls
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

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

  // Allow users to close the mobile menu with Escape
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
        isScrolling
          ? "border-b border-white/10 bg-electric-blue/75 shadow-md backdrop-blur-lg"
          : "border-b border-transparent bg-electric-blue"
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
