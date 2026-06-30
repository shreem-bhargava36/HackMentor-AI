def calculate_innovation_score(data):

    score = 5

    idea = data.get("idea", "").lower()
    challenge = data.get("challenge_type", "").lower()

    keywords = [
        "ai",
        "llm",
        "agent",
        "rag",
        "health",
        "education",
        "climate",
        "agriculture",
        "sustainability",
        "accessibility",
        "research"
    ]

    for word in keywords:
        if word in idea:
            score += 0.4

    if challenge == "build for good":
        score += 1

    if challenge == "research":
        score += 0.5

    return round(min(score,10),1)