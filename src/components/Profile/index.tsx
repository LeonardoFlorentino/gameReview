
import { useState } from 'react';

const URL = 'https://api.github.com/users'

export const  Router = () => {

  let [userName, setUserName] = useState<string>('')
  let [user, setUser] = useState<Object>({})
  let [userFollowName, setUserFollowName] = useState<string>('')
  let [userFollow, setUserFollow] = useState<Object>({})

  const getUser = async (login: string) => {
    const emptyUser = !Object.keys(user).length
    const urlUserMatch = login === userName
    if (!urlUserMatch || emptyUser) {
      try {
        const newURL = `${URL}/${login}`
        const response = await fetch(newURL);
        const newData = await response.json();
        setUser(newData)
        if (!urlUserMatch) {
          setUserName(login)
          cleanOthersStates('home')
        }
      }
      catch (e) {
        console.log("Requisão com o seguinte erro: ", e)
      }
    }
  }


  const getUserFollow = async (login: string) => {
    const emptyUser = !Object.keys(userFollow).length
    const urlUserMatch = login === userFollowName
    if (!urlUserMatch || emptyUser) {
      try {
        const newURL = `${URL}/${login}`
        const response = await fetch(newURL);
        const newData = await response.json();
        setUserFollow(newData)
        if (!urlUserMatch) {
          setUserFollowName(login)
        }
      }
      catch (e) {
        console.log("Requisão com o seguinte erro: ", e)
      }
    }
  }

  const cleanOthersStates = async (state: string) => {
    if (state !== 'home') setUser({})
  }
}