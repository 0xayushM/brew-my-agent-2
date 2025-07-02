import SpotlightCard from "./ui/spotlightCard";

interface ResultItemProps {
  metric: string;
  label: string;
}

const ResultItem = ({ metric, label }: ResultItemProps) => {
  return (
    <div className="text-center">
      <div className="text-5xl avalon-bold primary-accent">{metric}</div>
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
    <section id="case-study" className="py-20">
      <div className="md:container max-w-7xl md:px-5">
        <h2 className="avalon-bold text-3xl md:text-4xl text-center mb-10">Real <span className="dual-underline primary-accent">Results</span>, Not Just Recommendations</h2>
        <SpotlightCard>
        <div className="rounded-lg md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="avalon-bold text-xl text-primaryAccent mb-2.5">Case Study: SaaS Co. Support Automation</h3>
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
        </SpotlightCard>
      </div>
    </section>
  );
};

export default CaseStudy;
