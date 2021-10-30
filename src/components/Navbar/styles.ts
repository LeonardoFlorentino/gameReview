import { FiGithub } from 'react-icons/fi'
import { BiHomeAlt } from 'react-icons/bi'
import { BiGroup } from 'react-icons/bi'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #eee;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 60px;
  width: 100vw;
`;

export const NavMenu = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ color }) => color};
  text-decoration: none;
  cursor: pointer;

  &:active {
    color: white;
  }
  &:hover{
    color: #222;
  }
`;

const sizeIcon = 25

export const IconHome = styled(BiHomeAlt)`
    width: ${sizeIcon}px;
    height: ${sizeIcon}px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: baseline;
    justify-items: baseline;
`

export const IconRepos = styled(FiGithub)`
    width: ${sizeIcon}px;
    height: ${sizeIcon}px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: baseline;
    justify-items: baseline;

`

export const IconFollowers = styled(BiGroup)`
    width: ${sizeIcon}px;
    height: ${sizeIcon}px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: baseline;
    justify-items: baseline;

`

export const IconFollowing = styled(BiGroup)`
    width: ${sizeIcon}px;
    height: ${sizeIcon}px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: baseline;
    justify-items: baseline;

`

export const Text = styled.div`
    font-size: 0.8rem;
    margin: 2px 0;
`