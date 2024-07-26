import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import styles from "./Desktop11.module.css";

const Desktop11 = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botMessage = { sender: "bot", text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = { sender: "bot", text: "Failed to fetch response from the server." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setInput("");
  };

  return (
    <div className={styles.desktop2}>
      <NavBar />
      
      <div className={styles.chatbox}>
        <div className={styles.messages}>
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "bot" ? styles.botMessage : styles.userMessage}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage} className={styles.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Desktop11;
