import {
    HomeContainer,
    HomeHeaderMain,
    LoginName,
    ChangeProfileContainer,
    LogOutIcon,
    HomeBody,
    TitlePage,
    SlidesContainer,
    CardSlide,
    TitleCard,
    ImageCardContainer,
    ImageCard,
    ScoreContainer,
    AwardIcon,
    HomeFooter
} from './styles';

import { Navbar } from '../../components/Navbar';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useGame } from '../../providers/store';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../providers/auth';
import { useHistory } from 'react-router';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
};

export const Home = () => {

    const history = useHistory()
    const { logout, user } = useAuth()
    const { DB, loadGames } = useGame()

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
                <TitlePage>Lista de Jogos</TitlePage>
                <SlidesContainer>
                    {DB.isLoaded ?
                        <Slider {...settings}>
                            {DB.games.map((game, key) =>
                                <CardSlide key={key}>
                                    <TitleCard>{game.title}</TitleCard>
                                    <ImageCardContainer>
                                        <ImageCard src={game.image} alt={game.title} />
                                    </ImageCardContainer>
                                    <ScoreContainer >
                                        <AwardIcon />{`${(Math.round(game.score*100)/100).toFixed(1)} de 10`} 
                                    </ScoreContainer >
                                </CardSlide>)}
                        </Slider>
                        : <></>
                    }
                </SlidesContainer>
            </HomeBody>
            <HomeFooter>
                <Navbar activePage='home' />
            </HomeFooter>
        </HomeContainer >
    )
}

