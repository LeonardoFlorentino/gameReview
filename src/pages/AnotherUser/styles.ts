import styled from "styled-components";
import { FiLogIn, FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    overflow-x: hidden;
`

export const HomeHeaderMain = styled.div`
    padding: 20px 0px;
    width: 100vw;
    display: flex;
    flex-direction: line;
    justify-content: space-between;
`

export const HomeHeaderFollow = styled.div`
    height: 60px;
    display: grid;
    grid-template-columns: 60px 1fr 60px;
    align-items: center;
    justify-items: center;
`

export const LoginName = styled.div`
   font-weight: bold;
   color: inherit;
   text-decoration: none;
`

export const ExitContainer = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
`

export const ExitIcon = styled(FiArrowLeft)`
    width: 25px;
    height: 25px;
`

export const ChangeProfileContainer = styled(Link)`
    margin-right: 60px;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
`
export const ButtonChangeProfile = styled.button`
	background: none;
	color: inherit;
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: inherit;
    text-decoration: none;
`

export const LogInIcon = styled(FiLogIn)`
    margin-left: 5px;
    width: 25px;
    height: 25px;
`

export const HomeBody = styled.div`
    background-color: #343434;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:after{
        content: "";
        display: block;
        height: 60px;
        width: 100%
    }
`

export const ProfileContainer = styled.div`
    display: flex;
    width: 100vw;
    padding: 20px 0px;
    justify-content: center;
    background: conic-gradient(#292929 0.25turn, #343434 0.25turn 0.5turn, #343434 0.5turn 0.75turn, #292929 0.75turn);
`

export const ProfilePic = styled.img`
    align-items: center;
    background-color: #eee;
    border: 3px solid white;
    border-radius: 100%;
    height: 150px;
    width:150px;
`

export const MainInfoContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas:
    "a b"
    "c d";
    grid-template-columns: 20px 1fr;
    grid-auto-rows: 1fr 1fr;
    justify-items: start;
`

export const NameLocationContainer = styled.div`
    display: flex;
    padding: 10px 0px;
    flex-direction: column;
`

export const Square = styled.div`
    grid-area:a;
    align-self: start;
    background-color: #e6cc12;
    height: 40px;
    width: 10px;
    border-radius: 0px 10px 10px 0px;
    margin-right: 20px;
`

export const Name = styled.div`
    width: 100%;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    color: inherit;
    text-decoration: none;
`

export const InfoName = styled.div`
    font-size: 0.8rem;
`

export const InfosContainer = styled.div`
    width: 100%;
    padding: 20px 0px;
    background-color:#3C3C3C ;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 40px;

`

export const InfoNumber = styled.div`
    font-weight: bold;
    font-size: 2rem;
`


export const HomeFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
`