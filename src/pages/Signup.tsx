import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import loginSignup from "../assets/login-signup.png";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Blue glass background after the user scrolls
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-electric-blue w-screen h-screen">
      {/* Top Nav */}
      <nav
        aria-label="Primary navigation"
        className={`fixed top-0 z-999 w-full transition-all duration-300 h-20 motion-reduce:transition-none ${
          isScrolled
            ? "border-b border-white/10 bg-electric-blue shadow-lg backdrop-blur-lg"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Main Navbar */}
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:grid md:h-20 md:grid-cols-3 md:px-8">
          {/* Logo */}
          <Logo imageSrc="/logo.png" />
        </div>
      </nav>

      <main className="pt-20">
        <div className="grid gap-8 text-lightest-gray">
          <div>
            <h1 className="text-xl">Sign up and come in</h1>
            <p>
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>
          </div>

          <img src={loginSignup} alt="" />
        </div>

        <form action="">
          <h2>Create an Accout</h2>
          <h3>Wecome to ByteSpace</h3>

          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Jane Doe"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="jane@example.com"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="jane@example.com"
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="confirm-password"
            name="confirm-password"
            id="confirm-password"
            placeholder="jane@example.com"
          />

          <Button buttonName="Continue" type="submit" />

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Signup;
