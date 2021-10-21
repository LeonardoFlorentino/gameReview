import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export const FollowersContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    overflow-x: hidden;
`

export const FollowersHeader = styled.div`
    width: 100vw;
    height: 60px;
    display: grid;
    grid-template-columns: 40px 1fr 50px;
    align-items: center;
    justify-items: center;
    
`

export const GoBackButton = styled(FiArrowLeft)`
    margin-left: 40px;
    height: 25px;
    width: 25px;
`

export const NumberOfFollowers = styled.div`
    font-size: 1.2rem;
`

export const FollowersBody = styled.div`
    background-color: #3f3f3f;
    width: 100vw;
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
export const FollowerContainer = styled.div`
    height: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: 0.1fr 0.6fr 2fr 0.3fr;
    justify-items: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: #343434;
    margin-bottom: 4px;
`

export const Square = styled.div`
    background-color: #e6cc12;
    height: 40px;
    width: 10px;
    border-radius: 0px 10px 10px 0px;
    margin-right: 20px;
`

export const ProfilePic = styled.img`
    background-color: #eee;
    border: 3px solid white;
    border-radius: 100%;
    height: 15vw;
    width:15vw;
    max-width: 80px ;
    max-height: 80px ;
    min-width: 60px ;
    min-height: 60px ;
`
export const LoginName = styled.div`
   font-size: 0.8rem;
   font-weight: bold;
   margin-left: 10px;
`

export const AcessButton = styled(FiArrowRight)`

`
export const FollowersFooter = styled.div`
    position: fixed;
    left: 0px;
    bottom: 0px;
`