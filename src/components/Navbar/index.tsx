
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


interface navBarProps {
  activePage: string,
  userName: string 
}

export const Navbar = ({activePage, userName}:navBarProps) => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to={`/${userName}`} color={activePage === 'home'? '#222': '#aaa'}>
            <IconHome />
            <Text>Home</Text>
          </NavLink>
          <NavLink to={`/${userName}/repos`} color={activePage === 'repos'? '#222': '#aaa'}>
            <IconRepos/>
            <Text>Repos</Text>
          </NavLink>
          <NavLink to={`/${userName}/followers` } color={activePage === 'followers'? '#222': '#aaa'}>
            <IconFollowers/>
            <Text>Seguidores</Text>
          </NavLink>
          <NavLink to={`/${userName}/followings`} color={activePage === 'followings'? '#222': '#aaa'}>
            <IconFollowing/>
            <Text>Seguindo</Text>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
