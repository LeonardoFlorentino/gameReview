import { FiArrowRight } from 'react-icons/fi'
import { LoginContainer, Button, Input, Logo} from "./styles"

const Login = () => {
    const arrowRightIconStyle = {
        size: 20,
        marginLeft: '4px'
    }

    return (
        <LoginContainer>
            <Logo/>
            <Input placeholder="Usuário" />
            <Button >
                ENTRAR
                <FiArrowRight style={arrowRightIconStyle}/>
            </Button>
        </LoginContainer>
    )
}

export default Login