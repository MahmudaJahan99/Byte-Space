import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import styles from "../Courses.module.css";

interface FilterDropdownProps {
  label: string;
  icon: LucideIcon;
  menuLabel: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  widthClass: string;
  children: ReactNode;
}

const FilterDropdown = ({
  label,
  icon: Icon,
  menuLabel,
  isOpen,
  onToggle,
  onClose,
  widthClass,
  children,
}: FilterDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuId = `course-filter-${label.toLowerCase()}`;

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={dropdownRef} className="relative">
      {/* dropdown button */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={onToggle}
        className={`${styles.filterBtn} focus:light-focus`}
      >
        <Icon aria-hidden="true" className="h-4 w-4" />
        <span>{label}</span>
      </button>

      {/* dropdown option modal */}
      {isOpen && (
        <div
          id={menuId}
          aria-label={menuLabel}
          className={`absolute left-0 top-full z-20 mt-2 ${widthClass} rounded-xl bg-white p-2 text-left shadow-lg`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
