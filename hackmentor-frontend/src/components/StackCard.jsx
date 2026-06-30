import React from "react";

function StackCard({ stack }) {
  return (
    <div className="card">
      <h2>💻 Recommended Tech Stack</h2>

      <div className="stack-box">
        {stack}
      </div>
    </div>
  );
}

export default StackCard;