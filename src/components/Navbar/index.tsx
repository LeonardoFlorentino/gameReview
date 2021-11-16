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
}

export const Navbar = ({activePage}:navBarProps) => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to={`/home`} color={activePage === 'home'? '#222': '#aaa'}>
            <IconHome />
            <Text>Home</Text>
          </NavLink>
          <NavLink to={`/repos`} color={activePage === 'repos'? '#222': '#aaa'}>
            <IconRepos/>
            <Text>Repos</Text>
          </NavLink>
          <NavLink to={`/followers` } color={activePage === 'followers'? '#222': '#aaa'}>
            <IconFollowers/>
            <Text>Seguidores</Text>
          </NavLink>
          <NavLink to={`/following`} color={activePage === 'following'? '#222': '#aaa'}>
            <IconFollowing/>
            <Text>Seguindo</Text>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
