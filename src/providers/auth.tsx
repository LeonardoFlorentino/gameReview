import { useEffect, useState, createContext, useContext } from "react";
import { toast } from 'react-toastify'

const initialUser = {
  email: '',
  isLogged: false
}

interface userContextInterface {
  anotherUser: typeof initialUser,
  user: typeof initialUser,
  getAnotherUser: (name:string) =>void,
  login: (name: string) => void,
  logout: () => void
}

export const AuthContext = createContext<userContextInterface>(
  {
    user: initialUser,
    anotherUser: initialUser,
    getAnotherUser: name => name,
    login: name => name,
    logout: () => { }
  }
);

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<typeof initialUser>(initialUser);
  const [anotherUser, setAnotherUer] = useState<typeof initialUser>(initialUser);

  const getUser = async (name: string, setByName: Function, showStatus: boolean) => {
    const resp = await fetch(`https://api.github.com/users/${name}`);
    if(showStatus) handleStatus(resp.status | 0)
    try {
      if (resp.ok) {
        const respJSON = (await resp.json());
        const user = {
          login: respJSON.login,
          name: respJSON.name,
          location: respJSON.location,
          followers: respJSON.followers,
          following: respJSON.following,
          public_repos: respJSON.public_repos,
          email: respJSON.email,
          avatar_url: respJSON.avatar_url,
          bio: respJSON.bio,
          node_id: respJSON.node_id,
          description: respJSON.description,
          stargazers_count: respJSON.stargazers_count,
          isLogged: true
        }
        setByName(user)
      }
      else {
        setByName(user)
      }
    }
    catch (e) {
      setByName(initialUser)
    }
  }

  const login = (email:string) =>{
    if(email.length !== 0){
      setUser({email, isLogged: true})
    }
  }

  const logout = () => {
    setUser(initialUser)
  }

  const getAnotherUser = (name:string) => {
    getUser(name,setAnotherUer,false)
  }

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser(initialUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout,anotherUser, getAnotherUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const handleStatus = (status: number) => {
  if (status === 200) {
    toast.success(`Usuário logado`, {
      position: "top-center",
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