import requests
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def main():
    r = requests.get("https://www.geeksforgeeks.org/python-web-scraping-tutorial/")
    return r.content

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)