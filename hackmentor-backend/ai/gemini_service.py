import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_ai_feedback(project):

    prompt = f"""
You are an expert senior hackathon judge from  Google, SIH, Microsoft, Kaggle, Build for Good, SIH, IBM, Devpost and major AI competitions.

Analyze the following project.

Project Idea:
{project.get('idea')}

Problem:
{project.get('problem')}

Challenge:
{project.get('challenge_type')}

Skills:
{project.get('skills')}

Team Size:
{project.get('team_size')}

Deadline:
{project.get('deadline')}

Provide your answer using these exact headings:

## Overall Rating (out of 10)

## Strengths

## Weaknesses

## Innovation Suggestions

## Technical Improvements

## Dataset Suggestions

## Deployment Suggestions

## Business Potential

## Judge Verdict

Be practical.
Be specific.
Do NOT repeat the user's input.
Keep the response under 400 words.
"""

    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Gemini Error: {e}"