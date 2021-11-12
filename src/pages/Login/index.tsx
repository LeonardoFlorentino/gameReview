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

import { useHistory } from "react-router";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { getUserAsync } from "../../store/user/userSlice";

export const Login = () => {
    const [submitedNull, setSubmitedNull] = useState(false);
    const [nameInput, setNameInput] = useState('')
    const history = useHistory()

    const dispatch = useDispatch()

    const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(event.target.value)
        setSubmitedNull(false)
    };

    const onSubmit = async () => {
        if (nameInput.length === 0) {
            toast.warning("Insira o nome do usuário", {
                autoClose: 3000
            })
            setSubmitedNull(true);
        }
        else {
            dispatch(getUserAsync(nameInput))
            history.push(`/${nameInput}`)
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // look for the `Enter` keyCode
        if (event.keyCode === 13 || event.which === 13) {
            onSubmit()
        }
    }

    return (
        <div>
            <LoginContainer>
                <Logo />
                <InputContainer>
                    <Input
                        onChange={(event) => updateName(event)}
                        onKeyPress={handleKeyPress}
                        placeholder="Usuário"
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
            </LoginContainer>
        </div>
    )
}
