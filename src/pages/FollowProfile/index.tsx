
import {
    HomeContainer,
    HomeHeader,
    LoginName,
    ExitContainer,
    Exit,
    HomeBody,
    ProfileContainer,
    ProfilePic,
    Name,
    InfoNameContainer,
    Square,
    InfoContainer,
    Info,
    ContainerInfoFollowers,
    ContainerInfoFollower,
    InfoFollower,
    ContainerBio,
    HomeFooter
} from './styles';

import { RouteParams } from '../../interface'

import { Navbar } from '../../components/Navbar'

import { useParams } from 'react-router-dom';
import { useEffect } from 'react'


export const FollowProfile = (props:any) => {
    console.log("Passou na Home")
    const { id }: RouteParams = useParams()
    const { user, getFollowProfile, followProfile  } = props

    useEffect(() => {
        const loadData = async () => {
            await getFollowProfile(id)
        }
        loadData()
    },)

    return (
        <HomeContainer>
            <HomeHeader>
                <LoginName to={`/user/${id}`}>
                    #{user.login}
                </LoginName>
                <ExitContainer to='/'>
                    Sair<Exit />
                </ExitContainer>
            </HomeHeader>
            <HomeBody>
                <ProfileContainer>
                    <ProfilePic src={user.avatar_url} />
                </ProfileContainer>
                <InfoNameContainer>
                    <Name>
                        <Square />{user.name}
                    </Name>
                    <InfoContainer>
                        <Info>{user.email}</Info>
                        <Info>{user.location}</Info>
                    </InfoContainer>
                </InfoNameContainer>
                <ContainerInfoFollowers>
                    <ContainerInfoFollower>
                        <InfoFollower>{user.followers}</InfoFollower>
                        <Info>Seguidores</Info>
                    </ContainerInfoFollower>
                    <ContainerInfoFollower>
                        <InfoFollower>{user.following}</InfoFollower>
                        <Info>Seguindo</Info>
                    </ContainerInfoFollower>
                    <ContainerInfoFollower>
                        <InfoFollower>{user.public_repos}</InfoFollower>
                        <Info>Repos</Info>
                    </ContainerInfoFollower>
                </ContainerInfoFollowers>
                <ContainerBio>
                    <Name>
                        <Square />{'Bio'.toUpperCase()}
                    </Name>
                    <InfoContainer>
                        <Info>{user.bio}</Info>
                    </InfoContainer>
                </ContainerBio>
            </HomeBody>
            <HomeFooter>
                <Navbar activePage='home' />
            </HomeFooter>
        </HomeContainer>
    )
}


