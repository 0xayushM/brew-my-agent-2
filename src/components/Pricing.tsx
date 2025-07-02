import Link from 'next/link';

interface PricingFeatureProps {
  text: string;
}

const PricingFeature = ({ text }: PricingFeatureProps) => {
  return (
    <div className="flex items-center mb-3">
      <svg className="w-5 h-5 text-primaryAccent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
      </svg>
      <span className="text-textMedium">{text}</span>
    </div>
  );
};

interface PricingPlanProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan = ({ title, price, duration, description, features, isPopular = false }: PricingPlanProps) => {
  return (
    <div className={`bg-bgLight rounded-lg p-8 border ${isPopular ? 'border-primaryAccent' : 'border-white/10'} relative h-full flex flex-col`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primaryAccent text-bgDark px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}
      <h3 className="font-heading text-2xl mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-textMedium"> {duration}</span>
      </div>
      <p className="text-textMedium mb-6">{description}</p>
      <div className="mb-8 flex-grow">
        {features.map((feature, index) => (
          <PricingFeature key={index} text={feature} />
        ))}
      </div>
      <Link 
        href="#cta" 
        className={`inline-block w-full text-center px-6 py-3 rounded-full font-bold border-2 transition-all ${
          isPopular 
            ? 'bg-primaryAccent text-bgDark border-primaryAccent hover:bg-transparent hover:text-primaryAccent' 
            : 'border-white/20 hover:border-primaryAccent hover:text-primaryAccent'
        }`}
      >
        Book a call
      </Link>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "STARTER SPARK",
      price: "$2999",
      duration: "in 3 weeks",
      description: "A quick and efficient way to get your MVP off the ground. Perfect for testing ideas with minimal investment.",
      features: [
        "Delivery in 3 Weeks",
        "Ideal for tools, scripts, and prototypes",
        "Core features only",
        "Fixed scope, predictable pricing",
        "Scalable codebase"
      ]
    },
    {
      title: "MOMENTUM ENGINE",
      price: "$3999",
      duration: "in 4 weeks",
      description: "A balanced plan for startups looking to build a robust MVP with essential features and AI capabilities.",
      features: [
        "Delivery in 4 Weeks",
        "Great for Web Apps & AI heavy features",
        "Enhanced feature set",
        "Fixed scope, predictable pricing",
        "Scalable codebase"
      ],
      isPopular: true
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="font-heading text-4xl text-center mb-4">Our Pricing</h2>
        <p className="text-textMedium text-center max-w-2xl mx-auto mb-12">
          Flexible packages tailored to your project's stage and goals
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              price={plan.price}
              duration={plan.duration}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
