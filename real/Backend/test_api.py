import requests

print("Uploading...")
with open("test_document.pdf", "rb") as f:
    files = {"file": ("test_document.pdf", f, "application/pdf")}
    res = requests.post("http://127.0.0.1:8000/upload", files=files)
    print("Upload Response:", res.status_code, res.text)

print("Asking...")
res = requests.post("http://127.0.0.1:8000/ask", json={"question": "summarize"})
print("Ask Response:", res.status_code, res.text)
