import React from "react";
import CountUp from "react-countup";

import {
  FaChartLine,
  FaLightbulb,
  FaLaptopCode,
  FaDatabase,
  FaClock,
  FaLayerGroup,
  FaExclamationTriangle,
} from "react-icons/fa";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function ScoreCards({ result }) {
  if (!result) return null;

  const cards = [
    {
      title: "Feasibility",
      value: result.feasibility_score,
      icon: <FaChartLine color="#22c55e" size={22} />,
      color: "#22c55e",
    },
    {
      title: "Innovation",
      value: result.innovation_score,
      icon: <FaLightbulb color="#facc15" size={22} />,
      color: "#facc15",
    },
    {
      title: "Skill",
      value: result.skill_score,
      icon: <FaLaptopCode color="#3b82f6" size={22} />,
      color: "#3b82f6",
    },
    {
      title: "Resources",
      value: result.resource_score,
      icon: <FaDatabase color="#a855f7" size={22} />,
      color: "#a855f7",
    },
    {
      title: "Deadline",
      value: result.deadline_score,
      icon: <FaClock color="#fb923c" size={22} />,
      color: "#fb923c",
    },
  ];

  return (
    <div className="score-container">
      {cards.map((card, index) => (
        <div className="score-card" key={index}>

          <div
            style={{
              width: 150,
              height: 110,
              margin: "15px auto",
            }}
          >
            <CircularProgressbar
              value={card.value * 10}
              text=""
              styles={buildStyles({
                textColor: "#fff",
                pathColor: card.color,
                trailColor: "#334155",
              })}
            />
          </div>

          <h1>
            <CountUp
              start={0}
              end={card.value}
              duration={2}
              decimals={1}
            />
            /10
          </h1>

          <h3>
            {card.icon}
            <span style={{ marginLeft: 8 }}>{card.title}</span>
          </h3>

        </div>
      ))}

      <div className="score-card">
        <FaLayerGroup
          size={45}
          color="#06b6d4"
        />

        <h3>Tech Stack</h3>

        <h4>{result.recommended_stack}</h4>
      </div>

      <div className="score-card">
        <FaExclamationTriangle
          size={45}
          color="#ef4444"
        />

        <h3>Risks</h3>

        <h1>{result.risks.length}</h1>

        <p>
          {result.risks.length === 0
            ? "No Risks"
            : `${result.risks.length} Issues Found`}
        </p>
      </div>
    </div>
  );
}

export default ScoreCards;