interface PillButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  variant?: "default" | "toggle";
  expanded?: boolean;
  className?: string;
}

const PillButton = ({
  label,
  active = false,
  onClick,
  variant = "default",
  expanded,
  className = "",
}: PillButtonProps) => {
  const isToggle = variant === "toggle";

  return (
    <button
      type="button"
      onClick={onClick}
      {...(isToggle
        ? { "aria-expanded": expanded }
        : { "aria-pressed": active })}
      className={`rounded-3xl py-1 px-2.5 lg:py-3 lg:px-4 w-fit cursor-pointer ${
        !isToggle && (active ? "bg-electric-lime" : "bg-lightest-gray")
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default PillButton;
