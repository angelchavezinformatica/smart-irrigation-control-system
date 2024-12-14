import asyncio
import random
import os

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse

from services.connection_ws import ConnectionWS

app = FastAPI()
WS = ConnectionWS()


@app.get("/")
async def serve_index():
    return FileResponse(os.path.join('static', 'index.html'))


@app.get("/{file_path:path}")
async def serve_files(file_path: str):
    return FileResponse(os.path.join('static', *file_path.split('/')))


@app.websocket('/ws')
async def websocket_endpoint(socket: WebSocket):
    await WS.connect(socket)

    try:
        while True:
            temperature = random.randint(1, 50)
            humidity = random.randint(1, 100)
            irrigation_time = random.randint(1, 9999)

            await WS.broadcast({
                "temperature": temperature,
                "humidity": humidity,
                "irrigation_time": irrigation_time,
            })

            await asyncio.sleep(2)
    except WebSocketDisconnect:
        await WS.disconnect(socket)
