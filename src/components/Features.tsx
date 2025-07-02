import Image from 'next/image';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
  reversed?: boolean;
}

const Feature = ({ title, description, icon, reversed = false }: FeatureProps) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16 last:mb-0`}>
      <div className="w-full md:w-1/2">
        <div className="bg-bgLight rounded-lg p-8 border border-white/10 h-full">
          <div className="text-primaryAccent mb-6 text-5xl">
            <span dangerouslySetInnerHTML={{ __html: icon }}></span>
          </div>
          <h3 className="font-heading text-2xl mb-4">{title}</h3>
          <p className="text-textMedium">{description}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative h-64 md:h-80">
        <div className="absolute inset-0 bg-gradient-to-r from-primaryAccent/20 to-transparent rounded-lg"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primaryAccent/30 rounded-full filter blur-xl"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-8xl">{icon}</div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Contextual Understanding",
      description: "Our AI agents don't just respond to commands—they understand context, remember previous interactions, and adapt their responses accordingly. This creates a more natural and efficient experience for your team and customers.",
      icon: "🧠"
    },
    {
      title: "Seamless Integration",
      description: "We build agents that integrate with your existing tools and workflows. Whether it's Slack, Microsoft Teams, your CRM, or custom internal systems, our agents become a natural extension of your tech ecosystem.",
      icon: "🔄"
    },
    {
      title: "Continuous Learning",
      description: "Our AI agents improve over time by learning from interactions and feedback. They adapt to your specific business language, processes, and preferences to become increasingly valuable team members.",
      icon: "📈"
    },
    {
      title: "Human-in-the-Loop Design",
      description: "We believe in augmenting human capabilities, not replacing them. Our agents are designed to handle routine tasks independently but know when to involve human team members for complex decisions or sensitive situations.",
      icon: "👥"
    }
  ];

  return (
    <section id="features" className="py-20 bg-bgDark">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="font-heading text-4xl text-center mb-4">Key Features of Our AI Agents</h2>
        <p className="text-textMedium text-center max-w-2xl mx-auto mb-16">
          What makes our custom AI agents stand out from generic solutions
        </p>
        
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
