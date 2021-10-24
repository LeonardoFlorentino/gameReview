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


export const Followers = (props: any) => {
  const { id }: RouteParams = useParams()
  const { user, followers, getFollowers } = props
  console.log("page: ", useParams())
  useEffect(() => {
    const loadData = async () => {
      await getFollowers(id)
    }
    loadData()
  })

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
        {
          followers.map((following: dataTypes) => (
            <FollowerContainer key={following.node_id}>
              <Square />
              <ProfilePic src={following.avatar_url} />
              <LoginName>#{following.login}</LoginName>
              <AcessContainerFollower to={`/user/${id}/followers/${following.login}`}>
                <AcessFollowerIcon />
              </AcessContainerFollower>
            </FollowerContainer>))
        }
      </FollowersBody>
      <FollowersFooter>
        <Navbar activePage='followers' />
      </FollowersFooter>
    </FollowersContainer>
  )
}