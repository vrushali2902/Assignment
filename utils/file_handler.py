import os
from fastapi import UploadFile

UPLOAD_DIR = "uploaded_files"

def save_file(file: UploadFile) -> str:
    file_location = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_location, "wb") as f:
        f.write(file.file.read())
    return file_location

def read_file(file_path: str) -> str:
    with open(file_path, "r") as f:
        return f.read()
