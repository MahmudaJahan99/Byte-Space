interface TestimonialCardProps {
  image: string;
  name: string;
  title: string;
  testimonial: string;
}

const TestimonialCard = ({
  image,
  name,
  title,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-3xl bg-white p-4">
      <div>
        <img
          src={image}
          alt="user profile"
          className="rounded-full h-20 w-20"
        />
        <h6 className="mt-4">{name}</h6>
        <p className=" text-electric-blue">{title}</p>
      </div>
      <p className="text-dark-gray2">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
