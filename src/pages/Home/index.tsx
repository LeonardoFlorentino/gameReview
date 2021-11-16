import {
    HomeContainer,
    HomeHeaderMain,
    LoginName,
    ChangeProfileContainer,
    LogOutIcon,
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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { withRouter } from 'react-router';
import { logout } from '../../store/user/userSlice';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

export const Profile = withRouter(() => {

    const user = useSelector((state: RootState) => state.user)
    const userName = user.login
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (!user.isLogged) {
            history.push('/')
            toast.error("Usuário não logado", {
                autoClose: 3000
            })
        }
    }, [user])

    const onSubmit = () => {
        dispatch(logout())
    }

    return (
        <HomeContainer>
            <HomeHeaderMain>
                <LoginName to={`/home`} style={{ marginLeft: '20px' }}>
                    #{user.login}
                </LoginName  >
                <ChangeProfileContainer to='/' style={{ right: '10px' }} onClick={() => onSubmit()}>
                    Sair<LogOutIcon color={'red'} />
                </ChangeProfileContainer>
            </HomeHeaderMain>
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
                    <InfoContainer to={`/${userName}/followers`}>
                        <InfoNumber>{user.followers}</InfoNumber>
                        <InfoName>Seguidores</InfoName>
                    </InfoContainer>
                    <InfoContainer to={`/${userName}/followings`}>
                        <InfoNumber>{user.following}</InfoNumber>
                        <InfoName>Seguindo</InfoName>
                    </InfoContainer>
                    <InfoContainer to={`/${userName}/repos`}>
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
                <Navbar activePage='home' userName={userName} />
            </HomeFooter>
        </HomeContainer>
    )
})

