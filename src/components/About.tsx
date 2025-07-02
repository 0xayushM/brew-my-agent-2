import Link from 'next/link';
import AnimatedButton from './ui/AnimatedButton';
import SpotlightCard from './ui/spotlightCard';

interface FeatureProps {
  title: string;
  description: string;
  icon: string; // using emoji for simplicity
}

const About = () => {
  const features: FeatureProps[] = [
    {
      title: 'Scalable Stack',
      description: "You don't need to rebuild your codebase while building for production. We use a stripped down version of production codebases that you can build on top of.",
      icon: '🖥️',
    },
    {
      title: 'Prebuilt AI Modules',
      description: "We've perfected our plug-and-play AI modules over multiple projects allowing us to deliver cutting-edge features in a fraction of the time.",
      icon: '📦',
    },
    {
      title: 'AI-Powered Development',
      description: 'We leverage cutting-edge AI tools to accelerate the development process and enhance the quality of your MVP.',
      icon: '⚡',
    },
    {
      title: 'Full Transparency, No Surprises',
      description: 'With upfront pricing and clear timelines, we ensure transparency, eliminating hidden costs and unexpected hurdles.',
      icon: '🔍',
    },
  ];

  return (
    <section id="about" className="py-20 bg-bgDark relative">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Section heading */}
        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primaryAccent/20 text-primaryAccent text-sm font-semibold">
          About Us
        </span>
        <h2 className="avalon-bold text-4xl mb-12 max-w-3xl">
          Shaped by <span className="needle-underline primary-accent">12+ years</span> of designing, building, learning, and experimenting
        </h2>

        {/* Grid layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Primary card */}
          <SpotlightCard className="bg-bgLight rounded-2xl p-8 border border-white/10 flex flex-col justify-between lg:row-span-2">
            <div>
              <h3 className="avalon-bold text-2xl mb-4">We make working with us easy</h3>
              <hr className="my-4 border-gray-600" />
              <p className="text-textMedium mb-8">
                Enjoy peace of mind with our risk-free model – only pay if you're completely satisfied with the results.<br />
                <br />
                Your success is our priority.
              </p>
            </div>
            <AnimatedButton
              href="#cta"
              className="inline-block text-center px-7 py-3 rounded-full bg-primaryAccent text-bgDark font-bold border-2 border-primaryAccent transition-all hover:bg-transparent hover:text-primaryAccent"
            >
              Book a call
            </AnimatedButton>
          </SpotlightCard>

          {/* Feature cards */}
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="bg-bgLight rounded-2xl p-8 border border-white/10 transition-all hover:border-primaryAccent/50"
            >
              <div className="mb-6 text-primaryAccent text-4xl">
                <span dangerouslySetInnerHTML={{ __html: feature.icon }}></span>
              </div>
              <h3 className="avalon-bold text-xl mb-3">{feature.title}</h3>
              <hr className="my-4 border-gray-600" />
              <p className="text-textMedium">{feature.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
