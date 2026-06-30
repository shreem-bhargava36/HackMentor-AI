def generate_judge_feedback(data, feasibility, innovation):

    feedback = []

    if innovation >= 8:
        feedback.append(
            "Excellent innovation and originality."
        )
    else:
        feedback.append(
            "Increase the uniqueness of your solution."
        )

    if feasibility >= 8:
        feedback.append(
            "Project is highly achievable within the deadline."
        )
    else:
        feedback.append(
            "Reduce scope to improve execution."
        )

    challenge = data.get("challenge_type", "").lower()

    if challenge == "build for good":
        feedback.append(
            "Strong social impact. Excellent Build for Good alignment."
        )

    if challenge == "kaggle capstone":
        feedback.append(
            "Focus more on dataset quality and evaluation metrics."
        )

    return feedback