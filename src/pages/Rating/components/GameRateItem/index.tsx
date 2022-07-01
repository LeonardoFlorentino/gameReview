
import {
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
} from './styles';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useGame } from '../../../../providers/store';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../../../providers/auth';
import { useHistory } from 'react-router';
import { useTheme } from "@material-ui/core/styles";

export const RateComponent = ({ id }: { id: number }) => {

    const { user } = useAuth()
    const [rateValue, setRateValue] = useState(0)
    const { alterGame } = useGame()

    const increment = (originalValue: number) => {
        if (0 > originalValue || originalValue >= 10) {
            return originalValue
        }
        else {
            return originalValue + 1
        }
    }

    const decrement = (originalValue: number) => {
        if (0 >= originalValue || originalValue > 10) {
            return originalValue
        }
        else {
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

export const RateList = ({ id, key, game }: { id: number, key: number,game:any }) => {
    const history = useHistory()
    const { user } = useAuth()
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


    return (
        <>
            <ElementRateContainer key={key} theme={muiTheme}>
                <ImageCardContainer theme={muiTheme}>
                    <ImageCard src={game.image} alt={game.title} />
                    <AverageSocore theme={muiTheme}>
                        {`média: ${(Math.round(game.score * 100) / 100).toFixed(1)}`}
                    </AverageSocore>
                </ImageCardContainer>
                <TitleCard theme={muiTheme}>{game.title}</TitleCard>
                <InputCard theme={muiTheme}>
                    <RateComponent id={game.id} />
                </InputCard>
            </ElementRateContainer>
            {
                key !== DB.games.length - 1 ?
                    <hr
                        style={{
                            width: '100%',
                            margin: '0px',
                            backgroundColor: '#fff',
                            height: 2
                        }}
                    /> : <></>
            }
        </>
    )
}