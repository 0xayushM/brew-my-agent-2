const ProblemCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <div className="bg-bgLight p-8 rounded-lg border border-white/10 transition-transform hover:-translate-y-2.5 hover:shadow-2xl">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-heading text-xl text-primaryAccent mb-2.5">{title}</h3>
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
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="font-heading text-4xl text-center mb-10">Is Your Business Feeling the Strain?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard 
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
