import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import AuthForm from "../components/AuthForm/AuthForm";
import AuthDecoration from "../components/AuthForm/AuthDecoration";

const Login = () => {
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
      <title>ByteSpace | Login</title>

      {/* Top Nav */}
      <nav
        aria-label="Primary navigation"
        className={`fixed top-0 z-999 w-full transition-all duration-300 h-18 motion-reduce:transition-none ${
          isScrolled
            ? "border-b border-white/10 bg-electric-blue shadow-lg backdrop-blur-lg"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Main Navbar */}
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:grid md:grid-cols-3 md:px-8">
          {/* Logo */}
          <Logo imageSrc="/logo.png" />
        </div>
      </nav>

      <main className="mx-auto grid min-h-screen max-w-7xl items-stretch px-4 pt-20 pb-10 lg:grid-cols-2 lg:gap-12 lg:px-8 overflow-hidden">
        {/* Promotional content */}
        <AuthDecoration
          title="Sign in with ease"
          subtitle="Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge."
        />

        {/* Form */}
        <section
          aria-label="Sign in form"
          className="flex items-center justify-center md:mx-auto md:w-full md:max-w-xl lg:max-w-none"
        >
          <AuthForm
            title="Sign In"
            subtitle="Welcome Back"
            buttonName="Sign In"
            showSocialLogin
            footerText="New user?"
            footerLinkText="Create an account"
            footerLinkTo="/signup"
            fields={[
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
                autoComplete: "current-password",
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
};

export default Login;
