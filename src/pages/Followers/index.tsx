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
import { useEffect } from 'react'
import { Paginator } from '../../components/Paginator'

export const Followers = (props: any) => {
  const { id }: RouteParams = useParams()
  const { user, followers, getFollowers } = props
  useEffect(() => {
    const loadData = async () => {
      await getFollowers(id)
    }
    loadData()
  })

  const showData = (follower: dataTypes) => {
    return (
      <FollowerContainer key={follower.node_id}>
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
        <Paginator showData={showData} userName={id} followers={user.followers} />
      </FollowersBody>
      <FollowersFooter>
        <Navbar activePage='followers' />
      </FollowersFooter>
    </FollowersContainer>
  )
}