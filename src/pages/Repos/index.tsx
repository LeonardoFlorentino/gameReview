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

// import { data } from '../../data/data'
// import { dataRepos } from '../../data/dataRepos'
import { Square } from '../Home/styles';
const URL = 'https://api.github.com/users'
// interface dataTypes {
//   name?: string,
//   login?: string,
//   avatar_url?: string,
//   email?: string,
//   location?: string,
//   followers?: number,
//   following?: number,
//   public_repos?: number,
//   bio?: string

// }

// interface dataReposTypes {
//   name?: string,
//   description?: string,
//   stargazers_count?: string
// }
interface RouteParams {
  username: string,
  id:string
}


export const Repos = () => {
  const {id}: RouteParams = useParams();
  const [data, setData] = useState<any | null>(null);
  const [dataRepos, setDataRepos] = useState<any | null> (null)

  const newUrl = `${URL}/${id}`
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(newUrl);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  });

  useEffect(() => {
    const fetchData = async () => {
      const responseRepos = await fetch(`${newUrl}/repos`)
      const newDataRepos = await responseRepos.json()
      setDataRepos(newDataRepos)       
    };
    fetchData();
  });

  if (data && dataRepos) {
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