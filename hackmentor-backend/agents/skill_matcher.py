def calculate_skill_score(skills):

    skills = [s.lower() for s in skills]

    score = 0

    weights = {
        "python":4,
        "react":3,
        "javascript":2,
        "sql":1,
        "fastapi":2,
        "docker":2,
        "aws":2,
        "tensorflow":3,
        "pytorch":3,
        "opencv":2
    }

    for skill in skills:
        score += weights.get(skill,0)

    return min(score,10)


def recommend_stack(skills):

    skills=[s.lower() for s in skills]

    if "python" in skills and "react" in skills:
        return "FastAPI + React + PostgreSQL"

    if "python" in skills:
        return "FastAPI + SQLite"

    if "javascript" in skills:
        return "MERN Stack"

    return "Python + FastAPI"