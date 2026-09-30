import type { ReactNode } from "react";

interface SmallCardProps {
  title: string;
  children: ReactNode;
}

const SmallCard = ({ title, children }: SmallCardProps) => {
  return (
    <div className="hidden lg:block card rounded-2xl bg-white p-2 md:p-4 w-fit">
      <h6 className="font-medium text-dark-gray">{title}</h6>
      {children}
    </div>
  );
};

export default SmallCard;
