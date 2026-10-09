import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import loginSignup from "../assets/login-signup.png";
import AuthForm from "../components/AuthForm/AuthForm";

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
          aria-labelledby="login-promo-title"
          className="hidden flex-col justify-center text-lightest-gray md:flex"
        >
          <div className="max-w-xl">
            <h1 id="login-promo-title" className="text-xl">
              Sign in with ease
            </h1>

            <p>
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
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
        <section aria-label="Sign in form" className="flex items-center">
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
