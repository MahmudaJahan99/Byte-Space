interface BrandItemProps {
  imageSrc: string;
  name: string;
}

const BrandItem = ({ imageSrc, name }: BrandItemProps) => {
  return (
    <div className="text-light-gray flex items-center gap-2 shrink-0 whitespace-nowrap text-lg lg:text-2xl font-bold poppins">
      <img src={imageSrc} alt="" className="w-11 h11" aria-hidden="true" />

      <span>{name}</span>
    </div>
  );
};

export default BrandItem;
