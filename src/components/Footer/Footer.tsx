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
    <>
      <footer className="page-section pb-4 text-sm">
        {/* top section */}
        <div className="grid gap-4 md:gap-8 md:grid-cols-2 items-center">
          {/* Left section */}
          <div className="grid gap-4">
            <Logo imageSrc="/logo2.png" />

            <p>
              Stay Up to date with our latest features and releases by joining
              our newsletter.
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
      </footer>

      {/* divider */}
      <div className=" h-px w-full bg-gray-200"></div>

      {/* bottom section */}
      <footer className="page-section text-sm py-4">
        <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-between">
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
      </footer>
    </>
  );
};

export default Footer;
