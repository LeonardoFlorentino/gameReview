
import {
  Nav,
  NavLink,
  NavMenu,
  IconHome,
  IconRepos,
  IconFollowers,
  IconFollowing,
  Text
} from './styles';

import {useParams} from 'react-router-dom'

interface Props{
  path?: string
}

interface RouteParams{
  id:string
}

export const Navbar = (props: Props) => {
  const {id}:RouteParams = useParams()
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to={`/user/${id}`} >
            <IconHome />
            <Text>Home</Text>
          </NavLink>
          <NavLink to={`/user/${id}/repos`} >
            <IconRepos/>
            <Text>Repos</Text>
          </NavLink>
          <NavLink to={`/user/${id}/followers`} >
            <IconFollowers/>
            <Text>Seguidores</Text>
          </NavLink>
          <NavLink to={`/user/${id}/following`} >
            <IconFollowing/>
            <Text>Seguindo</Text>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
