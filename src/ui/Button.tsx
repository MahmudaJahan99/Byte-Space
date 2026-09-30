interface ButtonProps {
    buttonName: string
}
const Button = ({buttonName}: ButtonProps) => {
  return (
    <button className="rounded-full bg-electric-lime px-3 md:px-6 py-2 md:py-4 font-medium ">
      {buttonName}
    </button>
  );
};

export default Button;
