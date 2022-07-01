import { AxiosRequestConfig } from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from 'react-toastify'

const initalGameData = {
  id: 0,
  email: '',
  image: '',
  score: 0,
  count: 0,
  title: ''
}

const initialDB = {
  games: [initalGameData],
  isLoaded: false
}

const URL_API = 'https://uni-games.herokuapp.com'

interface userContextInterface {
  getGameById: (id: number, showStatus: boolean) => void,
  loadGames: () => void,
  DB: typeof initialDB,
  alterGame: (id: number, email: string, score: number) => void
}

export const GameContext = createContext<userContextInterface>(
  {
    getGameById: (id) => { },
    loadGames: () => { },
    DB: initialDB,
    alterGame: (id, email, score) => { }
  }
);

export const GameProvider = (props: any) => {

  const [game, setGame] = useState<typeof initalGameData>(initalGameData);
  const [DB, setDB] = useState<typeof initialDB>(initialDB);
  const [reload, setReload] = useState<boolean>(true)

  const getGame = async (id: number, showStatus: boolean) => {
    const resp = await fetch(`${URL_API}/${id}`);
    try {
      if (resp.ok) {
        const respJSON = (await resp.json());
        const game = {
          id: respJSON.id,
          email: respJSON.email,
          score: respJSON.score,
          count: respJSON.count,
          image: respJSON.image,
          title: respJSON.title
        }
        setGame(game)
      }
      else {
        setGame(game)
      }
    }
    catch (e) {
      setGame(initalGameData)
    }
  }

  const getGameById = (id: number, showStatus: boolean) => {
    getGame(id, showStatus)
  }

  const getGames = async () => {
    const resp = await fetch(`${URL_API}/?size=20&sort=id`);
    try {
      if (resp.ok) {
        const respJSON = (await resp.json());
        setDB({ isLoaded: true, games: respJSON.content })
      }
      else {
        setDB(initialDB)
      }
    }
    catch (e) {
      setDB(initialDB)
    }
  }

  const loadGames = () => {
    getGames()
  }

  const alterGame = async (id: number, email: string, score: number) => {
    try {
      const resp = await
        fetch(`${URL_API}/scores`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ gameId: id, email: email, score: score })
        })
      if (resp.ok) {
        const game = DB.games.filter(game => game.id === id)[0]
        handleStatus(200, game.title, score)
        await getGames()
      }
    }
    catch (e) {
      alert(e)
    }
  }

  useEffect(() => {
    const gamesStorage = localStorage.getItem("games");
    if (gamesStorage) {
      setGame(JSON.parse(gamesStorage));
    } else {
      setGame(initalGameData);
    }
  }, [DB]);

  return (
    <GameContext.Provider value={{ getGameById, DB, loadGames, alterGame }}>
      {props.children}
    </GameContext.Provider>
  );
};

const handleStatus = (status: number, gameName: string, score: number) => {
  if (status === 200) {
    toast.success(`${gameName} avaliado com nota: ${score}.0`, {
      autoClose: 5000,
    })
  }
  if (status === 404) {
    toast.error('Jogo não encontrado', {
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

export const useGame = () => useContext(GameContext);