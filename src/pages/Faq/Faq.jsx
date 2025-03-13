import React, { useState } from "react";
import "./Faq.scss";
import { faqData } from "./faqData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq">
      <h1>Часто задаваемые вопросы</h1>
      <div className="faq-accordion">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {item.question}
              <span className="faq-toggle">
                {activeIndex === index ? (
                  <FontAwesomeIcon icon={faMinus} />
                ) : (
                  <FontAwesomeIcon icon={faPlus} />
                )}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`faq-answer test-scroll`}
              role="region"
              style={{
                maxHeight: activeIndex === index ? item.maxHeight : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              <div className="faq-answer-content">
                <p>{item.answer}</p>
                {/* <p>Это дополнительный текст для проверки прокрутки.</p>
                <p>И еще один абзац для проверки.</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
