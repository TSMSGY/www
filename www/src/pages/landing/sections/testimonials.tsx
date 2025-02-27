import { Testimonial } from "@/components/testiominal";


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

        <Testimonial
          quote="Experience cutting-edge technology that transforms surgical training, blending unparalleled realism with precise performance data. Our simulators empower the next generation of surgeons to sharpen their skills, deepen their understanding, and elevate patient outcomes."
          author="Dr. John Doe"
          title="Chief Medical Officer"
          avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
        />
        <Testimonial
          quote="Master the art of surgery in a risk-free environment. Our cutting-edge simulators provide an immersive, realistic experience, allowing surgeons to hone their skills and deepen their expertise. By seamlessly integrating simulation with real-world scenarios, we're empowering the next generation to achieve unparalleled precision and improve patient outcomes."
          author="Dr. Jane Doe"
          title="Chief Medical Officer"
          avatarUrl="https://randomuser.me/api/portraits/women/1.jpg"
        />
        <Testimonial
        quote="Experience cutting-edge technology that transforms surgical training, blending unparalleled realism with precise performance data. Our simulators empower the next generation of surgeons to sharpen their skills, deepen their understanding, and elevate patient outcomes."
        author="Dr. John Doe"
        title="Chief Medical Officer"
        avatarUrl="https://randomuser.me/api/portraits/"
        />
        <Testimonial
        quote="Experience cutting-edge technology that transforms surgical training, blending unparalleled realism with precise performance data. Our simulators empower the next generation of surgeons to sharpen their skills, deepen their understanding, and elevate patient outcomes."
        author="Dr. John Doe"
        title="Chief Medical Officer"
        avatarUrl="https://randomuser.me/api/portraits/"
        />
        </div>
      </section>
  );
}
