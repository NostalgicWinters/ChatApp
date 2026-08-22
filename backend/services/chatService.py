from fastapi import WebSocket
from core.config import Settings


class ConnectionManager:
    def __init__(self):
        self.connection_list: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.connection_list.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.connection_list.remove(websocket)

    async def send_message(self, message: str):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.connection_list:
            await connection.send_message(message)
