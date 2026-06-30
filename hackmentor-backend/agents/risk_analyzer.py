def analyze_risks(team,deadline):

    risks=[]

    if deadline<3:
        risks.append("Very short deadline")

    if team<=2:
        risks.append("Limited development resources")

    if deadline<7:
        risks.append("Limited testing time")

    if not risks:
        risks.append("No major risks detected")

    return risks