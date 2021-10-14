import {useState} from 'react'
import { LoginContainer, Button, Input, Logo, NameButton} from "./styles"
import { useHistory } from 'react-router-dom';


export const Login = () => {
    const history = useHistory();
    const [name, setName] = useState("");

    const updateName = (event: any) => {
      setName(event.target.value);
    };
    const onSubmit = (event: any) => {
       history.push(`/user/${name}`)
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
