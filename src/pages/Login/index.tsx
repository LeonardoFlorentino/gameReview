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
import React,{ useState } from "react";

interface loginProps {
    userName: string,
    setUserName: (value:  string | ((prevState:  string) =>  string)) => void 
}

export const Login = ({userName, setUserName }:loginProps) => {
    const history = useHistory();
    const [submitedNull, setSubmitedNull] = useState(false);

    const updateName = (event: React.ChangeEvent<HTMLInputElement> ) => {
        console.log(event)
        setSubmitedNull(false)
        setUserName(event.target.value);
    };

    const onSubmit = async (event: React.ChangeEvent<HTMLButtonElement>) => {
        console.log(typeof event)
        if (userName.length === 0) {
            setSubmitedNull(true);
          }
        else{
            history.push(`/${userName}`)
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
