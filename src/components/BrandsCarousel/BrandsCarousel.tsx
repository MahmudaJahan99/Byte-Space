import comapanyLogo1 from "../../assets/companies/amazon.svg";
import comapanyLogo2 from "../../assets/companies/android.svg";
import comapanyLogo3 from "../../assets/companies/docker.svg";
import comapanyLogo4 from "../../assets/companies/figma.svg";
import comapanyLogo5 from "../../assets/companies/react.svg";
import comapanyLogo6 from "../../assets/companies/pinterest.svg";
import comapanyLogo7 from "../../assets/companies/shell.svg";
import BrandItem from "./BrandItem";

const companyData = [
  { name: "Amazon", imageSrc: comapanyLogo1 },
  { name: "Android", imageSrc: comapanyLogo2 },
  { name: "Docker", imageSrc: comapanyLogo3 },
  { name: "Figma", imageSrc: comapanyLogo4 },
  { name: "React", imageSrc: comapanyLogo5 },
  { name: "Pinterest", imageSrc: comapanyLogo6 },
  { name: "Shell", imageSrc: comapanyLogo7 },
];
const BrandsCarousel = () => {
  return (
    <section
      aria-labelledby="trusted-companies-heading"
      className="overflow-hidden bg-lightest-gray text-light-gray py-10"
    >
      <h2 id="trusted-companies-heading" className="sr-only">
        Companies that trust ByteSpace
      </h2>

      <div className="brands-carousel">
        <div className="brands-track">
          {[0, 1, 2, 3].map((group) => (
            <ul key={group} className="brands-group" aria-hidden="true">
              {companyData.map(({ name, imageSrc }) => (
                <li key={name}>
                  <BrandItem name={name} imageSrc={imageSrc} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <ul className="sr-only">
        {companyData.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
};

export default BrandsCarousel;
