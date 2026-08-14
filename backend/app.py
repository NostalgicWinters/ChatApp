from fastapi import FastAPI
from backend.services import chatService
from core.config import Settings, get_settings
from services.chatService import ChatService
from routes.chatRoute import router as chat_router


def create_app() -> FastAPI:
    settings = get_settings()

    app = FastAPI(
        title=settings.app_name,
        version=settings.version,
        debug=settings.debug,
    )

    app.state.settings = settings
    app.state.chatService = ChatService(settings)

    app.include_router(chat_router)

    return app
