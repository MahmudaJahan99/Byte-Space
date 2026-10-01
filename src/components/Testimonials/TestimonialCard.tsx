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
          alt={`${name}'s profile`}
          className="rounded-full h-20 w-20"
          loading="lazy"
          decoding="async"
        />

        <h6 className="mt-4">
          <cite className="not-italic">{name}</cite>
        </h6>

        <p className=" text-electric-blue">{title}</p>
      </div>

      <blockquote className="text-dark-gray2">
        <p>"{testimonial}"</p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
