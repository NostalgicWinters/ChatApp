import React from 'react'

function ChatFunc() {
  return (
    <div>
        <div className='bg-bg p-2 flex flex-row justify-between rounded-2xl w-full'>
            <div className='flex flex-row w-full'>
                <img src='chatlog.svg'></img>
                <input type='text' placeholder='Enter text here' className='text-white px-8 mx-2 w-full flex flex-wrap'></input>
            </div>
            <div className='flex flex-row p-2'>
                <img src='emoji.svg' className='mx-2'></img>
                <img src='capture.svg' className='mx-2'></img>
            </div>
            
        </div>
    </div>
  )
}

export default ChatFunc