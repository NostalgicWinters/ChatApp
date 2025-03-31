import React from 'react'
import ChatHead from './ChatHead'
import ChatFunc from './ChatFunc'
import ChatScreen from './ChatScreen'

function ChatWindow() {
  return (
    <div className='bg-dark p-4 rounded-2xl flex flex-col justify-between'>
        <ChatHead />
        <ChatScreen />
        <ChatFunc />
    </div>
  )
}

export default ChatWindow