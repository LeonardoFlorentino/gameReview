// import {useState} from 'react'
import { LoginContainer, Button, Input, Logo, NameButton} from "./styles"
import { useHistory } from 'react-router-dom';


export const Login = (props:any) => {
    const history = useHistory();
    const {userName, updateUserName } = props

    const updateName = (event: any) => {
      updateUserName(event.target.value);
    };
    const onSubmit = async (event: any) => {
       history.push(`/user/${userName}`)
    }

    return (
        <LoginContainer>
            <Logo/>
            <Input onChange={(event) => updateName(event)} placeholder="Usuário" />
            <Button onClick={onSubmit}>
                ENTRAR
                <NameButton/>
            </Button>
        </LoginContainer>
    )
}
