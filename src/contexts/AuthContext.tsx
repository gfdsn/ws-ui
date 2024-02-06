import axios from "../axiosConfig";
import { createContext, ReactNode, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
}

type AuthContextProviderProps = { children: ReactNode };

type AuthContextProps = {
  user: User | undefined;
  token: string; 
  login: (userInfo: any) => void;
  register: (userInfo: any) => void;
  logout: () => void
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>(''); 

  async function login(userInfo: any) {
    await axios.post('/login', userInfo)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        setUser(res.data.user);
        setToken(res.data.token);
      });
  }

  async function register(userInfo: any) {
    await axios.post('/register', userInfo)
      .then(res => console.log(res));
  }

  function logout() {
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
