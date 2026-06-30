import StackCard from "../components/StackCard";
import RiskCard from "../components/RiskCard";
import Roadmap from "../components/Roadmap";
import AIFeedback from "../components/AIFeedback";
import ScoreCards from "../components/ScoreCards";
import React, { useState } from "react";
import JudgeFeedback from "../components/JudgeFeedback";

import Header from "../components/Header";

import ProjectForm from "../components/ProjectForm";

function Dashboard() {

  const [result, setResult] = useState(null);

  return (


    <div className="container">

      <Header />

      <ProjectForm onResult={setResult} />

      {result && (

        <div className="results">
         <ScoreCards result={result} />
         <StackCard stack={result.recommended_stack} />

         <RiskCard risks={result.risks} />

         <Roadmap roadmap={result.roadmap} />

         <AIFeedback feedback={result.ai_feedback} />
         <JudgeFeedback feedback={result.judge_feedback} />

          
          

          <div className="card">

            <h2>🎤 Pitch</h2>

            <p><b>Problem:</b> {result.pitch.problem}</p>

            <p><b>Solution:</b> {result.pitch.solution}</p>

            <ul>

              {result.pitch.features.map((f, i) => (

                <li key={i}>{f}</li>

              ))}

            </ul>

          </div>

          

        </div>

      )}

    </div>

  );

}

export default Dashboard;