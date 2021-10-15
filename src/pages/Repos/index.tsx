import {
  ContainerRepos,
  ContainerHeader,
  GoBackButton,
  NumberOfFollowers,
  ContainerBody,
  ContainerRepo,
  NameContainer,
  RepoName,
  RepoDescription,
  IconsContainer,
  IconLock,
  IconUnLock,
  StarContainer,
  StarNumbers,
  IconStar,
  IconLockContainer,
  Footer
} from './styles'


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { Navbar } from '../../components/Navbar'

import { data } from '../../data/data'
import { dataRepos } from '../../data/dataRepos'
import { Square } from '../Profile/styles';
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
    const { public_repos } = data
    const { name, description, stargazers_count } = dataRepos[0]
    return (
      <ContainerRepos>
        <ContainerHeader>
          <GoBackButton />
          <NumberOfFollowers>
            {public_repos} repositórios
          </NumberOfFollowers>
        </ContainerHeader>
        <ContainerBody>
          <ContainerRepo>
            <NameContainer>
              <Square />
              <RepoName>
                {name}
              </RepoName>
            </NameContainer>
            <RepoDescription>
              {description}
            </RepoDescription>
            <IconsContainer>
              <StarContainer>
                <IconStar />
                <StarNumbers>
                  {stargazers_count}
                </StarNumbers>
              </StarContainer>
              <IconLockContainer>
                <IconUnLock />
                <IconLock />
              </IconLockContainer>
            </IconsContainer>
          </ContainerRepo>
          <ContainerRepo>
            <NameContainer>
              <Square />
              <RepoName>
                {name}
              </RepoName>
            </NameContainer>
            <RepoDescription>
              {description}
            </RepoDescription>
            <IconsContainer>
              <StarContainer>
                <IconStar />
                <StarNumbers>
                  {stargazers_count}
                </StarNumbers>
              </StarContainer>
              <IconLockContainer>
                <IconUnLock />
                <IconLock />
              </IconLockContainer>
            </IconsContainer>
          </ContainerRepo>
        </ContainerBody>
        <Footer>
          <Navbar />
        </Footer>
      </ContainerRepos>
    )
  }
  else {
    return null;
  }
}