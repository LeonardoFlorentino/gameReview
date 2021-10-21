// import {useState} from 'react'
import {
    LoginContainer,
    Button,
    Input,
    Logo,
    NameButton,
    IconArrow
} from "./styles"

import { useHistory } from 'react-router-dom';


export const Login = (props: any) => {
    const history = useHistory();
    const { userName, setUserName } = props

    const updateName = (event: any) => {
        setUserName(event.target.value);
    };
    const onSubmit = async (event: any) => {
        history.push(`/user/${userName}`)
    }

    return (
        <LoginContainer>
            <Logo />
            <Input onChange={(event) => updateName(event)} placeholder="Usuário" type="text"/>
            <Button onClick={onSubmit}>
                <NameButton >
                    ENTRAR
                    <IconArrow />
                </NameButton >
            </Button>
        </LoginContainer>
    )
}
