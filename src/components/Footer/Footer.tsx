import { Mail } from "lucide-react";
import Logo from "../../ui/Logo";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import FooterNavLinks from "./FooterNavLinks";
import {
  categoryLinks,
  creatorLinks,
  featuredLinks,
} from "../../data/footerNavLinks";

const Footer = () => {
  const handleEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Search logic will go here.
  };
  return (
    <footer className="text-sm pt-10 max-w-11/12 lg:max-w-[calc(100vw-200px)] xl:max-w-11/12 m-auto grid gap-4 lg:gap-8">
      {/* top section */}
      <div className="grid gap-4 md:gap-8 md:grid-cols-2 items-center">
        {/* Left section */}
        <div className="grid gap-4">
          <Logo imageSrc="/logo2.png" />

          <p>
            Stay Up to date with our latest features and releases by joining our
            newsletter.
          </p>

          <form
            role="subscribe"
            onSubmit={handleEmail}
            className="relative mt-4 md:mt-6 max-w-xl flex gap-4 md:gap-6 text-sm md:text-[18px] xl:w-3xl"
          >
            <Input
              label="Enter your email"
              icon={Mail}
              inputType="email"
              inputName="user-email"
              inputId="user-email"
              inputPlaceholder="Enter your email"
            />
            <Button buttonName="Subscribe" />
          </form>

          <p>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>

        {/* divider */}
        <div className=" h-px w-full bg-gray-200 md:hidden"></div>

        {/* Right section */}
        <nav className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <FooterNavLinks links={featuredLinks} />
          <FooterNavLinks links={categoryLinks} />
          <FooterNavLinks links={creatorLinks} />
        </nav>
      </div>

      {/* bottom section */}
      <div>
        {/* divider */}
        <div className=" h-px w-full bg-gray-200"></div>

        <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-between py-5">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex gap-4">
            <li>
              <Link to="/" />
              Privacy Policy
            </li>
            <li>
              <Link to="/" />
              Terms of Service
            </li>
            <li>
              <Link to="/" />
              Cookies Settings
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
