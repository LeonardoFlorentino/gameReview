
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

interface navBarProps {
  activePage: string
}

export const Navbar = ({activePage}:navBarProps) => {
  const {mainUserName}:RouteParams = useParams()
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to={`/${mainUserName}`} color={activePage === 'home'? '#222': '#aaa'}>
            <IconHome />
            <Text>Home</Text>
          </NavLink>
          <NavLink to={`/${mainUserName}/repos`} color={activePage === 'repos'? '#222': '#aaa'}>
            <IconRepos/>
            <Text>Repos</Text>
          </NavLink>
          <NavLink to={`/${mainUserName}/followers` } color={activePage === 'followers'? '#222': '#aaa'}>
            <IconFollowers/>
            <Text>Seguidores</Text>
          </NavLink>
          <NavLink to={`/${mainUserName}/followings`} color={activePage === 'followings'? '#222': '#aaa'}>
            <IconFollowing/>
            <Text>Seguindo</Text>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
