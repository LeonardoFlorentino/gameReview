import {
  ContainerRepos,
  ContainerHeader,
  NumberOfFollowers,
  ContainerBody,
  ContainerRepo
} from './styles' 


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { data } from '../../data/data'
// const URL = 'https://api.github.com/users/LeonardoFlorentino'
interface dataTypes {
  name?: string,
  login?: string,
  avatar_url?: string,
  email?: string,
  location?: string,
  followers?: number,
  following?: number,
  public_repos?: number,
  bio?: string

}
interface RouteParams {
  username: string;
}

export const Repos = () => {
  // const { username }: RouteParams = useParams();
  // const [data, setData] = useState<dataTypes | null>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const newUrl = `${URL}/${username}`
  //     const response = await fetch(URL);
  //     const newData = await response.json();
  //     setData(newData);
  //   };
  //   fetchData();
  // });
  if (data) {
    const { public_repos} = data
    return (
      <ContainerRepos>
        <ContainerHeader>
          <NumberOfFollowers>
            {public_repos} repositórios
          </NumberOfFollowers>
        </ContainerHeader>
        <ContainerBody>
          <ContainerRepo>

          </ContainerRepo>
        </ContainerBody>
      </ContainerRepos>
    )
  }
  else {
    return null;
  }
}