import { Check } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface ContentFeatureProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stats?: Stat[];
  checklist?: string[];
  reverse?: boolean;
}

const SpotlightFeature = ({
  title,
  description,
  image,
  imageAlt,
  stats,
  checklist,
  reverse = false,
}: ContentFeatureProps) => {
  return (
    <article
      className={`flex flex-col items-center justify-center gap-8 ${reverse ? "md:flex-row-reverse" : " md:flex-row "}`}
    >
      <div className="text-lg text-shuttle-gray leading-[1.6] md:w-1/2">
        <div className="grid gap-4">
          {/* Section header */}
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          {/* Stats */}
          {stats && (
            <dl className="flex gap-6 md:gap-14">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-electric-blue poppins font-medium text-4xl tracking-tight">
                    {stat.value}
                  </dd>
                  <span aria-hidden="true">{stat.label}</span>
                </div>
              ))}
            </dl>
          )}

          {/* Checklist */}
          {checklist && (
            <ul className="flex flex-col gap-4 text-black font-medium">
              {checklist.map((item) => (
                <li key={item} className="flex gap-2 text-lg">
                  <span
                    aria-hidden="true"
                    className="bg-electric-blue rounded-full w-6.5 h-6.5 flex items-center justify-center"
                  >
                    <Check className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img src={image} alt={imageAlt} />
      </div>
    </article>
  );
};

export default SpotlightFeature;
