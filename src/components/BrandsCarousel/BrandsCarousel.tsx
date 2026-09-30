import comapanyLogo1 from "../../assets/company-1.png";
import comapanyLogo2 from "../../assets/company-2.png";
import comapanyLogo3 from "../../assets/company-3.png";
import comapanyLogo4 from "../../assets/company-4.png";
import comapanyLogo5 from "../../assets/company-5.png";
import BrandItem from "./BrandItem";

const companyData = [
  { name: "Falcon", imageSrc: comapanyLogo1 },
  { name: "E-Mart", imageSrc: comapanyLogo2 },
  { name: "Spiral", imageSrc: comapanyLogo3 },
  { name: "Explorite", imageSrc: comapanyLogo4 },
  { name: "Slytherine", imageSrc: comapanyLogo5 },
];

const BrandsCarousel = () => {
  return (
    <section
      aria-labelledby="trusted-companies-heading"
      className="bg-lightest-gray text-light-gray flex flex-wrap gap-4 items-center justify-around py-10"
    >
      <h2 id="trusted-companies-heading" className="sr-only">
        Companies that trust ByteSpace
      </h2>

      <ul className="flex w-full flex-wrap items-center justify-around gap-4">
        {companyData.map(({ name, imageSrc }) => (
          <li key={name}>
            <BrandItem name={name} imageSrc={imageSrc} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BrandsCarousel;
