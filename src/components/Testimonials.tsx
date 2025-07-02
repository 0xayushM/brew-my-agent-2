interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
}

const Testimonial = ({ quote, name, position, company }: TestimonialProps) => {
  return (
    <div className="bg-bgLight rounded-lg p-8 border border-white/10 h-full flex flex-col">
      <div className="mb-6 text-primaryAccent">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
        </svg>
      </div>
      <p className="text-textMedium mb-6 flex-grow">{quote}</p>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-textMedium text-sm">{position} @ {company}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Rishav (BrewMyTech) is a diligent engineer, great communicator and team player. Highly recommend him and look forward to watching his career grow.",
      name: "Devendra Patkie",
      position: "COO",
      company: "Insta Group"
    },
    {
      quote: "Rishav (BrewMyTech) is quick at relating to the use case, designing & adept in backend and frontend development. He brings interesting perspectives to the discussion that help in solutioning with ease.",
      name: "Linda Ravindran",
      position: "Co-Founder",
      company: "Headway.ai"
    },
    {
      quote: "I had the pleasure of working with Rishav (BrewMyTech), and I was truly impressed by his ability to deliver results under pressure. He helped us implement a crucial feature in an incredibly short time.",
      name: "Alessio Ricco",
      position: "Founder, Ex-CTO",
      company: "TechSignals"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-bgDark">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="font-heading text-4xl text-center mb-4">What Our Clients Say</h2>
        <p className="text-textMedium text-center max-w-2xl mx-auto mb-12">
          Don't just take our word for it. Here's what industry leaders have to say about our work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
