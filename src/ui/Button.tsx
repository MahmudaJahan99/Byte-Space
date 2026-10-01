import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
}

const Button = ({
  buttonName,
  type = "button",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`rounded-full bg-electric-lime px-5 py-2 font-medium transition-colors hover:bg-electric-lime/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-lime md:px-6 md:py-4 ${className}`}
      {...props}
    >
      {buttonName}
    </button>
  );
};

export default Button;
