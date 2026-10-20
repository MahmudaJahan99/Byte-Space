import useScrolled from "../../hooks/useScrolled";
import Logo from "../../ui/Logo";

const AuthPageNav = () => {
  const isScrolling = useScrolled();

  return (
    <nav
      aria-label="Primary navigation"
      className={` w-full h-18 fixed top-0 z-999 transition-all duration-300 motion-reduce:transition-none ${
        isScrolling ? "navbar-glass" : "navbar-transparent"
      }`}
    >
      {/* Main Navbar */}
      <div className="h-18 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between md:grid md:grid-cols-3">
        {/* Logo */}
        <Logo imageSrc="/logo.png" />
      </div>
    </nav>
  );
};

export default AuthPageNav;
