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
    AverageSocore,
    HomeFooter
} from './styles';

import { Navbar } from '../../components/Navbar';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useGame } from '../../providers/store';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../providers/auth';
import { useHistory } from 'react-router';

const RateComponent = ({id}:{id:number}) => {

    const { user } = useAuth()
    const [rateValue, setRateValue] = useState(0)
    const {  alterGame } = useGame()

    const increment = (originalValue: number) => {
        if( 0 > originalValue || originalValue >= 10 ){
            return originalValue
        }
        else{
            return originalValue + 1
        }
    }

    const decrement = (originalValue: number) => {
        if( 0 >= originalValue || originalValue > 10 ){
            return originalValue
        }
        else{
            return originalValue - 1
        }
    }
    return (
        <>
            <InputContainer>
                <ButtonInput onClick={() => setRateValue(increment(rateValue))} >+</ButtonInput >
                <RateDisplay>{rateValue}</RateDisplay>
                <ButtonInput onClick={() => setRateValue(decrement(rateValue))}>-</ButtonInput >
            </InputContainer>
            <ButtonRate onClick={async () => { alterGame(id, user.email, rateValue) }}>Enviar</ButtonRate>
        </>
    )
}

export const Rating = () => {

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
                        DB.games.map((game, key) => {
                            return (
                                <ElementRateContainer key={key}>
                                    <ImageCardContainer>
                                        <ImageCard src={game.image} alt={game.title} />
                                        <AverageSocore>
                                            {`média: ${(Math.round(game.score*100)/100).toFixed(1)}`}
                                        </AverageSocore>
                                    </ImageCardContainer>
                                    <TitleCard>{game.title}</TitleCard>
                                    <InputCard>
                                        <RateComponent id={game.id}/>
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

