import {
    HomeContainer,
    HomeHeaderMain,
    LoginName,
    ChangeProfileContainer,
    LogOutIcon,
    HomeBody,
    TitlePage,
    SlidesContainer,
    LoadingPage,
    CardSlide,
    TitleCard,
    SliderModified,
    ImageCardContainer,
    ImageCard,
    ScoreContainer,
    AwardIcon,
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



export const Home = () => {

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
                    #{user?.email}
                </LoginName  >
                <ChangeProfileContainer to='/' style={{ right: '10px' }} onClick={() => onSubmit()}>
                    Sair<LogOutIcon color={'red'} />
                </ChangeProfileContainer>
            </HomeHeaderMain>
            <HomeBody>
                <TitlePage theme={muiTheme}>Lista de Jogos</TitlePage>
                <SlidesContainer>
                    {DB.isLoaded ?
                        <SliderModified theme={muiTheme}>
                            {DB.games.map((game, key) =>
                                <CardSlide key={key}  theme={muiTheme}>
                                    <TitleCard theme={muiTheme}>{game.title}</TitleCard>
                                    <ImageCardContainer>
                                        <ImageCard src={game.image} alt={game.title} />
                                    </ImageCardContainer>
                                    <ScoreContainer theme={muiTheme} >
                                        <AwardIcon />{`${(Math.round(game.score * 100) / 100).toFixed(1)} de 10`}
                                    </ScoreContainer >
                                </CardSlide>)}
                        </SliderModified>
                        : <LoadingPage>Carregando jogos...</LoadingPage>
                    }
                </SlidesContainer>
            </HomeBody>
            <HomeFooter>
                <Navbar activePage='home' />
            </HomeFooter>
        </HomeContainer >
    )
}

