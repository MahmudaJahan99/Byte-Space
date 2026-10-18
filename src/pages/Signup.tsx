import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import AuthForm from "../components/AuthForm/AuthForm";
import AuthDecoration from "../components/AuthForm/AuthDecoration";

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

      <main className="mx-auto grid min-h-screen max-w-7xl items-stretch px-4 pt-20 pb-10 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Promotional content */}
        <AuthDecoration
          title="Sign up and come in"
          subtitle="The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost."
        />

        {/* Form */}
        <section
          aria-label="Create account form"
          className="flex items-center justify-center md:mx-auto md:w-full md:max-w-xl lg:max-w-none"
        >
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
