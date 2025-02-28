import { Testimonial } from "@/components/testiominal";
import testimonials from "@/static/testimonials";


export const Testimonials = () => {
  return (
    <section className="flex flex-col gap-8 p-8 justify-center items-center">
      <h2 className="text-2xl sm:text-4xl/snug text-center">
        <span className="underline decoration-primary decoration-wavy decoration-3 font-bold">Trusted</span>
        <br />
        <span>by world experts.</span>
      </h2>
      <p className="text-muted-foreground text-center">
        Don't just take our word for it. Here's what our customers have to say.
      </p>
      <div className="grid grid-cols-2 gap-8">
        {
          testimonials.map((item, index) => (
            <Testimonial key={index} {...item} />
          ))
        }

      </div>
    </section>
  );
}
