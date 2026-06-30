import React from "react";

function Roadmap({ roadmap }) {
  return (
    <div className="card">
      <h2>🗺 Development Roadmap</h2>

      <ol>
        {roadmap.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default Roadmap;