import { X } from "lucide-react";
import Logo from "../../ui/Logo";
import { Link, NavLink } from "react-router-dom";
import { navLinksCenter, navLinksRight } from "./navigationLinks";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  onClose: () => void;
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const MobileNavigation = ({
  isMenuOpen,
  onClose,
  closeButtonRef,
}: MobileNavigationProps) => {
  if (!isMenuOpen) return null;

  return (
    <>
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-60 flex h-screen w-full flex-col bg-electric-blue backdrop-blur-2xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Mobile Menu Header */}
          <div className="flex h-16 items-center justify-between px-4">
            {/* logo */}
            <Logo imageSrc="/logo.png" onClick={onClose} />

            {/* close menu button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <X aria-hidden="true" className="h-7 w-7" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-1 overflow-y-auto flex-col px-6 pt-8">
            {/* Main Links */}
            <div className="flex flex-col gap-6">
              {navLinksCenter.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `text-2xl font-medium ${
                      isActive
                        ? "text-white underline underline-offset-8"
                        : "text-white/90 hover:text-white"
                    } focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-gray-200" />

            {/* Secondary Links */}
            <div className="flex flex-col gap-6">
              {navLinksRight.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={onClose}
                  aria-label={to === "/cart" ? label : undefined}
                  className="inline-flex items-center gap-2 text-2xl font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}{" "}
                  {to !== "/cart" && label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
