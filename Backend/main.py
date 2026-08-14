import os
from pathlib import Path
import joblib
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="Student Question API",
    description="AskMyNotes Question Classifier API backend",
    version="1.0.0",
)

# Enable CORS for frontend applications
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Resolve and load model
MODEL_PATH = Path(__file__).parent / "askmynotes_classifier.pkl"
model = None

if MODEL_PATH.exists():
    try:
        model = joblib.load(MODEL_PATH)
        print(f"Model loaded successfully from {MODEL_PATH}")
    except Exception as e:
        print(f"Failed to load model from {MODEL_PATH}: {e}")
else:
    print(f"Model file not found at {MODEL_PATH}")


class QuestionRequest(BaseModel):
    question: str


class QuestionResponse(BaseModel):
    question: str
    predicted_category: str | None = None
    answer: str


@app.get("/")
def home():
    return {
        "message": "AskMyNotes Classifier FastAPI running",
        "model_loaded": model is not None,
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "model_loaded": model is not None,
    }


@app.post("/predict", response_model=QuestionResponse)
def ask_question(request: QuestionRequest):
    cleaned_question = request.question.strip()

    if not cleaned_question:
        return QuestionResponse(
            question="",
            predicted_category=None,
            answer="Please enter a question.",
        )

    if model is not None:
        try:
            prediction = model.predict([cleaned_question])[0]
            category_str = str(prediction)
            return QuestionResponse(
                question=cleaned_question,
                predicted_category=category_str,
                answer=category_str,
            )
        except Exception as e:
            return QuestionResponse(
                question=cleaned_question,
                predicted_category=None,
                answer=f"Error classifying question: {e}",
            )

    return QuestionResponse(
        question=cleaned_question,
        predicted_category=None,
        answer=f'Model is not loaded. Received: "{cleaned_question}"',
    )