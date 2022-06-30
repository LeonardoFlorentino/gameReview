import {
  Nav,
  NavLink,
  NavMenu,
  IconHome,
  // IconRepos,
  // IconFollowers,
  // IconFollowing,
  IconAward,
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
          <NavLink to={`/rating`} color={activePage === 'rating'? '#222': '#aaa'}>
            <IconAward />
            <Text>Avaliação</Text>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
