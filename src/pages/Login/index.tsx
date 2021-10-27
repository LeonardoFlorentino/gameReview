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
import { useState } from "react";


export const Login = (Props:any) => {
    const history = useHistory();
    const {userName, setUserName } = Props
    const [submitedNull, setSubmitedNull] = useState(false);

    const updateName = (event: any) => {
        setSubmitedNull(false)
        setUserName(event.target.value);
    };

    const onSubmit = async (event: any) => {
        if (userName.length === 0) {
            setSubmitedNull(true);
          }
        else{
            history.push(`/user/${userName}`)
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
