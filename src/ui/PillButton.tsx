interface PillButtonProps {
  label: string;
  active?: boolean;
}

const PillButton = ({ label, active = false }: PillButtonProps) => {
  return (
    <div>
      <div
        className={`rounded-3xl py-3 px-4 w-fit  ${active ? "bg-electric-lime" : "bg-lightest-gray"} `}
      >
        <span>{label}</span>
      </div>
    </div>
  );
};

export default PillButton;
