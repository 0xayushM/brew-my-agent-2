import AnimatedButton from './ui/AnimatedButton';

const Hero = () => {
  return (
    <section id="hero" className="h-screen text-center relative">
      <div className="container mx-auto max-w-7xl px-5 h-full flex items-center flex-col justify-center">
        <h1 className="avalon-bold text-4xl md:text-5xl lg:text-6xl leading-tight max-w-2xl md:max-w-4xl mx-auto mb-5">
          Your Best Employee is an <span className="needle-underline primary-accent uppercase">AI Agent</span>. We'll <span className="needle-underline primary-accent uppercase">brew</span> one for You.
        </h1>
        <p className="text-textMedium text-lg max-w-2xl mx-auto mb-8">
          We provide end-to-end AI consulting and implementation, creating bespoke AI agents that integrate seamlessly into your operations to drive growth and cut costs.
        </p>
        <AnimatedButton 
          href="#cta" 
          className="inline-block px-7 py-3 rounded-full bg-primaryAccent text-bgDark font-bold border-2 border-primaryAccent transition-all hover:bg-transparent hover:text-primaryAccent"
        >
          Schedule Your Free Consultation
        </AnimatedButton>
      </div>
    </section>
  );
};

export default Hero;
