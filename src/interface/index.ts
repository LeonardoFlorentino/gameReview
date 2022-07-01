import { ReactNode } from "react";
export interface dataTypes {
  id:number
}

interface userProps {
    setUserName: (value:  string | ((prevState:  string) =>  string)) => void,
    userName: string,
    fetchUserData: (value1: string, value2: boolean) => Promise<number>,
    setUser: (value: dataTypes | ((prevState:  dataTypes) =>  dataTypes)) => void,
}

export interface routerProps extends userProps {
    user: dataTypes,
  }

export interface dataReposTypes {
    name?: string,
    description?: string,
    stargazers_count?: string
}

export interface RouteParams {
    mainUserName: string,
    pageType: string,
    subordinateUserName: string
}

export interface profileProps extends userProps{
    user: dataTypes,
}

export interface pageProps {
  user: dataTypes,
  fetchUserData: (value1: string, value2: boolean) => Promise<number>,
  userName: string,
}


export interface paginatorProps {
    numOfElements: number | undefined,
    per_page?: number,
    typeOfOrdenation?: string
  }