import {  useState, createContext, useContext } from "react";
import { toast } from 'react-toastify'

interface IUser {
  email: string
}

interface userContextInterface {
  user: IUser ,
  login: (name: string) => void,
  logout: () => void
}

export const AuthContext = createContext<userContextInterface>(
  {
    user: {email:""} ,
    login: name => name,
    logout: () => { }
  }
);

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<IUser >(JSON.parse(localStorage.getItem("user")|| '{"email": ""}'));

  const login = (email:string) =>{
    handleStatus(200)
    if(email.length !== 0){
      setUser({email})
      localStorage.setItem("user",JSON.stringify({email}))
    }
  }

  const logout = () => {
    setUser({email: ""})
      localStorage.setItem("user",JSON.stringify({email:""}))
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const handleStatus = (status: number) => {
  if (status === 200) {
    toast.success(`Usuário logado`, {
      autoClose: 1500,
    })
  }
  if (status === 404) {
    toast.error('Usuário não encontrado', {
      autoClose: 3000,
    })
  }
  if (status === 403) {
    toast.error('Limite de tentativas excedido', {
      autoClose: 3000,
    })
  }
  if (status === 0) {
    toast.error('Ocorreu um problema na rede', {
      autoClose: 3000,
    })
  }
}

export const useAuth = () => useContext(AuthContext);