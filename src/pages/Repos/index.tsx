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

import { pageProps, RouteParams } from '../../interface';
import { useSelector } from 'react-redux';
import {dataTypes} from '../../interface'


export const Repos = (props: pageProps) => {
  const { mainUserName }: RouteParams = useParams();
  const { fetchUserData} = props

  const user = useSelector((state:any) => state.user)
  const userName = user.login

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
        <ExitContainer  
          to={`/${mainUserName}`}
        >
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
          numOfElements={user.public_repos} 
          fetchUserData={fetchUserData}
          mainUserName={mainUserName}
          per_page={5}/>
      </ReposBody>
      <ReposFooter>
        <Navbar activePage='repos' userName={userName}/>
      </ReposFooter>
    </ReposContainer >
  )
}