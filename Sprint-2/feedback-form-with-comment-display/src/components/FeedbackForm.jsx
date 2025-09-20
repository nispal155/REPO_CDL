import React, { useState } from "react";
import './feedback.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim())
         return;

    const newFeedback = { name, comment };
    setFeedbackList([newFeedback, ...feedbackList]);
    setName('');
    setComment('');
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>

      <form onSubmit={submit} className="feedback-form">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <div className="feedback-list">
        <h3>All Comments:</h3>
        {feedbackList.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          feedbackList.map((feedback, index) => (
            <div key={index} className="feedback-card">
              <strong>{feedback.name}</strong>
              <p>{feedback.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
