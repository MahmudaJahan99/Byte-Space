import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "../../ui/Logo";

const navLinksCenter = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/creators", label: "Creators" },
];

const navLinksRight = [
  { to: "/login", label: "Sign In" },
  { to: "/signup", label: "Join Us" },
  { to: "/cart", icon: ShoppingBag },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Blue glass background after the user scrolls
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll(); // set correct state on first render
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 z-999 w-full transition-all duration-300 h-20 ${
        isScrolled
          ? "border-b border-white/10 bg-brand-blue shadow-lg backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Main Navbar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:grid md:h-20 md:grid-cols-3 md:px-8">
        {/* Logo */}
        <Logo />

        {/* Center Navigation */}
        <div className="hidden items-center justify-center gap-8 md:flex">
          {navLinksCenter.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right - Desktop Actions */}
        <div className="hidden items-center justify-end gap-8 md:flex">
          {navLinksRight.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {Icon && <Icon className="h-6 w-6" />}
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="p-2 text-white md:hidden"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-60 flex h-screen w-full flex-col bg-brand-blue backdrop-blur-2xl md:hidden">
          {/* Mobile Menu Header */}
          <div className="flex h-16 items-center justify-between px-4">
            <Logo onClick={closeMenu} />

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-2 text-white"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-1 overflow-y-auto flex-col px-6 pt-8">
            {/* Main Links */}
            <div className="flex flex-col gap-6">
              {navLinksCenter.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className="text-2xl font-medium text-white"
                >
                  {link.label}
                </Link>
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
                  onClick={closeMenu}
                  className="text-2xl font-medium text-white"
                >
                  {Icon && <Icon className="h-6 w-6" />}
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
