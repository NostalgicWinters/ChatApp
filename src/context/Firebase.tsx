import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type AuthContextType = {
    logIn: boolean;
    setLogIn: Dispatch<SetStateAction<boolean>>;
  };

export const Auth = createContext<AuthContextType>({
    logIn: true,
    setLogIn: ()=>{},
});

export const AuthProvider = ({children}:  {children: ReactNode}) =>{

    const [logIn, setLogIn] = useState(false);

    return(
        <Auth.Provider value={{logIn, setLogIn}}>
            {children}
        </Auth.Provider>
    )
}