import { Testimonial } from "@/components/testiominal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import testimonials from "@/static/testimonials";


export const Testimonials = () => {
  return (
    <section className="flex flex-col gap-8 p-8 justify-center items-center">
      <h2 className="text-2xl sm:text-4xl/snug text-center">
        <span className="underline decoration-primary decoration-wavy decoration-3 font-bold">
          Trusted
        </span>
        <br />
        <span>by the community.</span>
      </h2>
      <p className="text-muted-foreground text-center">
        Don't just take our word for it. Here's what our community have to say.
      </p>

      <Carousel className="w-11/12">
        <CarouselContent className="px-2 py-4">
          {
            testimonials.map((item, index) => (
              <CarouselItem className="md:basis-1/2 xl:basis-1/3">
                <Testimonial key={index} {...item} />
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="ml-3 md:ml-0" />
        <CarouselNext className="mr-3 md:ml-0" />
      </Carousel>

    </section>
  );
}
