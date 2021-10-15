
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

interface Props{
  path?: string
}

export const Navbar = (props: Props) => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/user/LeonardoFlorentino' >
            <IconHome />
            <Text>Home</Text>
          </NavLink>
          <NavLink to='/user/LeonardoFLorentino/Repos' >
            <IconRepos/>
            <Text>Repos</Text>
          </NavLink>
          <NavLink to='/user/LeonardoFlorentino/followers' >
            <IconFollowers/>
            <Text>Seguidores</Text>
          </NavLink>
          <NavLink to='/user/LeonardoFlorentino/following' >
            <IconFollowing/>
            <Text>Seguindo</Text>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
