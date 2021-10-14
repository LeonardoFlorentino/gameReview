import { FiGithub } from 'react-icons/fi'
import { BiHomeAlt } from 'react-icons/bi'
import { BiGroup } from 'react-icons/bi'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #eee;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content:space-around;
  align-items: center;
  @media (max-width: 360px) {
    width: 360px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#aaa;
  text-decoration: none;
  padding: 0px 8vw;
  cursor: pointer;

  &:active {
    color: white;
  }
  &:hover{
    color: #222;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 300px) {
    width: 300px;
  }
`;

export const IconHome = styled(BiHomeAlt)`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: baseline;
    justify-items: baseline;
`

export const IconRepos = styled(FiGithub)`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: baseline;
    justify-items: baseline;

`

export const IconFollowers = styled(BiGroup)`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: baseline;
    justify-items: baseline;

`

export const IconFollowing = styled(BiGroup)`
    width: 30px;
    height: 30px;
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