import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import styles from "./Desktop8.module.css";

const Desktop8 = () => {
  const [productName, setProductName] = useState("");
  const [purchaseSite, setPurchaseSite] = useState("");
  const [dislike, setDislike] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [sentiment, setSentiment] = useState(null);

  const submitFeedback = async () => {
    const feedback = `Product Name: ${productName}\nPurchase Site: ${purchaseSite}\nDislike: ${dislike}\nSuggestions: ${suggestions}`;

    try {
      const response = await fetch('http://127.0.0.1:5000/feedback', {
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

    // Clear the form
    setProductName("");
    setPurchaseSite("");
    setDislike("");
    setSuggestions("");
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.feedbackBox}>
        <h2>Submit Feedback</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="purchaseSite">Purchase Site:</label>
          <input
            type="text"
            id="purchaseSite"
            value={purchaseSite}
            onChange={(e) => setPurchaseSite(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="dislike">Dislike:</label>
          <input
            type="text"
            id="dislike"
            value={dislike}
            onChange={(e) => setDislike(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="suggestions">Suggestions:</label>
          <input
            type="text"
            id="suggestions"
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
          />
        </div>
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
