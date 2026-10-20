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
      className={`text-dark-gray rounded-full cursor-pointer px-5 py-2 md:px-6 md:py-4 bg-electric-lime font-medium transition-all hover:bg-electric-lime/90 duration-300 ease-out hover:-translate-y-1 focus:yellow-focus
        ${className}`}
      {...props}
    >
      {buttonName}
    </button>
  );
};

export default Button;
