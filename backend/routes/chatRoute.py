from fastapi import APIRouter, Request, WebSocket

router = APIRouter()


@router.get("/test")
async def test():
    return {"message": "ok"}


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message sent was {data}")
