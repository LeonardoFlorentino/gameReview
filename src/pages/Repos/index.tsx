import {
  ReposContainer,
  ReposHaeder,
  ExitContainer,
  ExitIcon,

  NumberOfFollowers,
  ReposBody,
  RepoContainer,
  NameContainer,
  RepoName,
  RepoDescription,
  IconsContainer,
  IconLock,
  IconUnLock,
  Square,
  StarContainer,
  StarNumbers,
  IconStar,
  IconLockContainer,
  ReposFooter
} from './styles'


import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar'
import { Paginator } from '../../components/Paginator'

import { RouteParams } from '../../interface';

import {dataTypes} from '../../interface'


interface reposProps {
  user: dataTypes,
  fetchData: (value1: string, value2: string) => void,
  userName: string,
}


export const Repos = (props: reposProps) => {
  const { mainUserName }: RouteParams = useParams();
  const { userName, user, fetchData} = props


  const showData = (repo: dataTypes) => {
    return (
      <RepoContainer key={repo.id}>
        <NameContainer>
          <Square />
          <RepoName>
            {repo.name}
          </RepoName>
        </NameContainer>
        <RepoDescription>
          {repo.description}
        </RepoDescription>
        <IconsContainer>
          <StarContainer>
            <IconStar />
            <StarNumbers>
              {repo.stargazers_count}
            </StarNumbers>
          </StarContainer>
          <IconLockContainer>
            <IconUnLock />
            <IconLock />
          </IconLockContainer>
        </IconsContainer>
      </RepoContainer>)
  }

  return (
    <ReposContainer>
      <ReposHaeder>
        <ExitContainer to={`/${mainUserName}`}>
          <ExitIcon />
        </ExitContainer>
        <NumberOfFollowers>
          {user.public_repos} repositórios
        </NumberOfFollowers>
      </ReposHaeder>
      <ReposBody>
        <Paginator
          typePage={'repos'}
          showData={showData}
          userName={userName}
          numOfElements={user.public_repos} 
          fetchUserData={fetchData}
          mainUserName={mainUserName}
          per_page={5}/>
      </ReposBody>
      <ReposFooter>
        <Navbar activePage='repos' />
      </ReposFooter>
    </ReposContainer >
  )
}