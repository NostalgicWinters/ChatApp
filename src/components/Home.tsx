import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import DMs from '../components/DMs';
import Groups from '../components/Groups';
import ChatWindow from '../components/ChatWindow';
import SignUp from '../components/SignUp';
import { Auth } from '../context/Firebase';
import { useContext } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../Firebase';
import { getDatabase, ref, set, child } from "firebase/database";
import { useEffect } from 'react';

function Home(){
  
  const db = getDatabase(app);
  const context = useContext(Auth);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && context.username.trim()) {
        const uid = user.uid;
        console.log("Writing to DB for UID:", uid);
        context.setUid(uid);
      } else {
        console.log("Skipped DB write - missing username");
      }
    });
  
    return () => unsubscribe();
  }, [context.username]);

  if(!context || !context.logIn){
    return(
      <div className='flex justify-center align-middle w-screen h-screen bg-dark'>
        <SignUp />
      </div>

    )
  } else{
    return(
      <div className='bg-bg p-4 flex flex-row justify-between' style={{height:"47.65vw", width:"100vw" }}>
        <NavBar />
        <div>
          <SearchBar />
          <DMs />
          <Groups />
        </div>
        <ChatWindow />
      </div>
    )
  }

}

export default Home;