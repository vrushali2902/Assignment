from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
import os
from app.models.summarizer import Summarizer
from app.utils.file_handler import save_file, read_file

app = FastAPI()

summarizer = Summarizer()

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_path = save_file(file)
    return {"file_path": file_path}

@app.post("/summarize")
async def summarize(file_path: str):
    try:
        content = read_file(file_path)
        summary = summarizer.summarize(content)
        return {"summary": summary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
