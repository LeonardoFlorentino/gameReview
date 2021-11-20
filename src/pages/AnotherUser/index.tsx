import {
    HomeContainer,
    HomeHeaderFollow,
    LoginName,
    ExitContainer,
    ExitIcon,
    ChangeProfileContainer,
    ButtonChangeProfile,
    LogInIcon,
    HomeBody,
    ProfileContainer,
    ProfilePic,
    Name,
    MainInfoContainer,
    NameLocationContainer,
    Square,
    InfosContainer,
    InfoContainer,
    InfoNumber,
    InfoName,
    HomeFooter
} from './styles';


import { Navbar } from '../../components/Navbar'

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { getUserAsync } from '../../store/user/userSlice';

import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useLastLocation } from 'react-router-last-location';
import { LastLocationType } from 'react-router-last-location';
import { useAuth } from '../../providers/auth';

export const AnotherUser = () => {

    const lastLocation:LastLocationType = useLastLocation()

    // const user = useSelector((state: RootState) => state.user)
    // const anotherUser = useSelector((state: RootState) => state.anotherUser)
    // const anotherUserName = anotherUser.login
    const {user, anotherUser, login} = useAuth()
    const anotherUserName = anotherUser.login

    // const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (!user.isLogged) {
            history.push('/')
            toast.error("Usuário não logado", {
                autoClose: 3000
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <HomeContainer>
            <HomeHeaderFollow>
                <ExitContainer onClick={() => history.goBack()}>
                    <ExitIcon />
                </ExitContainer>
                <LoginName >
                    #{anotherUser.login}
                </LoginName>
                <ChangeProfileContainer
                    to={`/home`}>
                    <ButtonChangeProfile
                        onClick={() => {login(anotherUserName)}}
                        style={{ right: '30px' }}>
                        Salvar<LogInIcon color={'green'} />
                    </ButtonChangeProfile>
                </ChangeProfileContainer>
            </HomeHeaderFollow>
            <HomeBody>
                <ProfileContainer>
                    <ProfilePic src={anotherUser.avatar_url} />
                </ProfileContainer>
                <MainInfoContainer>
                    <Square />
                    <NameLocationContainer>
                        <Name>{anotherUser.name}</Name>
                        <InfoName>{anotherUser.email}</InfoName>
                        <InfoName>{anotherUser.location}</InfoName>
                    </NameLocationContainer>
                </MainInfoContainer>
                <InfosContainer>
                    <InfoContainer >
                        <InfoNumber>{anotherUser.followers}</InfoNumber>
                        <InfoName>Seguidores</InfoName>
                    </InfoContainer>
                    <InfoContainer >
                        <InfoNumber>{anotherUser.following}</InfoNumber>
                        <InfoName>Seguindo</InfoName>
                    </InfoContainer>
                    <InfoContainer >
                        <InfoNumber>{anotherUser.public_repos}</InfoNumber>
                        <InfoName>Repos</InfoName>
                    </InfoContainer>
                </InfosContainer>
                <MainInfoContainer>
                    <Square />
                    <NameLocationContainer>
                        <Name>Bio</Name>
                        <InfoName>{anotherUser.bio}</InfoName>
                    </NameLocationContainer>
                </MainInfoContainer>
            </HomeBody>
            <HomeFooter>
                <Navbar activePage={`${lastLocation?.pathname.substring(1) }`} />
            </HomeFooter>
        </HomeContainer>
    )
}

