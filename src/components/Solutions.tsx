import SpotlightCard from "./ui/spotlightCard";

const SolutionCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="bg-bgLight rounded-lg transition-transform">
      <h3 className="avalon-bold text-xl text-primaryAccent mb-2.5">{title}</h3>
      <hr className="my-4 border-gray-600" />
      <p className="text-textMedium">{description}</p>
    </div>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "Customer Service Agent",
      description: "An intelligent bot to automate up to 80% of support queries, providing instant, 24/7 responses and improving customer satisfaction."
    },
    {
      title: "Internal Operations Agent",
      description: "Streamlines workflows like HR onboarding, IT ticket routing, and expense approvals, freeing up your team for high-impact work."
    },
    {
      title: "Sales Assistant Agent",
      description: "Never miss a lead. This agent qualifies inbound leads from your website and schedules discovery calls for your sales team around the clock."
    }
  ];

  return (
    <section id="solutions" className="py-40 bg-bgLight">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="avalon-bold text-4xl text-center mb-10">Our Custom-Brewed <span className="dual-underline primary-accent">AI Solutions</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SpotlightCard key={index} className="custom-spotlight-card">
              <SolutionCard
                title={solution.title}
                description={solution.description}
              />
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
