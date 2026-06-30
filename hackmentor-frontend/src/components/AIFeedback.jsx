import React from "react";

function AIFeedback({ feedback }) {
  return (
    <div className="card">
      <h2>🤖 AI Mentor Feedback</h2>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "inherit",
          textAlign: "left"
          
        }}
      >
        {feedback}
      </pre>
    </div>
  );
}

export default AIFeedback;