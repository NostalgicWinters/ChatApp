import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, get, child, ref } from 'firebase/database';
import { app } from '../Firebase';
import { Auth } from '../context/Firebase';
import { useContext } from 'react';

function ChatHead() {
  const [username, setUsername] = useState('');
  const context = useContext(Auth);

  useEffect(() => {
    const auth = getAuth(app);
    const user = auth.currentUser;

    if (user) {
      const dbRef = ref(getDatabase(app));
      get(child(dbRef, `users/${user.uid}/username`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUsername(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div className='flex flex-row justify-between border-b-2 border-border'>
      <img src='kitty.png' className='mr-8 h-15 w-15 border-2 border-black flex' style={{ borderRadius: "50px" }} />
      <div className='flex flex-col justify-center'>
        <span className='text-white text-2xl'>{context.username}</span>
        <span className='text-white opacity-55'>Online</span>
      </div>
      <div className='flex flex-row ml-64 mr-2 p-4'>
        <img src='call.svg' className='mx-8 my-2' />
        <img src='videocall.svg' className='mx-8' />
        <img src='chatsettings.svg' className='ml-8' />
      </div>
    </div>
  );
}

export default ChatHead;
