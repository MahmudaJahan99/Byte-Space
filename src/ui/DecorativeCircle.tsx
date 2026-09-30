interface DecorativeCircleProps {
  src: string;
  className?: string;
}

const DecorativeCircle = ({ src, className = "" }: DecorativeCircleProps) => {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
    />
  );
};

export default DecorativeCircle;
