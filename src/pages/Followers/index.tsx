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


import { useParams } from 'react-router-dom';
import { Navbar } from '../../components/Navbar'
import { dataTypes, RouteParams } from '../../interface'


let i = 1;

export const Followers = (props: any) => {
  const { id }: RouteParams = useParams()
  const { user, getUser, followers, getFollowers } = props
  while (i <= 1) {
    getUser(id)
    getFollowers(id)
    i++;
  }
  return (
    <ContainerFollowers>
      <ContainerHeader>
        <GoBackButton />
        <NumberOfFollowers>
          {user.followers} seguidores
        </NumberOfFollowers>
      </ContainerHeader>
      <ContainerBody>
        {
          followers.map((follower: dataTypes) => (
            <ProfileContainer key={follower.node_id}>
              <Square />
              <ProfilePic src={follower.avatar_url} />
              <LoginName>#{follower.login}</LoginName>
              <AcessButton />
            </ProfileContainer>))
        }
      </ContainerBody>
      <Footer>
        <Navbar activePage='followers' />
      </Footer>
    </ContainerFollowers>
  )
}