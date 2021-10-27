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
  const { mainUserName }: RouteParams = useParams()
  const { user, fetchData, setUserName, userName} = props

  const showData = (following: dataTypes) => {
    return (
      <FollowingContainer key={following.id}>
        <Square />
        <ProfilePic src={following.avatar_url} />
        <LoginName>#{following.login}</LoginName>
        <AcessContainerFollowing to={`/user/${mainUserName}/followings/${following.login}`}>
          <AcessFollowingIcon />
        </AcessContainerFollowing>
      </FollowingContainer>)
  }

  return (
    <FollowingsContainer>
      <FollowingsHeader>
        <ExitContainer to={`/user/${mainUserName}`}>
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
          setUserName={setUserName}
           />
      </FollowingsBody>
      <FollowingsFooter>
        <Navbar activePage='followings' />
      </FollowingsFooter>
    </FollowingsContainer>
  )
}