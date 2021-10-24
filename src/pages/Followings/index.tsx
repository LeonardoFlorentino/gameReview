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
import { useEffect } from 'react';
import { Navbar } from '../../components/Navbar'

import { RouteParams } from '../../interface';

export const Followings = (props: any) => {
  const { id}: RouteParams = useParams()
  const { user, followings, getFollowings } = props

  useEffect(() => {
    const loadData = async () => {
      await getFollowings(id)
    }
    loadData()
  },)

  return (
    <FollowingsContainer>
      <FollowingsHeader>
        <ExitContainer to={`/user/${id}`}>
          <ExitIcon />
        </ExitContainer>
        <NumberOfFollowers>
          Seguindo {user.following}
        </NumberOfFollowers>
      </FollowingsHeader>
      <FollowingsBody>
        {
          followings.map((following: dataTypes) => (
            <FollowingContainer key={following.node_id}>
              <Square />
              <ProfilePic src={following.avatar_url} />
              <LoginName>#{following.login}</LoginName>
              <AcessContainerFollowing to={`/user/${id}/followings/${following.login}`}>
                <AcessFollowingIcon />
              </AcessContainerFollowing>
            </FollowingContainer>))
        }
      </FollowingsBody>
      <FollowingsFooter>
        <Navbar activePage='followings' />
      </FollowingsFooter>
    </FollowingsContainer>
  )
}