import Image from 'next/image';
import Link from 'next/link';
import SpotlightCard from './ui/spotlightCard';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  return (
    <div className="bg-bgLight rounded-lg hover:border-primaryAccent/50 h-full flex flex-col">
      <div className="text-primaryAccent mb-0">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primaryAccent/10">
          <span className="text-3xl" dangerouslySetInnerHTML={{ __html: icon }}></span>
        </div>
      </div>
      <h3 className="avalon-bold text-xl mb-0">{title}</h3>
      <hr className="my-4 border-gray-600" />
      <p className="text-textMedium mb-6">{description}</p>
      <div className="mb-6 flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-primaryAccent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span className="text-textMedium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* <Link 
        href="#cta" 
        className="inline-block text-center px-6 py-2 rounded-full border border-primaryAccent text-primaryAccent hover:bg-primaryAccent hover:text-bgDark transition-all"
      >
        Learn More
      </Link> */}
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Custom AI Agent Development",
      description: "We build intelligent AI agents tailored to your specific business needs and workflows.",
      icon: "🤖",
      features: [
        "Personalized AI assistants for your team",
        "Process automation with intelligent decision-making",
        "Integration with your existing tools and systems",
        "Continuous learning and improvement"
      ]
    },
    {
      title: "AI-Powered MVP Development",
      description: "Launch your product faster with our AI-accelerated development approach.",
      icon: "🚀",
      features: [
        "Rapid prototyping and iteration",
        "AI-enhanced code generation",
        "Scalable architecture from day one",
        "Focus on core features that matter"
      ]
    },
    {
      title: "AI Strategy Consulting",
      description: "Get expert guidance on how to leverage AI to transform your business operations.",
      icon: "💡",
      features: [
        "AI readiness assessment",
        "Opportunity identification workshop",
        "Implementation roadmap creation",
        "ROI analysis and business case development"
      ]
    },
    {
      title: "AI Integration Services",
      description: "Seamlessly connect AI capabilities with your existing software ecosystem.",
      icon: "🔄",
      features: [
        "API development and integration",
        "Data pipeline setup for AI models",
        "Legacy system modernization",
        "Custom middleware development"
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="avalon-bold text-4xl text-center mb-4">Our Services</h2>
        <p className="text-textMedium text-center max-w-4xl mx-auto mb-12">
          We offer comprehensive <span className="needle-underline primary-accent">AI solutions</span> to help businesses of all sizes harness the power of artificial intelligence
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <SpotlightCard key={index} className="custom-spotlight-card">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
