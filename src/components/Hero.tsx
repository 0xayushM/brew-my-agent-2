import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="pt-44 pb-32 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] max-w-[800px] max-h-[800px] rounded-full bg-primaryAccent/20 bg-radial-gradient filter blur-[80px] z-[-1] animate-pulse-slow">
        {/* Background animation container */}
      </div>
      <div className="container mx-auto max-w-7xl px-5">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mx-auto mb-5">
          Your Best Employee is an AI Agent. We'll Brew One for You.
        </h1>
        <p className="text-textMedium text-lg max-w-2xl mx-auto mb-8">
          We provide end-to-end AI consulting and implementation, creating bespoke AI agents that integrate seamlessly into your operations to drive growth and cut costs.
        </p>
        <Link 
          href="#cta" 
          className="inline-block px-7 py-3 rounded-full bg-primaryAccent text-bgDark font-bold border-2 border-primaryAccent transition-all hover:bg-transparent hover:text-primaryAccent"
        >
          Schedule Your Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default Hero;
