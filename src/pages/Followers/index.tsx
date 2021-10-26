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
import { dataTypes, RouteParams } from '../../interface'
import { Paginator } from '../../components/Paginator'

export const Followers = (props: any) => {
  const { id }: RouteParams = useParams()
  const { user } = props

  const showData = (follower: dataTypes) => {
    return (
      <FollowerContainer key={follower.id}>
        <Square />
        <ProfilePic src={follower.avatar_url} />
        <LoginName>#{follower.login}</LoginName>
        <AcessContainerFollower to={`/user/${id}/followers/${follower.login}`}>
          <AcessFollowerIcon />
        </AcessContainerFollower>
      </FollowerContainer>)
  }

  return (
    <FollowersContainer>
      <FollowersHeader>
        <ExitContainer to={`/user/${id}`}>
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
          userName={id}
          numOfElements={user.followers} />
      </FollowersBody>
      <FollowersFooter>
        <Navbar activePage='followers' />
      </FollowersFooter>
    </FollowersContainer>
  )
}