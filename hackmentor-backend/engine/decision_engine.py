from agents.resource_engine import calculate_resource_score
from ai.gemini_service import generate_ai_feedback
from agents.skill_matcher import recommend_stack, calculate_skill_score
from agents.feasibility import calculate_feasibility
from agents.deadline_score import calculate_deadline_score
from agents.risk_analyzer import analyze_risks
from agents.roadmap import generate_roadmap
from agents.pitch import generate_pitch
from agents.innovation_engine import calculate_innovation_score
from agents.judge_feedback import generate_judge_feedback

def analyze_project(data):

    skills = data.get("skills", [])
    deadline = data.get("deadline", 7)
    team = data.get("team_size", 1)

    skill_score = calculate_skill_score(skills)

    deadline_score = calculate_deadline_score(deadline)
    innovation_score = calculate_innovation_score(data)
    resource_score = calculate_resource_score(data)
    feasibility = calculate_feasibility(
    skill_score,
    deadline_score,
    innovation_score,
    resource_score
)
    stack = recommend_stack(skills)

    risks = analyze_risks(team, deadline)

    roadmap = generate_roadmap()

    pitch = generate_pitch()
    ai_feedback = generate_ai_feedback(data)
    judge_feedback = generate_judge_feedback(
    data,
    feasibility,
    innovation_score
)

    return {
        "recommended_stack": stack,
        "innovation_score": innovation_score,
        "feasibility_score": feasibility,
        "skill_score": skill_score,
        "deadline_score": deadline_score,
        "resource_score": resource_score,
        "risks": risks,
        "roadmap": roadmap,
        "pitch": pitch,
        "ai_feedback": ai_feedback,
        "judge_feedback": judge_feedback,
    }