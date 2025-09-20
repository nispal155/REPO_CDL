import React, { useState, useEffect } from "react";

const questions = [
  {
    q: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook"
  },
  {
    q: "What hook is used for side effects?",
    options: ["useState", "useEffect", "useContext", "useMemo"],
    answer: "useEffect"
  },
  {
    q: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON Xtra",
      "Java Source eXtension"
    ],
    answer: "JavaScript XML"
  }
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setSelected(null); // reseting the  option on new question using use effect
  }, [index]);
// handles answer and store the score if the answer is correct
  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[index].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="quiz-container">
        <h1>Quiz Finished 🎉</h1>
        <p>Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>Q{index + 1}: {questions[index].q}</h2>
      <div className="options">
        {questions[index].options.map((opt, i) => (
          <button
            key={i}
            className={`option-btn ${selected === opt ? "selected" : ""}`}
            onClick={() => handleAnswer(opt)}
            disabled={!!selected}
          >
            {opt}
          </button>
        ))}
      </div>
      {selected && <button onClick={nextQuestion}>Next ➡️</button>}
    </div>
  );
}
