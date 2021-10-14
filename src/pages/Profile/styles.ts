import styled from "styled-components";
import { FiLogOut } from 'react-icons/fi'

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export const HomeHeader = styled.div`
    margin-top: 20px;
    width: 100vw;
    display: flex;
    flex-direction: line;
    justify-content: space-between;
`

export const LoginName = styled.div`
   font-weight: bold;
   margin-left: 10px;
`
export const ExitContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`
export const Exit = styled(FiLogOut)`
    width: 25px;
    height: 25px;
    color: #BB3C3E;
    margin-right: 20px;
    margin-left: 10px;
`
export const HomeBody = styled.div`
    height: 100%;
    background-color: #343434;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfilePic = styled.img`
    position: relative;
    bottom: 80px;
    align-items: center;
    background-color: #eee;
    border: 3px solid white;
    border-radius: 150px;
    height: 150px;
    width:150px;
`

export const InfoNameContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`


export const Name = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
`

export const ProfileName = styled.div`
    display: flex;
    align-items: flex-end;

`

export const Square = styled.div`
    background-color: #e6cc12;
    height: 40px;
    width: 10px;
    border-radius: 0px 10px 10px 0px;
    margin-right: 20px;
`

export const InfoContainer = styled.div`
    margin-left: 34px;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
`

export const Info = styled.div `
    font-size: 0.8rem;
`

export const ContainerInfoFollowers = styled.div`
    width: 100%;
    padding: 20px 0px;
    background-color:#3C3C3C ;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 40px;

`
export const ContainerInfoFollower = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const InfoFollower = styled.div`
    font-weight: bold;
    font-size: 2rem;
`

export const ContainerBio = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
