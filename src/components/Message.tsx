import React, { useState } from 'react'
import { getDatabase, get, ref } from 'firebase/database';
import { app } from '../Firebase';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Auth } from '../context/Firebase';

function Message() {

    const db = getDatabase(app);
    const dataRef = ref(db, 'chats/Dev+Vani');
    const [messages, setMessages] = useState<{ message: string }[]>([]);
    const context = useContext(Auth);

    let color = 'grey';
    if(context.sender==context.username){
      color = 'grey';
    } else{
      color = 'green';
    }

    useEffect(() => {
        get(dataRef).then((snapshot) => {
          const data = snapshot.val();
          if (data) {
            const msgArray = Object.values(data);
            setMessages(msgArray as { message: string }[]);
          }
        });
      }, []);

    return(
        <div>
            {messages.map((msg, idx)=>(
                <div key={idx} style={{ backgroundColor: context.sender === context.username ? 'grey' : 'green' }}>
                  <p className='text-white'>{msg.message}</p>
                </div>
            ))}
        </div>
    )
}

export default Message