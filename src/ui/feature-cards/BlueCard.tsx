interface BlueCardProps {
  heading: string;
  subHeading: string;
  price: string;
  progressBar?: boolean;
  badge?: boolean;
}

const BlueCard = ({
  heading,
  subHeading,
  price,
  progressBar,
  badge,
}: BlueCardProps) => {
  return (
    <div className="card rounded-lg bg-electric-blue text-white p-2 w-fit">
      <div className="text-[8px] lg:text-[16px]">{heading}</div>
      <div className="text-[6px] lg:text-[12px]">{subHeading}</div>
      <div className="text-[10px] lg:text-[20px] py-1 lg:py-2">${price}</div>

      {progressBar && (
        <div
          role="progressbar"
          aria-label="Revenue progress"
          aria-valuenow={55}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext="55 percent revenue"
          className="h-1 lg:h-2 w-25 lg:w-50 overflow-hidden rounded-full bg-[#F6F6F6]"
        >
          <div
            className="h-full rounded-full bg-electric-lime transition-all duration-500"
            style={{ width: `${55}%` }}
          />
        </div>
      )}

      {badge && (
        <div className="bg-electric-lime text-dark-gray rounded-3xl flex items-center justify-center text-[6px] lg:text-[12px] w-fit px-1 py-0.5 lg:px-2 lg:py-1 font-bold">
          +12$
        </div>
      )}
    </div>
  );
};

export default BlueCard;
