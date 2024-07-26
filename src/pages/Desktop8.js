import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import styles from "./Desktop8.module.css";

const Desktop8 = () => {
  const [feedback, setFeedback] = useState("");
  const [sentiment, setSentiment] = useState(null);

  const submitFeedback = async () => {
    try {
      const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSentiment(data.sentiment);
    } catch (error) {
      console.error("Error:", error);
      setSentiment("Failed to fetch sentiment from the server.");
    }

    setFeedback("");
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.feedbackBox}>
        <h2>Submit Feedback</h2>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
          className={styles.textarea}
        />
        <button onClick={submitFeedback} className={styles.submitButton}>
          Submit
        </button>
        {sentiment && typeof sentiment === 'object' && (
          <div className={styles.sentiment}>
            <h3>Sentiment Analysis</h3>
            <p>Positive: {sentiment.pos ? sentiment.pos.toFixed(4) : '0'}</p>
            <p>Neutral: {sentiment.neu ? sentiment.neu.toFixed(4) : '0'}</p>
            <p>Negative: {sentiment.neg ? sentiment.neg.toFixed(4) : '0'}</p>
            <p>Compound: {sentiment.compound ? sentiment.compound.toFixed(4) : '0'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Desktop8;
