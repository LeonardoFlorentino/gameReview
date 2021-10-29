// import {useState} from 'react'
import {
    LoginContainer,
    Button,
    Input,
    Logo,
    NameButton,
    IconArrow,
    InputContainer,
    InputError
} from "./styles"

import { useHistory } from 'react-router-dom';
import React,{ useState, useEffect } from "react";

import {dataTypes} from '../../interface'
interface loginProps {
    userName: string,
    setUser: (value: dataTypes | ((prevState:  dataTypes) =>  dataTypes)) => void,
    setUserName: (value:  string | ((prevState:  string) =>  string)) => void 
}

export const Login = ({userName, setUserName, setUser }:loginProps) => {
    const history = useHistory();
    const [submitedNull, setSubmitedNull] = useState(false);
    const [nameInput, setNameInput] = useState('')

    useEffect(() => {
        setUserName('')
        setUser({})
    }, [setUserName,setUser])

    const updateName = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setNameInput(event.target.value)
        setSubmitedNull(false)
    };

    const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        if (nameInput.length === 0) {
            setSubmitedNull(true);
          }
        else{
            history.push(`/${nameInput}`)
            setUserName(nameInput);
        }
    }

    return (
        <LoginContainer>
            <Logo />
            <InputContainer>
                <Input onChange={(event) => updateName(event)} placeholder="Usuário" type="text" id='inputGit' />
                {submitedNull ? <InputError>Campo obrigatório</InputError> : null}
            </InputContainer>
            <Button onClick={onSubmit}>
                <NameButton >
                    ENTRAR
                    <IconArrow />
                </NameButton >
            </Button>
        </LoginContainer>
    )
}
