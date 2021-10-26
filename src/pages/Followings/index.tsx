import {
  FollowingsContainer,
  FollowingsHeader,
  ExitContainer,
  ExitIcon,
  NumberOfFollowers,
  FollowingsBody,
  FollowingContainer,
  Square,
  ProfilePic,
  LoginName,
  AcessFollowingIcon,
  AcessContainerFollowing,
  FollowingsFooter
} from './styles'

import { dataTypes } from '../../interface'
import { useParams } from 'react-router-dom';
import { Paginator } from '../../components/Paginator';
import { Navbar } from '../../components/Navbar'

import { RouteParams } from '../../interface';

export const Followings = (props: any) => {
  const { id }: RouteParams = useParams()
  const { user } = props

  const showData = (following: dataTypes) => {
    return (
      <FollowingContainer key={following.id}>
        <Square />
        <ProfilePic src={following.avatar_url} />
        <LoginName>#{following.login}</LoginName>
        <AcessContainerFollowing to={`/user/${id}/followers/${following.login}`}>
          <AcessFollowingIcon />
        </AcessContainerFollowing>
      </FollowingContainer>)
  }

  return (
    <FollowingsContainer>
      <FollowingsHeader>
        <ExitContainer to={`/user/${id}`}>
          <ExitIcon />
        </ExitContainer>
        <NumberOfFollowers>
          {user.followers} seguidores
        </NumberOfFollowers>
      </FollowingsHeader>
      <FollowingsBody>
        <Paginator
          typePage={'following'}
          showData={showData}
          userName={id}
          numOfElements={user.following} />
      </FollowingsBody>
      <FollowingsFooter>
        <Navbar activePage='followers' />
      </FollowingsFooter>
    </FollowingsContainer>
  )
}