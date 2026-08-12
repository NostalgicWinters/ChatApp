# Chat Application

---

## Functional Requirements
- One on One Chatting
- Online status
- Read reciepts
- Group Chat
- Pfp, quote 
- Notifications
- Multimedia sharing

## System Requirements
- End to End encryption
- Low latency
- High Reliability
- Cross Platform
- Chat History

## API Endpoints
- send_message (sender_id, reciever_id, text)
- get_message (user_id, screen_size, before_timestamp)

## Services 
- Messaging
- Read reciepts
- Group Chatting
- Session
- Chat Storage

## Database Schema

### T_Users
- user_id
- email
- password
- username

### T_Groups 
- group_id
- group_name
- user_ids

### T_Unsent_Messages
- message_id
- sender_id
- reciever_id
- content
- media_url
- timestamp

### T_LastOnline
- user_id
- last_online

### T_sessions
- user_id
- server_id
- status
