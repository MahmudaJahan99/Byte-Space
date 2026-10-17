interface GlassPillProps {
  info: string;
  className?: string;
}

const GlassBadge = ({ info, className = "" }: GlassPillProps) => {
  return (
    <div
      className={`rounded-full bg-[#F6F6F699] backdrop-blur-md px-3 py-1.5 text-sm ${className}`}
    >
      {info}
    </div>
  );
};

export default GlassBadge;
