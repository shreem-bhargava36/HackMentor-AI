def calculate_feasibility(
    skill_score,
    deadline_score,
    innovation_score,
    resource_score
):
    """
    Weighted Feasibility Score (0-10)

    Weights:
    Skill Score      : 30%
    Innovation Score : 30%
    Deadline Score   : 20%
    Resource Score   : 20%
    """

    score = (
        skill_score * 0.30 +
        innovation_score * 0.30 +
        deadline_score * 0.20 +
        resource_score * 0.20
    )

    return round(min(score, 10), 1)