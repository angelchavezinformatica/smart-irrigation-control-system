import random
import time

from fastapi import FastAPI, WebSocket
import starlette

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


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
