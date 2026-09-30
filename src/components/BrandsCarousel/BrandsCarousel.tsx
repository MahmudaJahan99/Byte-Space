import comapanyLogo1 from "../../assets/company-1.png";
import comapanyLogo2 from "../../assets/company-2.png";
import comapanyLogo3 from "../../assets/company-3.png";
import comapanyLogo4 from "../../assets/company-4.png";
import comapanyLogo5 from "../../assets/company-5.png";
import BrandItem from "./BrandItem";

const companyData = [
  { name: "Falcon", imageSrc: comapanyLogo1 },
  { name: "Falcon", imageSrc: comapanyLogo2 },
  { name: "Falcon", imageSrc: comapanyLogo3 },
  { name: "Falcon", imageSrc: comapanyLogo4 },
  { name: "Falcon", imageSrc: comapanyLogo5 },
];

const BrandsCarousel = () => {
  return (
    <section className="bg-lightest-gray text-light-gray flex flex-wrap gap-4 items-center justify-around py-10">
      {companyData.map(({ name, imageSrc }) => (
        <BrandItem key={name} name={name} imageSrc={imageSrc} />
      ))}
    </section>
  );
};

export default BrandsCarousel;
