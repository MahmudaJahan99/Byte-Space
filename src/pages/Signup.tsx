import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import loginSignup from "../assets/login-signup.png";
import AuthForm from "../components/AuthForm/AuthForm";

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
    <div className="min-h-screen w-full bg-electric-blue">
      <title>ByteSpace | Signup</title>
      
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

      <main className="mx-auto grid min-h-screen max-w-7xl items-stretch px-4 pt-20 pb-10 md:grid-cols-2 md:gap-12 md:px-8">
        {/* Promotional content */}
        <section
          aria-labelledby="signup-promo-title"
          className="hidden flex-col justify-center text-lightest-gray md:flex"
        >
          <div className="max-w-xl">
            <h1 id="signup-promo-title" className="text-xl">
              Sign up and come in
            </h1>

            <p>
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost.
            </p>

            <img
              src={loginSignup}
              alt=""
              aria-hidden="true"
              className="mt-8 w-full max-w-lg object-contain"
            />
          </div>
        </section>

        {/* Form */}
        <section aria-label="Create account form" className="flex items-center">
          <AuthForm
            title="Create an Account"
            subtitle="Welcome to ByteSpace"
            buttonName="Continue"
            footerText="Already have an account?"
            footerLinkText="Login"
            footerLinkTo="/login"
            fields={[
              {
                id: "full-name",
                name: "full-name",
                label: "Full Name",
                type: "text",
                placeholder: "Jane Doe",
                autoComplete: "name",
              },
              {
                id: "email",
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "jane@example.com",
                autoComplete: "email",
              },
              {
                id: "password",
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "********",
                autoComplete: "new-password",
              },
              {
                id: "confirm-password",
                name: "confirm-password",
                label: "Confirm Password",
                type: "password",
                placeholder: "********",
                autoComplete: "new-password",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
};

export default Signup;
