import { useState } from 'react';

import {
    HomeContainer,
    Logo,
    Button,
    Input,
    NameButton,
    IconArrow,
    InputContainer,
    InputError
} from './styles';

import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { useAuth } from '../../providers/auth';

export const Login = () => {

    const [submitedNull, setSubmitedNull] = useState(false);
    const [nameInput, setNameInput] = useState('')

    const history = useHistory()
    const { login, user } = useAuth() 

    useEffect(() => {
        if (user.email.length !== 0) {
            history.push('/home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value)
        setSubmitedNull(false)
    };

    const onSubmit = () => {
        if (nameInput.length === 0) {
            toast.warning("Insira o nome do usuário", {
                autoClose: 3000
            })
            setSubmitedNull(true);
        }
        else {
            login(nameInput)
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // look for the `Enter` keyCode
        if (event.keyCode === 13 || event.which === 13) {
            onSubmit()
        }
    }
    return (
        <HomeContainer>
            <Logo/>
            <InputContainer>
                    <Input
                        mask={[/^\S*@?\S*$/] }
                        onChange={(event) => updateName(event)}
                        onKeyPress={handleKeyPress}
                        placeholder="Endereço de e-mail"
                        type="text"
                        id='inputGit'
                        autoFocus={true}
                        onBlur={({ target }) => target.focus()}
                    />
                    {submitedNull ? <InputError>Campo obrigatório</InputError> : null}
                </InputContainer>
                <Button onClick={onSubmit}>
                    <NameButton >
                        ENTRAR
                        <IconArrow />
                    </NameButton >
                </Button>
        </HomeContainer>
    )
}

