import AnimatedButton from "./ui/AnimatedButton";

const CTA = () => {
  return (
    <section id="cta" className="h-[80vh] bg-bgLight">
      <div className="container mx-auto max-w-7xl px-5 text-center h-full flex items-center justify-center flex-col">
        <h2 className="avalon-bold text-4xl mb-5">Ready to <span className="needle-underline primary-accent">brew</span> Your Competitive Edge?</h2>
        <p className="avalon text-textMedium max-w-2xl mx-auto mb-8">
          Let&apos;s talk about the measurable value a custom AI agent can bring to your business. <br />
          No pressure, just possibilities.
        </p>
        <AnimatedButton 
          href="mailto:hello@brewmyagent.com" 
          className="inline-block px-7 py-3 rounded-full bg-primaryAccent text-bgDark font-bold border-2 border-primaryAccent transition-all hover:bg-transparent hover:text-primaryAccent"
        >
          Book Your Free Discovery Call
        </AnimatedButton>
      </div>
    </section>
  );
};

export default CTA;
