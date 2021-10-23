import {
  ReposContainer,
  ReposHaeder,
  GoBackButton,
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
import { useEffect } from 'react';
import { Navbar } from '../../components/Navbar'

interface RouteParams {
  username: string,
  id: string
}



export const Repos = (props: any) => {
  const { id }: RouteParams = useParams();
  const { user, repos, getRepos } = props

    useEffect(() => {
        const loadData = async () => {
            await getRepos(id) 
        }
        loadData()
    },)

  return (
    <ReposContainer>
      <ReposHaeder>
        <GoBackButton />
        <NumberOfFollowers>
          {user.public_repos} repositórios 
        </NumberOfFollowers>
      </ReposHaeder>
        <ReposBody>
        {
          repos.map((repo: any) => (
          <RepoContainer key={repo.node_id}>
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
                <IconLock/>
              </IconLockContainer>
            </IconsContainer>
          </RepoContainer>))
        }
        </ReposBody>
        <ReposFooter>
          <Navbar activePage='repos'/>
        </ReposFooter>
    </ReposContainer >
  )
}