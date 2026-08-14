from core.config import Settings


class ChatService:

    def __init__(self, settings: Settings):
        self.settings = settings

    def send_message(self, message: str):
        pass
