
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

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' >
            <IconHome />
            <Text>Home</Text>
          </NavLink>
          <NavLink to='/' >
            <IconRepos/>
            <Text>Repos</Text>
          </NavLink>
          <NavLink to='/' >
            <IconFollowers/>
            <Text>Seguidores</Text>
          </NavLink>
          <NavLink to='/' >
            <IconFollowing/>
            <Text>Seguindo</Text>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
