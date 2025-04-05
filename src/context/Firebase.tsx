import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type AuthContextType = {
    logIn: boolean;
    setLogIn: Dispatch<SetStateAction<boolean>>;
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
    uid: string;
    setUid: Dispatch<SetStateAction<string>>;
  };

export const Auth = createContext<AuthContextType>({
    logIn: true,
    setLogIn: ()=>{},
    username: "",
    setUsername: ()=>{},
    uid: "",
    setUid: ()=>{},
});


export const AuthProvider = ({children}:  {children: ReactNode}) =>{

    const [username, setUsername] = useState("");
    const [logIn, setLogIn] = useState(false);
    const [uid, setUid] = useState('');

    return(
        <Auth.Provider value={{logIn, setLogIn, username, setUsername, uid, setUid}}>
            {children}
        </Auth.Provider>
    )
}