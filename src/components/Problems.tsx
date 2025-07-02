import SpotlightCard from "./ui/spotlightCard";

const ProblemCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <div className="bg-bgLight rounded-lg transition-transform">
      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>
        <h3 className="avalon-bold text-xl text-primaryAccent">{title}</h3>
      </div>
      <hr className="my-4 border-gray-600" />
      <p className="text-textMedium">{description}</p>
    </div>
  );
};

const Problems = () => {
  const problems = [
    {
      icon: "⏱️",
      title: "Manual Tasks Overload",
      description: "Skilled teams are buried in repetitive, low-value work instead of focusing on strategic growth."
    },
    {
      icon: "💬",
      title: "Inconsistent Support",
      description: "Maintaining a high-quality, 24/7 customer experience is a constant and expensive challenge."
    },
    {
      icon: "📊",
      title: "Untapped Data Potential",
      description: "You're drowning in data but starved for the actionable insights needed to make smart decisions."
    }
  ];

  return (
    <section id="problems" className="py-20">
      <div className="container mx-auto max-w-7xl px-5 h-full flex items-center flex-col justify-center">
        <h2 className="avalon-bold text-4xl text-center mb-10">Is Your Business Feeling the <span className="dual-underline primary-accent">Strain</span>?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <SpotlightCard key={index} className="custom-spotlight-card">
            <ProblemCard 
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
            />
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
