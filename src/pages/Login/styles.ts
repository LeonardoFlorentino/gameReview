import styled from 'styled-components'
// import {GitHub} from '@styled-icons/bootstrap/Github'
import { AiFillGithub } from 'react-icons/ai'

export const LoginContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Logo = styled(AiFillGithub)`
    color: #ffce00;
    width: 200px;
    height: 200px;
    padding-bottom: 50px;

`

export const Input = styled.input`
    font-size: 15px;
    width: 20vw;
    min-width: 250px;
    height: 40px;
    margin: 5px 0px;
    border: 2px solid #fff;
    border-radius: 10px;
`

export const Button = styled.button`
    display: flex;
    align-items:center;
    justify-content: center;

    font-size: 15px;
    width: 20vw;
    min-width: 250px;
    height: 40px;
    margin: 5px 0px;
    border: 2px solid #ffce00;
    border-radius: 10px;
    background-color: #ffce00;
    color: #292929;
`

