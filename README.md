# 🚀 HackMentor AI

> AI-Powered Innovation Planning & Execution Coach for Hackathons

HackMentor AI is an intelligent assistant that helps students, developers, and hackathon teams transform ideas into executable projects. It analyzes project feasibility, recommends technology stacks, identifies risks, generates development roadmaps, provides AI mentor feedback, and prepares hackathon-ready pitches.

---

## ✨ Features

- 📊 Project Feasibility Analysis
- 🧠 Innovation Score
- 💻 Skill Assessment
- 📦 Resource Analysis
- ⏰ Deadline Evaluation
- 🛠 Tech Stack Recommendation
- ⚠ Risk Analysis
- 🗺 Automatic Development Roadmap
- 🤖 AI Mentor Feedback (Google Gemini)
- 🏆 Judge Feedback
- 🎤 Auto Pitch Generator

---

## 🖥 Demo

### User provides:

- Project Idea
- Problem Statement
- Challenge Type
- Skills
- Team Size
- Deadline

### HackMentor AI generates:

- Feasibility Score
- Innovation Score
- Skill Score
- Resource Score
- Deadline Score
- Recommended Tech Stack
- Risks
- Development Roadmap
- AI Mentor Feedback
- Judge Feedback
- Pitch for Presentation

---

# 🏗 Project Architecture

```
Frontend (React)
        │
        ▼
 FastAPI Backend
        │
        ▼
 Decision Engine
        │
 ├── Skill Matcher
 ├── Innovation Engine
 ├── Resource Engine
 ├── Deadline Engine
 ├── Risk Analyzer
 ├── Roadmap Generator
 ├── Pitch Generator
 └── Gemini AI Feedback
```

---

# ⚙ Tech Stack

### Frontend

- React.js
- CSS3
- React Icons
- React CountUp
- React Circular Progressbar

### Backend

- Python
- FastAPI
- Uvicorn

### AI

- Google Gemini API
- google-generativeai

---

# 📁 Project Structure

```
HackMentor-AI

├── hackmentor-backend
│   ├── agents
│   ├── ai
│   ├── engine
│   ├── models
│   ├── utils
│   ├── main.py
│   └── requirements.txt
│
├── hackmentor-frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/shreem-bhargava36/HackMentor-AI.git

cd HackMentor-AI
```

---

## Backend Setup

```bash
cd hackmentor-backend

python -m venv .venv

.venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd hackmentor-frontend

npm install

npm start
```

Frontend runs at

```
http://localhost:3000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```
GEMINI_API_KEY=YOUR_API_KEY
```

---

# 📷 Output

The application generates:

- 📊 Feasibility Score
- 💡 Innovation Score
- 💻 Skill Score
- 📦 Resource Score
- ⏰ Deadline Score
- 🛠 Recommended Stack
- ⚠ Risks
- 🗺 Roadmap
- 🤖 AI Mentor Feedback
- 🏆 Judge Feedback
- 🎤 Pitch Generator

---

# 🎯 Future Improvements

- Authentication
- User Dashboard
- Save Project History
- PDF Report Generation
- GitHub Repository Analyzer
- Devpost Integration
- Kaggle Dataset Suggestions
- AI Team Formation
- Mentor Matching
- Live Collaboration

---

# 👨‍💻 Author

**Shreem Bhargava**

Integrated M.Tech (Artificial Intelligence)

VIT Bhopal University

GitHub:
https://github.com/shreem-bhargava36

---

# ⭐ Support

If you found this project useful,

⭐ Star the repository

🍴 Fork the repository

🚀 Contribute with new features

---

## 💙 Built for Hackathons

HackMentor AI was created to help innovators build better projects, make smarter technical decisions, and deliver stronger hackathon submissions with the power of Artificial Intelligence.
