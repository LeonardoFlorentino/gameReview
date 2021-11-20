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

import { Paginator } from '../../components/Paginator';
import { Navbar } from '../../components/Navbar'

import { dataTypes } from '../../interface';

import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../providers/auth';

export const Followings = () => {
  const {user, getAnotherUser} = useAuth()
  const userName = user.login

  const history = useHistory()

  useEffect(() => {
    if (!user.isLogged) {
      history.push('/')
      toast.error("Usuário não logado", {
        autoClose: 3000
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const onSubmit = (name: string) => {
    getAnotherUser(name) 
  }

  const showData = (following: dataTypes) => {
    return (
      <FollowingContainer key={following.id} onClick={() => onSubmit(following.login || '')} to={`/anotherUser`}>
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
        <ExitContainer to={`/home`}>
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
          userName={userName}
        />
      </FollowingsBody>
      <FollowingsFooter>
        <Navbar activePage='following' />
      </FollowingsFooter>
    </FollowingsContainer>
  )
}