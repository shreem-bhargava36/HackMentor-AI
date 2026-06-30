def calculate_deadline_score(days):

    if days >= 30:
        return 10

    if days >= 14:
        return 8

    if days >= 7:
        return 6

    return 3