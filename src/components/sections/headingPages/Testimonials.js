import Carousel from "./TestimonialCarousel";
import TestimonialCard from "./CardInfo/TestimonialCard";
export default function Testimonials() {
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h1>Testimonials</h1>
      </article>

      <section className="testimonials-cards">
        <TestimonialCard
          name="Micheal Jordan"
          description="Best Mediterranean food ever!"
        />
        <TestimonialCard
          name="Dennis Rodman"
          description="Loved the vibes and 
                delicious food here!"
        />
        <TestimonialCard
          name="Ron Harper"
          description="Best Mediterranean food!"
        />
        <TestimonialCard
          name="Phil Jackson"
          description="The best place to get food in town."
        />
        <TestimonialCard
          name="Scottie Pippen,"
          description="Food here hits the spot after a home game!"
        />
        <TestimonialCard
          name="Horace Grant"
          description="Food is always fresh and delicious. Love bringing the family here to eat."
        />
        <TestimonialCard
          name="Steve Kerr"
          description="Food here was always FIRE! A must if you're in town."
        />
        <TestimonialCard
          name="Toni Kukoc"
          description="Remind me of fresh Mediterranean food back in Europe."
        />
      </section>

      <section className="testimonials-carousel">
        <Carousel />
      </section>
    </section>
  );
}
