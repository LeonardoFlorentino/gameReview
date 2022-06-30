import { AxiosRequestConfig } from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from 'react-toastify'

const initalGameData = {
  gameId: 0,
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

  const getGame = async (id: number, showStatus: boolean) => {
    const resp = await fetch(`https://uni-games.herokuapp.com/${id}`);
    if (showStatus) handleStatus(resp.status | 0)
    try {
      if (resp.ok) {
        const respJSON = (await resp.json());
        const game = {
          gameId: respJSON.gameId,
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
    const resp = await fetch(`https://uni-games.herokuapp.com`);
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
    const axios = require('axios').default;
    const config: AxiosRequestConfig = {
      baseURL: "https://uni-games.herokuapp.com",
      method: "PUT",
      url: "/scores",
      data:{
        gameId: id,
        email: email,
        score: score
      }
    }

    axios.put()
  //   try {
  //     const resp = await
  //       fetch(`https://uni-games.herokuapp.com/scores`, {
  //         method: 'put',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ gameId: id, email: email, score: score })
  //       })
  //     if (resp.ok) {
  //       await getGames()
  //     }
  //   }
  //   catch (e) {
  //     alert(e)
  //   }
  }

  // useEffect(() => {
  //   const gamesStorage = localStorage.getItem("games");
  //   if (gamesStorage) {
  //     setGame(JSON.parse(gamesStorage));
  //   } else {
  //     setGame(initalGameData);
  //   }
  // }, []);

  return (
    <GameContext.Provider value={{ getGameById, DB, loadGames, alterGame }}>
      {props.children}
    </GameContext.Provider>
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

export const useGame = () => useContext(GameContext);