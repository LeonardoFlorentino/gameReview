import {
    HomeContainer,
    HomeHeaderMain,
    LoginName,
    ChangeProfileContainer,
    LogOutIcon,
    HomeBody,
    TitlePage,
    ListRateContainer,
    HomeFooter
} from './styles';


import { Navbar } from '../../components/Navbar';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useGame } from '../../providers/store';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../providers/auth';
import { useHistory } from 'react-router';
import { useTheme } from "@material-ui/core/styles";
import { Paginator } from '../../components/Paginator'


export const Rating = () => {

    const history = useHistory()
    const { logout, user } = useAuth()
    const { DB, loadGames } = useGame()
    const muiTheme = useTheme();

    useEffect(() => {
        if (!DB.isLoaded) {
            loadGames()
        }
        if (user.email.length === 0) {
            history.push('/')
            toast.error("Usuário não logado", {
                autoClose: 3000
            })
        }
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [DB, loadGames, user])

    const onSubmit = () => {
        logout()
        toast.error("Usuário deslogado", {
            autoClose: 3000
        })
    }


    return (
        <HomeContainer>
            <HomeHeaderMain>
                <LoginName to={`/home`} style={{ marginLeft: '20px' }}>
                    #{user.email}
                </LoginName  >
                <ChangeProfileContainer to='/' style={{ right: '10px' }} onClick={() => onSubmit()}>
                    Sair<LogOutIcon color={'red'} />
                </ChangeProfileContainer>
            </HomeHeaderMain>
            <HomeBody>
                <TitlePage theme={muiTheme}>Notas dos Jogos</TitlePage>
                <ListRateContainer theme={muiTheme}>
                    <Paginator
                        numOfElements={DB.totalElements}
                    />
                </ListRateContainer>
            </HomeBody>
            <HomeFooter>
                <Navbar activePage='rating' />
            </HomeFooter>
        </HomeContainer>
    )
}

