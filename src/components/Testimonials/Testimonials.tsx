import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "./testimonialData";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section
      aria-labelledby="testimonials heading"
      className="relative overflow-hidden py-10 bg-[#fafafa] backdrop-blur-md"
    >
      {/*  Decorative background radial gradients */}
      <div className={styles.blueBottomGlow} aria-hidden="true" />
      <div className={styles.yellowTopCenterGlow} aria-hidden="true" />
      <div className={styles.yellowRightGlow} aria-hidden="true" />

      {/* <section className="  text-center "> */}
      <div className="page-section relative z-10">
        {/* Section header */}
        <header className="flex flex-col md:flex-row md:items-end gap-4 mb-10">
          <h3 id="testimonials-heading" className="md:w-1/2">
            Discover What Our <br className="hidden md:flex" /> Community Is
            Saying
          </h3>
          <p className="md:w-1/2">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the headererse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          aria-label="Community testimonials"
        >
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
      </div>
    </section>
  );
};

export default Testimonials;
