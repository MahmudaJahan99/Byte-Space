interface PillButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const PillButton = ({ label, active = false, onClick }: PillButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-3xl py-3 px-4 w-fit  ${active ? "bg-electric-lime" : "bg-lightest-gray"} `}
    >
      {label}
    </button>
  );
};

export default PillButton;
