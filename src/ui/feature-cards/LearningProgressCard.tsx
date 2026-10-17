import SmallCard from "../SmallCard";

const LearningProgressCard = () => {
  return (
    <SmallCard title="Learning Progress">
      <p
        id="learning-progress-value"
        className="poppins font-semibold md:text-xl lg:text-3xl"
      >
        55%
      </p>
      <div
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={55}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext="55 percent complete"
        className="mt-3 h-2 w-45.25 overflow-hidden rounded-full bg-[#F6F6F6]"
      >
        <div
          className="h-full rounded-full bg-electric-lime transition-all duration-500"
          style={{ width: `${55}%` }}
        />
      </div>
    </SmallCard>
  );
};

export default LearningProgressCard;
