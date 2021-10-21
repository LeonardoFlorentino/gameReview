import {
  ContainerFollowers,
  ContainerHeader,
  GoBackButton,
  NumberOfFollowers,
  ContainerBody,
  ProfileContainer,
  Square,
  ProfilePic,
  LoginName,
  AcessButton,
  Footer
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

export const Following = (props: any) => {
  const { id }: RouteParams = useParams()
  const { user, getUser, followings, getFollowings } = props

  while (i <= 1) {
    getUser(id)
    getFollowings(id)
    i++;
  }
  return (
    <ContainerFollowers>
      <ContainerHeader>
        <GoBackButton />
        <NumberOfFollowers>
          Seguindo {user.following}
        </NumberOfFollowers>
      </ContainerHeader>
      <ContainerBody>
        {
          followings.map((following: dataTypes) => (
            <ProfileContainer key={following.node_id}>
              <Square />
              <ProfilePic src={following.avatar_url} />
              <LoginName>#{following.login}</LoginName>
              <AcessButton />
            </ProfileContainer>))
        }
      </ContainerBody>
      <Footer>
        <Navbar activePage='followings' />
      </Footer>
    </ContainerFollowers>
  )
}