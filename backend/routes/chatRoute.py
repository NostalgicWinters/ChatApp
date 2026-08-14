from fastapi import APIRouter, Request

router = APIRouter()


@router.post("/chat")
def chat(message: str, request: Request):
    chatService = request.app.state.chatService
    return chatService.send_message(message)
