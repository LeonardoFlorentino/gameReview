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
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { loginProps } from '../../interface'

export const Login = ({ userName, setUserName, setUser, fetchUserData }: loginProps) => {
    const [submitedNull, setSubmitedNull] = useState(false);
    const [nameInput, setNameInput] = useState('')
    const history = useHistory()


    useEffect(() => {
        setUserName('')
        setUser({})
    }, [setUserName, setUser])

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
            fetchUserData(nameInput, true)
                .then(response => {
                    if (response === 200) {
                        history.push(`/${nameInput}`)
                        setUserName(nameInput)
                        toast.success(`Usuário encontrado`, 
                        {
                            position: "top-center",
                            autoClose: 1500
                        })
                    }
                    else if (response === 404) {
                        toast.error("Usuário não encontrado",{
                            autoClose: 3000
                        })
                    }
                    else if (response === 403) {
                        toast.error("Limite de tentativas excedido", {
                            autoClose: 3000
                        })
                    }
                })
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
