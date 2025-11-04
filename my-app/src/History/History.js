import React, { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("chatHistory");
    setHistory([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📜 Chat History</h2>
      {history.length === 0 ? (
        <p>No chat history available.</p>
      ) : (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            maxHeight: "400px",
            overflowY: "auto",
            marginBottom: "10px",
          }}
        >
          {history.map((msg, idx) => (
            <div
              key={idx}
              style={{
                textAlign: msg.from === "ai" ? "left" : "right",
                margin: "5px 0",
              }}
            >
              <b>{msg.from}:</b> {msg.text}
            </div>
          ))}
        </div>
      )}
      <button onClick={clearHistory}>Clear History</button>
    </div>
  );
}
