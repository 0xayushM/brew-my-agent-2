"use client";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 last:mb-0">
      <button
        className="flex justify-between items-center w-full text-left p-5 bg-bgLight rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={`faq-answer-${question}`}
      >
        <span className="font-medium">{question}</span>
        <span className="ml-4">{open ? "-" : "+"}</span>
      </button>
      {open && (
        <div
          id={`faq-answer-${question}`}
          className="p-5 border-t-0 border border-white/10 rounded-b-lg bg-bgLight/50 mt-[-1px]"
        >
          <p className="text-textMedium">{answer}</p>
        </div>
      )}
    </div>
  );
}

const FAQ = () => {
  const faqItems = [
    {
      question: "What kind of AI solutions do you build?",
      answer: "We specialise in full-stack AI agent development — from intelligent chatbots and autonomous agents to backend automations and decision support systems. Whether it's internal tools, customer support bots, or task-specific copilots, we build agents tailored to your needs."
    },
    {
      question: "What is the typical cost of a project?",
      answer: "Our blended team rate is between $25–$30/hour for all five members. Projects typically start from $1,500–$2,500 and are delivered within 2–3 weeks, depending on the scope. We provide clear deliverables, transparent timelines, and flexible engagement options."
    },
    {
      question: "How long does it take to deliver an AI solution?",
      answer: "We deliver MVPs in as little as 2 to 3 weeks. Timelines vary with complexity, but we work in agile sprints with regular updates. Our focus is on speed, quality, and shipping something valuable from week one."
    },
    {
      question: "Do you build complete products or just AI models?",
      answer: "We’re a cross-functional team of five 23-year-old specialists — backend engineers, ML experts, AIOps engineers, and UI/UX designers — working together to build end-to-end products. That means AI + APIs, dashboards, user auth, design systems, and even custom third-party integrations. You bring the idea, we build the full stack."
    },
    {
      question: "Can you integrate with our existing tools or Agents?",
      answer: "Yes — we specialise in custom integrations. Whether it’s email pipelines, internal APIs, Slack, Notion, Zoho, or CRMs, we make sure our agents work within your ecosystem, not around it."
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
