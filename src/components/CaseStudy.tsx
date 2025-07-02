interface ResultItemProps {
  metric: string;
  label: string;
}

const ResultItem = ({ metric, label }: ResultItemProps) => {
  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-primaryAccent font-heading">{metric}</div>
      <div className="text-textMedium">{label}</div>
    </div>
  );
};

const CaseStudy = () => {
  const results = [
    { metric: "75%", label: "Ticket Deflection" },
    { metric: "98%", label: "Reduction in First Response Time" },
    { metric: "$120k", label: "Annual Savings" },
    { metric: "+25", label: "NPS Points" }
  ];

  return (
    <section id="case-study" className="py-20 bg-bgLight">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="font-heading text-4xl text-center mb-10">Real Results, Not Just Recommendations</h2>
        <div className="bg-bgLight rounded-lg p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-white/10">
          <div>
            <h3 className="font-heading text-xl text-primaryAccent mb-2.5">Case Study: SaaS Co. Support Automation</h3>
            <p className="text-textMedium mb-5">
              A mid-sized SaaS company was struggling with high support costs and slow response times during off-peak hours. Their team was burnt out handling repetitive Tier-1 questions.
            </p>
            <p className="text-textMedium">
              We brewed a custom support agent, integrated with their helpdesk and knowledge base, to handle common queries and escalate complex issues.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5">
              {results.map((result, index) => (
                <ResultItem 
                  key={index}
                  metric={result.metric}
                  label={result.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
