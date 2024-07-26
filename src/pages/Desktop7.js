import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import styles from "./Desktop7.module.css";

const Desktop7 = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [preference, setPreference] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const getRecommendation = async () => {
    try {
      const response = await fetch('/recommendation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ age, gender, preference }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setRecommendation(data.recommendation);
    } catch (error) {
      console.error("Error:", error);
      setRecommendation("Failed to fetch recommendation from the server.");
    }
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.recommendationBox}>
        <h2>Get Your Recommendation</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button onClick={getRecommendation} className={styles.submitButton}>
          Get Recommendation
        </button>
        {recommendation && <p className={styles.recommendation}>{recommendation}</p>}
      </div>
    </div>
  );
};

export default Desktop7;
