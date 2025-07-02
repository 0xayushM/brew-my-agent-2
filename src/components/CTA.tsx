import Link from 'next/link';

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-bgLight">
      <div className="container mx-auto max-w-7xl px-5 text-center">
        <h2 className="font-heading text-4xl mb-5">Ready to Brew Your Competitive Edge?</h2>
        <p className="text-textMedium max-w-2xl mx-auto mb-8">
          Let&apos;s talk about the measurable value a custom AI agent can bring to your business. <br />
          No pressure, just possibilities.
        </p>
        <a 
          href="mailto:hello@brewmyagent.com" 
          className="inline-block px-7 py-3 rounded-full bg-primaryAccent text-bgDark font-bold border-2 border-primaryAccent transition-all hover:bg-transparent hover:text-primaryAccent"
        >
          Book Your Free Discovery Call
        </a>
      </div>
    </section>
  );
};

export default CTA;
