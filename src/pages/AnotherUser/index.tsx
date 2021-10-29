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


export const AnotherUser = (props: profileProps) => {
    const { mainUserName, pageType, subordinateUserName }: RouteParams = useParams()
    const { userName, user, fetchUserData } = props

    useEffect(() => {
        fetchUserData(subordinateUserName, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subordinateUserName]);

    return (
        <HomeContainer>
            <HomeHeaderFollow>
                <ExitContainer to={`/${mainUserName}/${pageType}`}>
                    <ExitIcon />
                </ExitContainer>
                <LoginName to={`/${subordinateUserName}`}>
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
                    <InfoContainer to={`/anotheruser/${subordinateUserName}/followers`}>
                        <InfoNumber>{user.followers}</InfoNumber>
                        <InfoName>Seguidores</InfoName>
                    </InfoContainer>
                    <InfoContainer to={`/anotheruser/${subordinateUserName}/followings`}>
                        <InfoNumber>{user.following}</InfoNumber>
                        <InfoName>Seguindo</InfoName>
                    </InfoContainer>
                    <InfoContainer to={`/anotheruser/${subordinateUserName}/repos`}>
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

