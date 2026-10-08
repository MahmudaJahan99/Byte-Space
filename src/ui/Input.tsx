import type { LucideIcon } from "lucide-react";
import type { ChangeEvent } from "react";
interface InputProps {
  label: string;
  icon: LucideIcon;
  inputType: string;
  inputName: string;
  inputId: string;
  inputPlaceholder: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  icon: Icon,
  inputType,
  inputName,
  inputId,
  inputPlaceholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="relative flex-1 border border-gray-border rounded-full">
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>

      <Icon
        aria-hidden="true"
        size={20}
        className="pointer-events-none absolute top-1/2 left-4 md:left-6 z-10 -translate-y-1/2 text-light-gray"
      />

      <input
        type={inputType}
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-full bg-white py-2 md:py-4 pr-4 pl-10 md:pl-14 text-dark-gray outline-none placeholder:text-light-gray relative z-1"
      />
    </div>
  );
};

export default Input;
