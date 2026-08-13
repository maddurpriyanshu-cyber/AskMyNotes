# Student Grade Calculator

## Complete ONLY the TODOs
- backend/main.py
- frontend/src/App.jsx

## Run Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend: http://localhost:8000
Swagger: http://localhost:8000/docs

## Run Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

## Verify
95 -> A+
82 -> A
73 -> B
61 -> C
55 -> D
42 -> F

## Docker
```bash
docker compose up --build
```

## Playwright Test Cases
TC1: Heading visible.
TC2: Student Name input, Marks input and Calculate Grade button visible.
TC3: Rahul,95 -> Grade:A+ Result:Pass.
TC4: Priya,82 -> Grade:A Result:Pass.
TC5: Kiran,73 -> Grade:B Result:Pass.
TC6: Anjali,42 -> Grade:F Result:Fail.

Note: During automated evaluation, Playwright mocks the backend API. Your frontend must call fetch(), parse JSON, store the response in state, and display the values returned by the API.
