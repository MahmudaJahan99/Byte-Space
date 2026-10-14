import SmallCard from "../SmallCard";

const UiUxCourseCard = () => {
  return (
    <SmallCard title="UI/UX Design">
      <div className="flex gap-1 text-[12px] text-light-gray">
        <span>200 Courses</span>
        <span aria-hidden="true">•</span>
        <span>1000+ Students</span>
      </div>
    </SmallCard>
  );
};

export default UiUxCourseCard;
