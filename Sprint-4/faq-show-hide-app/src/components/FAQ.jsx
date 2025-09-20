import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <h3 onClick={() => setOpen(!open)}>
        {question} {open ? "▲" : "▼"}
      </h3>
      {open && <p>{answer}</p>}
    </div>
  );
};

export default function FAQ() {
  const data = [
    { question: "What is React?", answer: "React is a JavaScript library for building UIs." },
    { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript used with React." },
    { question: "What is a Hook?", answer: "Hooks let you use state and other React features without writing a class." }
  ];

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      {data.map((item, idx) => (
        <FAQItem key={idx} {...item} />
      ))}
    </div>
  );
}
