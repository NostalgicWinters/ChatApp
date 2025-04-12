import React from 'react'
import { Auth } from '../context/Firebase'
import { useContext } from 'react'
import { getDatabase, get, ref } from 'firebase/database';
import { app } from '../Firebase';

function Card({username}) {
  
  const db = getDatabase(app);
  const context = useContext(Auth);

  return (
    <div className='border-b-2 border-border mt-1 hover:cursor-pointer' onClick={()=>context.setUsername(username)}>
        <div className='flex flex-row justify-start mb-2'>
            <img src='kitty.png' className='profile h-15 w-15 border-2 border-black mr-2'></img>
            <div className='flex flex-col justify-normal'>
                <div className='flex flex-row justify-between align-middle'>
                    <text className='text-white text-xl mr-32'>{username}</text>
                    <text className='text-white opacity-40 mt-1'>Today 4:30</text>
                </div>
                <text className='text-white opacity-55'>How are you?</text>
            </div>
        </div>
    </div>
  )
}

export default Card