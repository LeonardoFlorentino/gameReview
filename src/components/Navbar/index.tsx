
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
import { RouteParams } from '../../interface';


export const Navbar = ({activePage}:any) => {
  const {mainUserName}:RouteParams = useParams()
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to={`/user/${mainUserName}`} color={activePage === 'home'? '#222': '#aaa'}>
            <IconHome />
            <Text>Home</Text>
          </NavLink>
          <NavLink to={`/user/${mainUserName}/repos`} color={activePage === 'repos'? '#222': '#aaa'}>
            <IconRepos/>
            <Text>Repos</Text>
          </NavLink>
          <NavLink to={`/user/${mainUserName}/followers` } color={activePage === 'followers'? '#222': '#aaa'}>
            <IconFollowers/>
            <Text>Seguidores</Text>
          </NavLink>
          <NavLink to={`/user/${mainUserName}/followings`} color={activePage === 'followings'? '#222': '#aaa'}>
            <IconFollowing/>
            <Text>Seguindo</Text>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
