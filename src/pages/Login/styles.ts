import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'

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


export const Button = styled.button`
    font-size: 15px;
    width: 250px;
    min-height: 40px;
    margin: 5px 0px;
    border-radius: 10px;
    background-color: #ffce00;
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

export const Input = styled.input`
    padding-left: 10px;
    font-size: 15px;
    width: 20vw;
    min-width: 250px;
    height: 40px;
    margin: 5px 0px;
    border: 2px solid #fff;
    border-radius: 10px;
    font-weight: 100;
    color: #555;
    &:hover{
        border: 2px solid #ffce00;
    }
    &::selection{
        background: #ffce00 !important;
    }
`
export const InputError = styled.p`
  position: absolute;
  right: 0;
  margin-right: 16px;
  color: red;
`;