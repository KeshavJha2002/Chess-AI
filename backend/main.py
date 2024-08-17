from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from mysocket import ConnectionManager

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows requests from the specified origins
    allow_credentials=True,  # Allows cookies to be sent with requests
    allow_methods=["*"],     # Allows all methods (GET, POST, PUT, etc.)
    allow_headers=["*"],     # Allows all headers (like Authorization)
)

manager = ConnectionManager()

@app.get('/')
async def hello():
  return "hello"

@app.websocket("/communicate")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await manager.send_personal_message(f"Received:{data}",websocket)
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.send_personal_message("Bye!!!",websocket)