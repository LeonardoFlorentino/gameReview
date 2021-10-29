import {
  FollowersContainer,
  FollowersHeader,
  ExitContainer,
  ExitIcon,
  NumberOfFollowers,
  FollowersBody,
  FollowerContainer,
  Square,
  ProfilePic,
  LoginName,
  AcessFollowerIcon,
  AcessContainerFollower,
  FollowersFooter
} from './styles'


import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar'
import { dataTypes, pageProps, RouteParams } from '../../interface'
import { Paginator } from '../../components/Paginator'

export const Followers = (props: pageProps) => {
  const { mainUserName, subordinateUserName }: RouteParams = useParams()
  const { userName, user, fetchUserData } = props

  const showData = (follower: dataTypes) => {
    return (
      <FollowerContainer key={follower.id} to={`/anotheruser/${follower.login}`}>
        <Square />
        <ProfilePic src={follower.avatar_url} />
        <LoginName>#{follower.login}</LoginName>
        <AcessContainerFollower >
          <AcessFollowerIcon />
        </AcessContainerFollower>
      </FollowerContainer>)
  }

  return (
    <FollowersContainer>
      <FollowersHeader>
        <ExitContainer
          to={userName === mainUserName? `/${mainUserName}`: `/anotheruser/${subordinateUserName}`}
        >
          <ExitIcon />
        </ExitContainer>
        <NumberOfFollowers>
          {user.followers} seguidores
        </NumberOfFollowers>
      </FollowersHeader>
      <FollowersBody>
        <Paginator
          typePage={'followers'}
          showData={showData}
          numOfElements={user.followers}
          fetchUserData={fetchUserData}
          mainUserName={mainUserName}
          subordinateUserName={subordinateUserName}
           />
      </FollowersBody>
      <FollowersFooter>
        <Navbar activePage='followers' userName={userName} />
      </FollowersFooter>
    </FollowersContainer>
  )
}