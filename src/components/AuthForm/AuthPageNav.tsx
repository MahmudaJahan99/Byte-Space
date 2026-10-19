import useScrolled from "../../hooks/useScrolled";
import Logo from "../../ui/Logo";

const AuthPageNav = () => {
  const isScrolling = useScrolled();

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 z-999 w-full h-18 transition-all duration-300 motion-reduce:transition-none ${
        isScrolling ? "navbar-glass" : "navbar-transparent"
      }`}
    >
      {/* Main Navbar */}
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:grid md:grid-cols-3 md:px-8">
        {/* Logo */}
        <Logo imageSrc="/logo.png" />
      </div>
    </nav>
  );
};

export default AuthPageNav;
