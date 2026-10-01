interface GlassPillProps {
  info: string;
}
const GlassBadge = ({ info }: GlassPillProps) => {
  return (
    <div className="rounded-full bg-[#F6F6F699] backdrop-blur-md px-3 py-1.5 text-sm ">
      {info}
    </div>
  );
};

export default GlassBadge;
