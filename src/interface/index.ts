
export interface dataTypes {
    user?: Object,
    id?: string,
    name?: string,
    login?: string,
    avatar_url?: string,
    email?: string,
    location?: string,
    followers?: number,
    following?: number,
    public_repos?: number,
    bio?: string,
    node_id?: string,
    description?:string,
    stargazers_count?: number
}

export interface routerProps {
    userName: string,
    setUserName: (value:  string | ((prevState:  string) =>  string)) => void,
    user: dataTypes,
    setUser: (value: dataTypes | ((prevState:  dataTypes) =>  dataTypes)) => void,
    fetchUserData: (value1: string, value2: boolean) => void,
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

export interface profileProps {
    userName: string,
    setUserName: (value: string | ((prevState: string) => string)) => void,
    user: dataTypes,
    setUser: (value: dataTypes | ((prevState: dataTypes) => dataTypes)) => void,
    fetchUserData: (value1: string, value2: boolean) => void
}

export interface pageProps {
  user: dataTypes,
  fetchUserData: (value1: string, value2: boolean) => void,
  userName: string,
}