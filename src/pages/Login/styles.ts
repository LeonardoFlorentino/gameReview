import styled from "styled-components";
import { IoLogoGameControllerA } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'
import InputMask from "react-input-mask";

export const HomeContainer = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`
export const Logo = styled(IoLogoGameControllerA)`
    color: #00fa9a;
    width: 200px;
    height: 200px;
    padding-bottom: 50px;
    border: 1px solid;
    padding: 10px;
    border-radius:20px ;
    box-shadow: 5px 5px;
    margin: 20px;
`

export const Button = styled.button`
    font-size: 15px;
    width: 250px;
    min-height: 40px;
    margin: 5px 0px;
    border-radius: 10px;
    background-color: #00fa9a;
    color: #555;
    cursor:pointer ;
    border: 1px solid #eee;
    &:hover{
        color: #444;
        -webkit-box-shadow: 0px 0px 5px 1px #ffe100;
        -moz-box-shadow: 0px 0px 5px 1px #ffe100;
        box-shadow: 0px 0px 5px 1px white;
    }
`

export const NameButton = styled.div`
    font-weight: bold;
    display: flex;
    justify-content: center;
`

export const IconArrow = styled(FiArrowRight)`
    position: relative;
    bottom: 3px;
    height: 20px;
    width: 20px;
    margin-left: 4px;
`

export const InputContainer = styled.div`
  position: relative;
  display: flex; 
  font-size: 0.7rem;
  justify-content: flex-end;
  align-items: center;
`

export const Input = styled(InputMask)`
    padding-left: 10px;
    font-size: 15px;
    width: 250px;
    height: 40px;
    margin: 5px 0px;
    border: 2px solid #fff;
    border-radius: 10px;
    font-weight: 100;
    color: #555;
    &:hover{
        border: 2px solid #00fa9a;
    }
    &::selection{
        background: #b2fde0 !important;
    }
`
export const InputError = styled.p`
  position: absolute;
  right: 0;
  margin-right: 16px;
  color: red;
`;

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
    grid-template-columns: 60px 1fr 100px;
    align-items: center;
    justify-items: center;
`

export const LoginName = styled(Link)`

   font-weight: bold;
   cursor: pointer;
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

export const ChangeProfileContainer = styled(Link)`
    margin-right: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
`

export const LogOutIcon = styled(FiLogOut)`
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

export const InfoContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    cursor: pointer;
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