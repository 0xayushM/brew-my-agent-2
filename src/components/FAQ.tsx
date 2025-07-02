interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center w-full text-left p-5 bg-bgLight rounded-lg border border-white/10">
        <span className="font-medium">{question}</span>
      </div>
      <div className="p-5 border-t-0 border border-white/10 rounded-b-lg bg-bgLight/50 mt-[-1px]">
        <p className="text-textMedium">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "How long does it take to build an MVP?",
      answer: "Our MVP development timeline ranges from 3-4 weeks depending on the package you choose. The Starter Spark package delivers in 3 weeks, while the Momentum Engine package takes 4 weeks to accommodate more complex features and AI capabilities."
    },
    {
      question: "What technologies do you use to build MVPs?",
      answer: "We use modern, scalable tech stacks tailored to your specific needs. For web applications, we typically use React/Next.js, Node.js, and various cloud services. For AI components, we leverage OpenAI, Langchain, and other cutting-edge frameworks to ensure your solution is built on reliable, future-proof technology."
    },
    {
      question: "How does AI-powered development help my project?",
      answer: "Our AI-powered development approach accelerates the building process while maintaining high quality. We use AI to automate repetitive tasks, generate boilerplate code, and assist with testing. This allows our human developers to focus on the creative and strategic aspects of your project, resulting in faster delivery and more innovative solutions."
    },
    {
      question: "What is included in the MVP packages?",
      answer: "Our packages include requirements gathering, design, development, testing, and deployment of your MVP. You'll receive a fully functional product with the core features needed to validate your concept, along with clean, documented code that can be scaled as your business grows."
    },
    {
      question: "How do you keep communication transparent during the project?",
      answer: "We maintain transparent communication through regular check-ins, progress updates, and a dedicated project management tool where you can track development in real-time. You'll have direct access to our team throughout the project, ensuring you're always informed about the status and any decisions that need to be made."
    },
    {
      question: "What makes you different from other MVP development agencies?",
      answer: "Our unique combination of AI expertise and traditional development skills sets us apart. We don't just build software; we create intelligent solutions that can learn and adapt. Additionally, our fixed-scope, predictable pricing model eliminates budget surprises, and our focus on scalable architecture ensures your MVP can grow with your business."
    }
  ];

    return (
    <section id="faq" className="py-20 bg-bgDark">
      <div className="container mx-auto max-w-7xl px-5">
        <h2 className="font-heading text-4xl text-center mb-4">FAQ</h2>
        <p className="text-textMedium text-center max-w-2xl mx-auto mb-12">
          Answers to your most common questions about building your AI MVP
        </p>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
