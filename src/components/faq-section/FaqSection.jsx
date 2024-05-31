import React, { useState } from "react";
import { questions } from "./Question";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const togglebutton = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      {questions.map((question, index) => {
        return (
          <>
            <div onClick={()=>togglebutton(index)}>
              <span>{question.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div >{question.answer}</div>
            )}
          </>
        );
      })}
    </>
  );
};

export default FaqSection;
