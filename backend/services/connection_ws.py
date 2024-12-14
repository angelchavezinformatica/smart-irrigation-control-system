from typing import List
from fastapi import WebSocket
import json


class ConnectionWS:
    def __init__(self) -> None:
        self.connections: List[WebSocket] = []

    async def connect(self, socket: WebSocket):
        await socket.accept()
        self.connections.append(socket)

    async def disconnect(self, socket: WebSocket):
        try:
            await socket.close()
        except:
            pass

        self.connections.remove(socket)

    async def broadcast(self, message: dict):
        for connection in self.connections:
            await connection.send_text(json.dumps(message))
