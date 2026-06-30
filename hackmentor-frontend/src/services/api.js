const API_URL = "http://127.0.0.1:8000/analyze";

export async function analyzeProject(projectData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze project");
  }

  return await response.json();
}