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

function Home(){
  
  const context = useContext(Auth);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    }})

  if(!context || !context.logIn){
    return(
      <div className='flex justify-center align-middle w-screen h-screen bg-dark'>
        <SignUp />
      </div>

    )
  } else{
    return(
      <div className='bg-bg p-8 flex flex-row justify-between' style={{height:"47.65vw", width:"100vw" }}>
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