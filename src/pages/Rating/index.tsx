import {
    HomeContainer,
    HomeHeaderMain,
    LoginName,
    ChangeProfileContainer,
    LogOutIcon,
    HomeBody,
    TitlePage,
    ListRateContainer,
    ElementRateContainer,
    TitleCard,
    InputContainer,
    InputCard,
    RateDisplay,
    ButtonRate,
    ButtonInput,
    ImageCardContainer,
    ImageCard,
    ScoreContainer,
    StarGradeEmpty,
    StarGradeFull,
    HomeFooter
} from './styles';

import { Navbar } from '../../components/Navbar';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useGame } from '../../providers/store';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../providers/auth';


export const Rating = () => {

    const { logout, user } = useAuth()
    const { DB, loadGames, alterGame } = useGame()

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

    const RateComponent = (gameId: number, originalRate: number) => {
        const [rateValue, setRateValue] = useState(0 || originalRate)
        return (
            <>
                <InputContainer>
                    <RateDisplay>{rateValue}</RateDisplay>
                    <ButtonInput onClick={() => setRateValue(rateValue + 1)} >+</ButtonInput >
                    <ButtonInput onClick={() => setRateValue(rateValue - 1)}>-</ButtonInput >
                </InputContainer>
                <ButtonRate onClick={() => alterGame(gameId, user.email, rateValue)}>Enviar</ButtonRate>
            </>
        )
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
                <TitlePage>Notas dos Jogos</TitlePage>
                <ListRateContainer>
                    {DB.isLoaded ?
                        DB.games.map(game => {
                            return (
                                <ElementRateContainer>
                                    <ImageCardContainer>
                                        <ImageCard src={game.image} alt={game.title} />
                                    </ImageCardContainer>
                                    <TitleCard>{game.title}</TitleCard>
                                    <InputCard>
                                        {RateComponent(game.gameId, game.score)}
                                    </InputCard>
                                </ElementRateContainer>
                            )
                        })
                        : <></>
                    }
                </ListRateContainer>
            </HomeBody>
            <HomeFooter>
                <Navbar activePage='rating' />
            </HomeFooter>
        </HomeContainer>
    )
}

