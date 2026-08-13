from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Student(BaseModel):
    name:str
    marks:int

@app.get("/")
def home():
    return {"message":"Backend Running"}

@app.get("/health")
def health():
    return {"status":"healthy"}

@app.post("/calculate")
def calculate(student: Student):
    marks = student.marks

    # TODO 1: Determine the grade (A+, A, B, C, D, F)
    if marks >= 90:
        grade = "A+"
    elif marks >= 80:
        grade = "A"
    elif marks >= 70:
        grade = "B"
    elif marks >= 60:
        grade = "C"
    elif marks >= 40:
        grade = "D"
    else:
        grade = "F"

    # TODO 2: Determine Pass/Fail
    result = "Pass" if marks >= 40 else "Fail"

    return {
        "name": student.name,
        "marks": marks,
        "grade": grade,
        "result": result
    }
