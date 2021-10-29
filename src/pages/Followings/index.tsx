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

import { RouteParams, dataTypes, pageProps } from '../../interface';

export const Followings = (props: pageProps) => {
  const { mainUserName, subordinateUserName }: RouteParams = useParams()
  const { user, fetchUserData, userName } = props

  const showData = (following: dataTypes) => {
    return (
      <FollowingContainer key={following.id} to={`/anotheruser/${following.login}`}>
        <Square />
        <ProfilePic src={following.avatar_url} />
        <LoginName>#{following.login}</LoginName>
        <AcessContainerFollowing >
          <AcessFollowingIcon />
        </AcessContainerFollowing>
      </FollowingContainer>)
  }

  return (
    <FollowingsContainer>
      <FollowingsHeader>
        <ExitContainer
          to={userName === mainUserName? `/${mainUserName}`: `/anotheruser/${subordinateUserName}`}
        >
          <ExitIcon />
        </ExitContainer>
        <NumberOfFollowers>
          Seguindo {user.following}
        </NumberOfFollowers>
      </FollowingsHeader>
      <FollowingsBody>
        <Paginator
          typePage={'following'}
          showData={showData}
          numOfElements={user.following}
          fetchUserData={fetchUserData}
          mainUserName={mainUserName}
          subordinateUserName={subordinateUserName}
        />
      </FollowingsBody>
      <FollowingsFooter>
        <Navbar activePage='followings' userName={userName} />
      </FollowingsFooter>
    </FollowingsContainer>
  )
}