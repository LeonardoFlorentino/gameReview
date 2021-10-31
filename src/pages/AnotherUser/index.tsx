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

import { profileProps, RouteParams } from '../../interface'

import { Navbar } from '../../components/Navbar'

import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { useHistory } from 'react-router';
import { treatResponse } from '../../components/Toast';


export const AnotherUser = (props: profileProps) => {
    const { mainUserName,pageType, subordinateUserName }: RouteParams = useParams()
    const { userName, user, fetchUserData } = props
    const history = useHistory()

    useEffect(() => {
        fetchUserData(subordinateUserName, false)
            .then(response => {
                treatResponse(response, [200])
                if (response !== 200) {
                    history.push('/')
                }
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subordinateUserName]);

    return (
        <HomeContainer>
            <HomeHeaderFollow>
                <ExitContainer to={`/${mainUserName}/${pageType}`}>
                    <ExitIcon />
                </ExitContainer>
                <LoginName >
                    #{user.login}
                </LoginName>
                <ChangeProfileContainer
                    to={`/${subordinateUserName}`}>
                    <ButtonChangeProfile
                        onClick={() => { fetchUserData(subordinateUserName, true); }}
                        style={{ right: '30px' }}>
                        Salvar<LogInIcon color={'green'} />
                    </ButtonChangeProfile>
                </ChangeProfileContainer>
            </HomeHeaderFollow>
            <HomeBody>
                <ProfileContainer>
                    <ProfilePic src={user.avatar_url} />
                </ProfileContainer>
                <MainInfoContainer>
                    <Square />
                    <NameLocationContainer>
                        <Name>{user.name}</Name>
                        <InfoName>{user.email}</InfoName>
                        <InfoName>{user.location}</InfoName>
                    </NameLocationContainer>
                </MainInfoContainer>
                <InfosContainer>
                    <InfoContainer >
                        <InfoNumber>{user.followers}</InfoNumber>
                        <InfoName>Seguidores</InfoName>
                    </InfoContainer>
                    <InfoContainer >
                        <InfoNumber>{user.following}</InfoNumber>
                        <InfoName>Seguindo</InfoName>
                    </InfoContainer>
                    <InfoContainer >
                        <InfoNumber>{user.public_repos}</InfoNumber>
                        <InfoName>Repos</InfoName>
                    </InfoContainer>
                </InfosContainer>
                <MainInfoContainer>
                    <Square />
                    <NameLocationContainer>
                        <Name>Bio</Name>
                        <InfoName>{user.bio}</InfoName>
                    </NameLocationContainer>
                </MainInfoContainer>
            </HomeBody>
            <HomeFooter>
                <Navbar activePage={`${pageType}`} userName={userName} />
            </HomeFooter>
        </HomeContainer>
    )
}

