import React, {useState, useEffect} from 'react';
import Card from './Card';
import { getDatabase, get, ref, child } from 'firebase/database';
import { app } from '../Firebase';

function DMs() {

  const db = getDatabase(app);
  const userRef = ref(db, 'users');
  const [users, setUsers] = useState<User[]>([]);

  type User = {
    username: string;
    [key: string]: any;
  };


  useEffect(()=>{
    get(userRef).then((snapshot)=>{
      if(snapshot.exists()){
        const data: { [key: string]: User } = snapshot.val();
        const userList = Object.values(data);
        setUsers(userList);
      }
    })
  }, [])

  return(
    <div className='bg-dark rounded-2xl p-3 m-2'>
      <h1 className='text-white text-3xl m-2'>Dms</h1>
      {users.slice(0,3).map((user)=>(
        <Card username={user.username} />
      ))}
    </div>
  )

}

export default DMs