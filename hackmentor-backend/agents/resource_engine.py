def calculate_resource_score(data):

    score = 5

    skills = [s.lower() for s in data.get("skills", [])]

    team = data.get("team_size", 1)

    deadline = data.get("deadline", 1)

    if len(skills) >= 3:
        score += 2

    if team >= 3:
        score += 1

    if deadline >= 5:
        score += 1

    if "python" in skills:
        score += 0.5

    if "react" in skills:
        score += 0.5

    return round(min(score,10),1)