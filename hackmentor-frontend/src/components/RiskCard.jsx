import React from "react";

function RiskCard({ risks }) {
  return (
    <div className="card">
      <h2>⚠ Risks</h2>

      <ul>
        {risks.map((risk, index) => (
          <li key={index}>{risk}</li>
        ))}
      </ul>
    </div>
  );
}

export default RiskCard;