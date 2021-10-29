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
  const { mainUserName, subordinateUserName }: RouteParams = useParams()
  const { user, fetchData, userName } = props

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
          fetchUserData={fetchData}
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