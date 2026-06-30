import React, { useState } from "react";
import { analyzeProject } from "../services/api";

function ProjectForm({ onResult }) {

  const [loading, setLoading] = useState(false);

  const [skills, setSkills] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [deadline, setDeadline] = useState("");

  const [idea, setIdea] = useState("");

  const [problem, setProblem] = useState("");

  const [challengeType, setChallengeType] = useState("");

  const handleSubmit = async () => {
  setLoading(true);

  try {
    const data = await analyzeProject({
      idea,
      problem,
      challenge_type: challengeType,
      skills: skills.split(",").map((s) => s.trim()),
      team_size: Number(teamSize),
      deadline: Number(deadline),
    });

    onResult(data);
  } catch (error) {
    console.error(error);
    alert("Backend not running");
  } finally {
    setLoading(false);
  }
};

  return (

    <>

      <textarea

        placeholder="Problem Statement"

        value={problem}

        onChange={(e) => setProblem(e.target.value)}

        rows="4"

      />

      <br /><br />

      <input

        type="text"

        placeholder="Project Idea"

        value={idea}

        onChange={(e) => setIdea(e.target.value)}

      />

      <br /><br />

      <select

        value={challengeType}

        onChange={(e) => setChallengeType(e.target.value)}

      >

        <option value="">Select Challenge</option>

        <option>Hackathon</option>
        <option>Kaggle Capstone</option>
        <option>Build for Good</option>
        <option>SIH</option>
        <option>Startup</option>
        <option>Research</option>
        <option>Open Innovation</option>

      </select>

      <br /><br />

      <input

        type="text"

        placeholder="Skills (Python, React)"

        value={skills}

        onChange={(e) => setSkills(e.target.value)}

      />

      <br /><br />

      <input

        type="number"

        placeholder="Team Size"

        value={teamSize}

        onChange={(e) => setTeamSize(e.target.value)}

      />

      <br /><br />

      <input

        type="number"

        placeholder="Deadline"

        value={deadline}

        onChange={(e) => setDeadline(e.target.value)}

      />

      <br /><br />

      <button onClick={handleSubmit} disabled={loading}>
    {loading ? "Analyzing..." : "Analyze Project"}
</button>

    </>

  );

}

export default ProjectForm;