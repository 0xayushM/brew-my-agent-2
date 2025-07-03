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
    { metric: "95%", label: "Reduction in Man Hours" },
    { metric: "$10k", label: "Annual Savings" },
    { metric: "100%", label: "Automated Year-End Workflow" },
    { metric: "+30", label: "Client NPS Points" }
  ];

  return (
    <section id="case-study" className="py-20">
      <div className="md:container max-w-7xl md:px-5">
        <h2 className="avalon-bold text-3xl md:text-4xl text-center mb-10">Real <span className="dual-underline primary-accent">Results</span>, Not Just Recommendations</h2>
        <SpotlightCard>
        <div className="rounded-lg md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="avalon-bold text-xl text-primaryAccent mb-2.5">Case Study: Accounting Co. Year-End Automation</h3>
            <p className="text-textMedium mb-5">
              A leading accounting firm was struggling with overwhelming workloads and tight deadlines during year-end accounts preparation. Their team spent countless hours on repetitive, manual processes, leading to stress, overtime, and delayed client deliverables.
            </p>
            <p className="text-textMedium">
              We designed and deployed a suite of intelligent agents to automate the entire year-end accounts workflow. From data collection and reconciliation to report generation and compliance checks, our solution reduced manual effort by 95%, freeing up staff for higher-value tasks and ensuring faster, more accurate year-end closures.
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
