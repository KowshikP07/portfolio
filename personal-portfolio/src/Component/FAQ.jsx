import { useState } from "react";
import './faq.css'
const faqData = [
  {
    question: "Who are you, really?",
    answer:
      "A developer who enjoys building things on the internet and understanding how systems work."
  },
  {
    question: "What do you currently do?",
    answer:
      "I’m a CSE student focused on web development and preparing for placements."
  },
  {
    question: "Frontend or backend?",
    answer:
      "Frontend by interest, backend by responsibility. Full-stack by ambition."
  },
  {
    question: "Why does this portfolio feel different?",
    answer:
      "Because it’s not just a resume — it’s a reflection of how I think and build."
  },
  {
    question: "Are you open to opportunities?",
    answer:
      "Yes. I’m always open to learning, collaborating, and building meaningful things."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ</h2>

      <div className="faq-container">
        {faqData.map((item, index) => {return (
          <div className="faq-item" key={index}>
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        )})}
      </div>
    </section>
  );
}
