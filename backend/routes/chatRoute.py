from fastapi import APIRouter, Request, WebSocket, WebSocketDisconnect
from services.chatService import ConnectionManager

router = APIRouter()

manager = ConnectionManager()


@router.get("/test")
async def test():
    return {"message": "ok"}


@router.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await manager.send_message(data)
            await manager.broadcast(f"Client #{client_id} says: {data}")

    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast(f"Client #{client_id} has left the chat.")
