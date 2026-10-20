import { companyData } from "../../data/brandNames";
import BrandItem from "./BrandItem";

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
