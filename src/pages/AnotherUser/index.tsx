import {
    HomeContainer,
    HomeHeaderFollow,
    LoginName,
    ExitContainer,
    ExitIcon,
    ChangeProfileContainer,
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
    const { userName, user, setUser, fetchData } = props

    useEffect(() => {
            fetchData(subordinateUserName, 'subordinateUser');
    }, [userName, fetchData, subordinateUserName]);

    return (
        <HomeContainer>
            <HomeHeaderFollow>
                <ExitContainer to={`/${mainUserName}/${pageType}`}>
                    <ExitIcon />
                </ExitContainer>
                <LoginName to={`/${pageType}/${subordinateUserName}`}>
                    #{user.login}
                </LoginName>
                <ChangeProfileContainer
                    to={`/${subordinateUserName}`}
                    onClick={() => { fetchData(subordinateUserName, 'mainUser'); setUser({}) }}
                    style={{ right: '30px' }}>
                    Salvar<LogInIcon color={'green'} />
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
                    <InfoContainer to={`/${mainUserName}/followers`}>
                        <InfoNumber>{user.followers}</InfoNumber>
                        <InfoName>Seguidores</InfoName>
                    </InfoContainer>
                    <InfoContainer to={`/${mainUserName}/followings`}>
                        <InfoNumber>{user.following}</InfoNumber>
                        <InfoName>Seguindo</InfoName>
                    </InfoContainer>
                    <InfoContainer to={`/${mainUserName}/repos`}>
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
                <Navbar activePage={`${pageType}`} />
            </HomeFooter>
        </HomeContainer>
    )
}

