import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "./testimonialData";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className="relative overflow-hidden py-10 bg-[#fafafa] backdrop-blur-md">
      {/* background radial gradients */}
      <div className={styles.blueBottomGlow} />
      <div className={styles.yellowTopCenterGlow} />
      <div className={styles.yellowRightGlow} />

      {/* <section className="  text-center "> */}
      <section className="relative z-10 max-w-11/12 lg:max-w-[calc(100vw-200px)] m-auto  py-10 grid gap-4 lg:gap-8">
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-10">
          <h3 className="poppins font-semibold text-xl md:text-2xl lg:text-4xl leading-[1.2] md:w-1/2">
            Discover What Our <br className="hidden md:flex" /> Community Is
            Saying
          </h3>
          <p className="md:w-1/2">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonialData.map((item) => (
            <TestimonialCard
              key={item.name}
              image={item.image}
              name={item.name}
              title={item.title}
              testimonial={item.testimonial}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
