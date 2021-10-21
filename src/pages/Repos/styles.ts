import styled from "styled-components";
import { FiArrowLeft, FiLock, FiUnlock } from 'react-icons/fi'
import {AiOutlineStar} from 'react-icons/ai'

export const ReposContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    overflow-x: hidden;
`

export const ReposHaeder = styled.div`
    width: 100vw;
    height: 60px;
    display: grid;
    grid-template-columns: 40px 1fr 50px;
    align-items: center;
    justify-items: center;
    
`

export const GoBackButton = styled(FiArrowLeft)`
    margin-left: 20px;
    height: 25px;
    width: 25px;
`

export const NumberOfFollowers = styled.div`
    font-size: 1.2rem;
`

export const ReposBody = styled.div`
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
export const RepoContainer = styled.div`
    padding: 10px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: #343434;
    margin-bottom: 3px;
`
export const NameContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0px;
`
export const Square = styled.div`
    background-color: #e6cc12;
    height: 40px;
    width: 10px;
    border-radius: 0px 10px 10px 0px;
    margin-right: 20px;
`

export const RepoName = styled.div`
   font-weight: bold;
`

export const RepoDescription = styled.div`
    font-size: 0.8rem;
    font-weight: lighter;
    padding-left: 32px;
`

export const IconsContainer = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;

`

export const IconLockContainer = styled.div`
    margin-right: 32px;
   display : flex ;
   flex-direction: row;
   width: 80px;
   justify-content: space-between;
`

export const IconLock = styled(FiLock)`
    color:red;

`

export const IconUnLock = styled(FiUnlock)`
    color: green;

`
export const StarContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`

export const StarNumbers = styled.div`
    /* /* position: relative;
    bottom: 6.5px; */
    /* font-size: 1.0rem; */
    /* margin-left: 5px;
    font-weight: lighter ; */ 
`

export const IconStar = styled(AiOutlineStar)`
    margin-left: 32px;
    color: yellow;
`

export const ReposFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
`