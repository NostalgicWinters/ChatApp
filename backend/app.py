from fastapi import FastAPI
from services import chatService
from core.config import Settings, get_settings
from services.chatService import ConnectionManager
from routes.chatRoute import router as chat_router


def create_app() -> FastAPI:
    settings = get_settings()

    app = FastAPI(
        title=settings.app_name,
        version=settings.app_version,
        debug=settings.debug,
    )

    app.state.settings = settings
    manager = ConnectionManager()

    app.include_router(chat_router)

    return app
