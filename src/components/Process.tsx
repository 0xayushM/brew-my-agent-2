interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex items-start mb-10 last:mb-0">
      <div className="text-5xl font-heading text-primaryAccent leading-none mr-8">{number}</div>
      <div>
        <h3 className="font-heading text-xl text-primaryAccent mb-2.5">{title}</h3>
        <p className="text-textMedium">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Recipe",
      description: "We dive deep into your workflows to understand your unique challenges and goals, formulating a detailed AI strategy roadmap."
    },
    {
      number: "02",
      title: "Development & Brewing",
      description: "Our expert team builds and trains your custom AI agent using an agile approach, with regular demos to ensure perfect alignment."
    },
    {
      number: "03",
      title: "Integration & Serving",
      description: "We seamlessly deploy your agent into your existing systems (CRM, Slack, etc.) and provide comprehensive training for your team."
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="font-heading text-4xl text-center mb-10">Our Brewing Process</h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
