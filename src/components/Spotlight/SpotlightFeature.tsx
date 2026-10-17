import { Check } from "lucide-react";
import type { ReactNode } from "react";

interface Stat {
  value: string;
  label: string;
}

interface ContentFeatureProps {
  title: string;
  description: string;
  visual: ReactNode;
  stats?: Stat[];
  checklist?: string[];
  reverse?: boolean;
}

const SpotlightFeature = ({
  title,
  description,
  visual,
  stats,
  checklist,
  reverse = false,
}: ContentFeatureProps) => {
  return (
    <article
      className={`flex flex-col items-center justify-center gap-8 ${reverse ? "md:flex-row-reverse" : " md:flex-row "}`}
    >
      <div className="text-lg text-shuttle-gray leading-[1.6] md:flex-1 md:min-w-0">
        <div className="grid gap-4">
          {/* Section header */}
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          {/* Stats */}
          {stats && (
            <dl
              aria-label={`${title} statistics`}
              className="flex flex-wrap gap-4 md:gap-6 lg:gap-14"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dd className="text-electric-blue poppins font-medium text-2xl md:text-3xl lg:text-4xl tracking-tight">
                    {stat.value}
                  </dd>
                  <dt>{stat.label}</dt>
                </div>
              ))}
            </dl>
          )}

          {/* Checklist */}
          {checklist && (
            <ul
              aria-label={`${title} benefits`}
              className="flex flex-col gap-4 text-black font-medium"
            >
              {checklist.map((item) => (
                <li key={item} className="flex gap-2 text-lg">
                  <span
                    aria-hidden="true"
                    className="bg-electric-blue rounded-full w-6.5 h-6.5 flex items-center justify-center"
                  >
                    <Check aria-hidden="true" className="text-white" />
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:flex-1 md:min-w-0">{visual}</div>
    </article>
  );
};

export default SpotlightFeature;
