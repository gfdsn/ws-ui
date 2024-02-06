import axios from "../axiosConfig";
import { ReactNode, useState } from "react";
import { createContext } from "vm";

interface User {
  id: string,
  name: string,
  email: string
}
type AuthContextProviderProps = { children: ReactNode }
type AuthContextProps = {
  user: User,  
  token: string,
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({children}: AuthContextProviderProps)  {

  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>(''); 

  async function login() {

    await axios.post('/login')
      .then(res => console.log(res))
    
  }

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}