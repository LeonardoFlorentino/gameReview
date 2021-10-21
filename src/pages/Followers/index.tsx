import {
  FollowersContainer,
  FollowersHeader,
  GoBackButton,
  NumberOfFollowers,
  FollowersBody,
  FollowerContainer,
  Square,
  ProfilePic,
  LoginName,
  AcessButton,
  FollowersFooter
} from './styles'


import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar'
import { dataTypes, RouteParams } from '../../interface'


let i = 1;

export const Followers = (props: any) => {
  const { id }: RouteParams = useParams()
  const { user, followers, getFollowers } = props
  while (i <= 1) {
    getFollowers(id)
    i++;
  }
  return (
    <FollowersContainer>
      <FollowersHeader>
        <GoBackButton />
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
              <AcessButton />
            </FollowerContainer>))
        }
      </FollowersBody>
      <FollowersFooter>
        <Navbar activePage='followers' />
      </FollowersFooter>
    </FollowersContainer>
  )
}