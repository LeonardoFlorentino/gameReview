
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


interface RouteParams{
  id:string
}

export const Navbar = ({activePage}:any) => {
  const {id}:RouteParams = useParams()
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to={`/user/${id}`} color={activePage === 'home'? '#222': '#aaa'}>
            <IconHome />
            <Text>Home</Text>
          </NavLink>
          <NavLink to={`/user/${id}/repos`} color={activePage === 'repos'? '#222': '#aaa'}>
            <IconRepos/>
            <Text>Repos</Text>
          </NavLink>
          <NavLink to={`/user/${id}/followers`} color={activePage === 'followers'? '#222': '#aaa'}>
            <IconFollowers/>
            <Text>Seguidores</Text>
          </NavLink>
          <NavLink to={`/user/${id}/following`} color={activePage === 'followings'? '#222': '#aaa'}>
            <IconFollowing/>
            <Text>Seguindo</Text>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
