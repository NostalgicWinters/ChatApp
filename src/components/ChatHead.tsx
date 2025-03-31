import React from 'react'

function ChatHead() {
  return (
    <div className='flex flex-row justify-between border-b-2 border-border'>
        <img src='kitty.png' className='mr-8 h-15 w-15 border-2 border-black flex' style={{borderRadius: "50px"}}></img>
        <div className='flex flex-col justify-center'>
            <text className='text-white text-2xl'>Dev</text>
            <text className='text-white opacity-55'>Online</text>
        </div>
        <div className='flex flex-row ml-64 mr-2 p-4'>
            <img src='call.svg' className='mx-8 my-2'></img>
            <img src='videocall.svg' className='mx-8'></img>
            <img src='chatsettings.svg' className='ml-8'></img>
        </div>
    </div>
  )
}

export default ChatHead