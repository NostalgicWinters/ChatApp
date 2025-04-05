import React, { useEffect, useState } from 'react';
import { getDatabase, get, ref, child } from 'firebase/database';
import { app } from '../Firebase.js';

function SearchBar() {
  const db = getDatabase(app);
  const usersRef = ref(db, 'users');

  const [searchQuery, setSearchQuery] = useState('');

  type User = {
    username: string;
    [key: string]: any;
  };

  function searchUsers(query: string) {
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users: { [key: string]: User } = snapshot.val();
          const results: { userId: string; username: string }[] = [];

          for (const userId in users) {
            const username = users[userId]?.username;
            if (
              typeof username === 'string' &&
              username.toLowerCase().includes(query.toLowerCase())
            ) {
              results.push({ userId, ...users[userId] });
            }
          }
          
          console.log('Usernames:', results.map(user=> user.username));
          
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }

  const getData = () => {
    get(child(ref(db), 'users')).then((snapshot) => {
      console.log(snapshot.val());
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='bg-dark p-4 rounded-3xl h-16 flex justify-between align-middle'>
      <div className='p-2 flex justify-center hover:cursor-pointer'>
        <img
          src='search.svg'
          className='h-5 flex justify-self-center'
          onClick={() => searchUsers(searchQuery)}
        />
      </div>
      <input
        type='text'
        placeholder='Search'
        className='text-white p-2 mx-8 w-full'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
