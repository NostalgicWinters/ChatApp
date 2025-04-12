import { useState } from 'react';
import { app } from '../Firebase';
import { getDatabase, ref, get, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { useContext } from 'react';
import { Auth } from '../context/Firebase';

function ChatFunc() {

  const db = getDatabase(app);
  const auth = getAuth(app);
  const context = useContext(Auth);
  
  const uid = auth.currentUser?.uid;

  const [message, setMessage] = useState('');
  const [messageID, setMessageID] = useState(1); 

  const getUser = async () => {
    const snapshot = await get(ref(db, 'users'));
    if (snapshot.exists()) {
      const users = snapshot.val();
      for (const user in users) {
        if (users[user].id === uid) {
          return users[user].username;
        }
      }
    }
    return '';
  };

  const sendMessage = async () => {
    const current = await getUser();
    const other = context.username;
    
    const [firstUser, secondUser] = [current, other].sort();
    const chatKey = `${firstUser}+${secondUser}`;
  
    await set(ref(db, `chats/${chatKey}/${messageID}`), {
      message,
      sender: current,
      timestamp: Date.now()
    });
  
    setMessage('');
    setMessageID(prev => prev + 1);
  };

  return (
    <div>
        <div className='bg-bg p-2 flex flex-row justify-between rounded-2xl w-full'>
            <div className='flex flex-row w-full'>
                <img src='chatlog.svg'></img>
                <input 
                type='text' 
                placeholder='Enter text here' 
                className='text-white px-6 mx-2 w-full flex flex-wrap'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                />
            </div>
            <div className='flex flex-row px-2'>
                <button className='text-white bg-nav-blue p-2 rounded-2xl' onClick={sendMessage}>Send</button>
                <img src='emoji.svg' className='mx-2'></img>
                <img src='capture.svg' className='mx-2'></img>
            </div>
            
        </div>
    </div>
  )
}

export default ChatFunc