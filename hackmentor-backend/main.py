from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from engine.decision_engine import analyze_project

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "HackMentor AI Backend Running"}

@app.post("/analyze")
def analyze(data: dict):
    return analyze_project(data)