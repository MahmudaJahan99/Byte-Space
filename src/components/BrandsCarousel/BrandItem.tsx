interface BrandItemProps {
  imageSrc: string;
  name: string;
}

const BrandItem = ({ imageSrc, name }: BrandItemProps) => {
  return (
    <div className="text-light-gray flex items-center gap-2 text-lg lg:text-2xl font-bold poppins">
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className="w-10 rounded-full"
      />
      <span>{name}</span>
    </div>
  );
};

export default BrandItem;
