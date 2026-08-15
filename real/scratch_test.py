import os
from dotenv import load_dotenv
from langchain_huggingface import HuggingFaceEndpointEmbeddings
from langchain_community.vectorstores import FAISS

load_dotenv("Backend/.env")

embeddings = HuggingFaceEndpointEmbeddings(
    model="sentence-transformers/all-MiniLM-L6-v2",
    huggingfacehub_api_token=os.environ.get("HF_TOKEN")
)
chunks = ["This is a test chunk."]
try:
    vector_store = FAISS.from_texts(chunks, embeddings)
    print(f"vector_store is {vector_store}")
    if vector_store is None:
        print("Wait, vector_store is None!")
except Exception as e:
    print(f"Exception: {e}")
