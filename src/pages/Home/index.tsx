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
    StarGradeEmpty,
    StarGradeFull,
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

    const { logout, user } = useAuth()
    const { DB, loadGames } = useGame()

    useEffect(() => {
        if (!DB.isLoaded) {
            loadGames()
        }
    }
        , [DB, loadGames])

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
                <TitlePage>Lista de Jogos</TitlePage>
                <SlidesContainer>
                    {DB.isLoaded ?
                        <Slider {...settings}>
                            {DB.games.map(game =>
                                <CardSlide>
                                    <TitleCard>{game.title}</TitleCard>
                                    <ImageCardContainer>
                                        <ImageCard src={game.image} alt={game.title} />
                                    </ImageCardContainer>
                                    <ScoreContainer >
                                        <AwardIcon/>{game.score} de 10
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

