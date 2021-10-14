import styled from "styled-components";
import {FiLock, FiUnlock} from 'react-icons/fi'

export const ContainerRepos = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerHeader = styled.div`
    width: 100vw;
    height: 90px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    
`


export const NumberOfFollowers = styled.div`
    font-size: 1.2rem;
`

export const ContainerBody = styled.div`
    background-color: #3f3f3f;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContainerRepo = styled.div`
    height: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: 0.1fr 0.6fr 2fr 0.3fr;
    justify-items: flex-start;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: #343434;
    margin-bottom: 2px;
`

export const Square = styled.div`
    background-color: #e6cc12;
    height: 40px;
    width: 10px;
    border-radius: 0px 10px 10px 0px;
    padding-right: 20px;
`


