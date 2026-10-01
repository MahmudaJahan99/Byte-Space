import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import loginSignup from "../assets/login-signup.png";
import Button from "../ui/Button";

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
        <section className="hidden flex-col justify-center text-lightest-gray md:flex">
          <div className="max-w-xl">
            <h1 className="text-xl">Sign in with ease</h1>

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
        <section className="flex items-center">
          <form
            action=""
            className="flex flex-col w-full rounded-3xl bg-white p-6 sm:p-8 md:p-10"
          >
            {/* form header */}
            <div className="mb-4">
              <h2 className="text-electric-blue text-lg font-normal mb-0">
                Sign In
              </h2>
              <h3>Wecome Back</h3>
            </div>

            {/* Form fields */}
            <div className="space-y-5">
              {/* email */}
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-[1.2]"
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jane@example.com"
                  className="h-13 w-full rounded-xl border border-gray-300 px-6 py-3 text-sm text-gray-900 outline-none transition focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20"
                />
              </div>

              {/* password */}
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="password"
                  className="text-sm font-medium leading-[1.2]"
                >
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  className="h-13 w-full rounded-xl border border-gray-300 px-6 py-3 text-sm text-gray-900 outline-none transition focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col gap-5">
              {/* sign in */}
              <div className="w-full lg:ml-auto lg:w-fit">
                <Button
                  buttonName="Sign In"
                  type="submit"
                  className="w-full lg:w-fit"
                />
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-gray-400">OR</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Social Login */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Continue with Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-electric-blue/20"
                >
                  <img
                    src="/facebook-icon.png"
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </button>

                <button
                  type="button"
                  aria-label="Continue with Google"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-electric-blue/20"
                >
                  <img
                    src="/google-icon.png"
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </button>
              </div>

              <p className="text-center">
                New user?
                <Link to="/login" className="text-electric-blue">
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
