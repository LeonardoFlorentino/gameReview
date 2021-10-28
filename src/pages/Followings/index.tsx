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

import { useParams } from 'react-router-dom';
import { Paginator } from '../../components/Paginator';
import { Navbar } from '../../components/Navbar'

import { RouteParams, dataTypes } from '../../interface';

interface followingsProps {
  user: dataTypes,
  fetchData: (value1: string, value2: string) => void,
  userName: string,
}

export const Followings = (props: followingsProps) => {
  const { mainUserName }: RouteParams = useParams()
  const { user, fetchData, userName } = props

  const showData = (following: dataTypes) => {
    return (
      <FollowingContainer key={following.id}>
        <Square />
        <ProfilePic src={following.avatar_url} />
        <LoginName>#{following.login}</LoginName>
        <AcessContainerFollowing to={`/${mainUserName}/followings/${following.login}`}>
          <AcessFollowingIcon />
        </AcessContainerFollowing>
      </FollowingContainer>)
  }

  return (
    <FollowingsContainer>
      <FollowingsHeader>
        <ExitContainer to={`/${mainUserName}`}>
          <ExitIcon />
        </ExitContainer>
        <NumberOfFollowers>
          {user.following} seguidores
        </NumberOfFollowers>
      </FollowingsHeader>
      <FollowingsBody>
        <Paginator
          typePage={'following'}
          showData={showData}
          userName={userName}
          numOfElements={user.following}
          fetchUserData={fetchData}
          mainUserName={mainUserName}
        />
      </FollowingsBody>
      <FollowingsFooter>
        <Navbar activePage='followings' />
      </FollowingsFooter>
    </FollowingsContainer>
  )
}