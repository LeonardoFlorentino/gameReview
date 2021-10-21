import {
  FollowingsContainer,
  FollowingsHeader,
  GoBackButton,
  NumberOfFollowers,
  FollowingsBody,
  FollowingContainer,
  Square,
  ProfilePic,
  LoginName,
  AcessButton,
  FollowingsFooter
} from './styles'

import { dataTypes } from '../../interface'

import { useParams } from 'react-router-dom';

import { Navbar } from '../../components/Navbar'

// import { data } from '../../data/data'
interface RouteParams {
  username: string,
  id: string
}



let i = 1;

export const Followings = (props: any) => {
  const { id }: RouteParams = useParams()
  const { user, followings, getFollowings } = props

  while (i <= 1) {
    getFollowings(id)
    i++;
  }
  return (
    <FollowingsContainer>
      <FollowingsHeader>
        <GoBackButton />
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
              <AcessButton />
            </FollowingContainer>))
        }
      </FollowingsBody>
      <FollowingsFooter>
        <Navbar activePage='followings' />
      </FollowingsFooter>
    </FollowingsContainer>
  )
}