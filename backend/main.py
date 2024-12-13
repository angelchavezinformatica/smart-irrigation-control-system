import random
import time
import os

from fastapi import FastAPI, WebSocket
from fastapi.responses import FileResponse
import starlette

app = FastAPI()


@app.get("/")
async def serve_index():
    return FileResponse(os.path.join('static', 'index.html'))


@app.get("/{file_path:path}")
async def serve_files(file_path: str):
    return FileResponse(os.path.join('static', *file_path.split('/')))


@app.websocket('/ws')
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    while True:
        temperature = random.randint(1, 50)
        humidity = random.randint(1, 100)
        irrigation_time = random.randint(1, 9999)

        try:
            await websocket.send_json({
                "temperature": temperature,
                "humidity": humidity,
                "irrigation_time": irrigation_time,
            })
        except starlette.websockets.WebSocketDisconnect:
            break

        time.sleep(1)
