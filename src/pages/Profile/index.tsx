import {
    HomeContainer,
    HomeHeaderMain,
    HomeHeaderFollow,
    LoginName,
    ExitContainer,
    ExitIcon,
    ChangeProfileContainer,
    LogOutIcon,
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

import { RouteParams } from '../../interface'

import { Navbar } from '../../components/Navbar'

import { useParams } from 'react-router-dom';
import { useEffect } from 'react'


export const Profile = (props: any) => {
    console.log("Passou na Home")
    const { id, page, name }: RouteParams = useParams()
    const { user, getUser, clean, setUserName, profile } = props

    useEffect(() => {
        const loadData = async () => {
            if (profile === 'mainUser') {
                await getUser(id)
            }
            else if (profile === 'followUser') {
                console.log('hellow')
                getUser(name)
            }
        }
        loadData()
    })

    return (
        <HomeContainer>
            {profile === 'mainUser' ?
                <HomeHeaderMain>
                    <LoginName to={`/user/${id}`} style={{ marginLeft: '20px' }}>
                        #{user.login}
                    </LoginName  >
                    <ChangeProfileContainer to='/' onClick={() => { clean(); setUserName('') }} style={{ right: '10px' }}>
                        Sair<LogOutIcon color={'red'} />
                    </ChangeProfileContainer>
                </HomeHeaderMain>
                :
                <HomeHeaderFollow>
                    <ExitContainer to={`/user/${id}/${page}`}>
                        <ExitIcon />
                    </ExitContainer>
                    <LoginName to={`/user/${page}/${name}`}>
                        #{user.login}
                    </LoginName>
                    <ChangeProfileContainer to={`/user/${name}`} onClick={() => { getUser(name) }} style={{ right: '30px' }}>
                        Salvar<LogInIcon color={'green'} />
                    </ChangeProfileContainer>
                </HomeHeaderFollow>
            }
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
                    <InfoContainer to={`/user/${id}/followers`}>
                        <InfoNumber>{user.followers}</InfoNumber>
                        <InfoName>Seguidores</InfoName>
                    </InfoContainer>
                    <InfoContainer to={`/user/${id}/followings`}>
                        <InfoNumber>{user.following}</InfoNumber>
                        <InfoName>Seguindo</InfoName>
                    </InfoContainer>
                    <InfoContainer to={`/user/${id}/repos`}>
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
                <Navbar activePage={profile === 'mainUser' ? 'home' : `${page}`} />
            </HomeFooter>
        </HomeContainer>
    )
}


