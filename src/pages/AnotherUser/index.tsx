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

import { RouteParams } from '../../interface'

import { Navbar } from '../../components/Navbar'

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { getUserAsync } from '../../store/user/userSlice';
import { useHistory } from 'react-router';


export const AnotherUser = () => {
    const { pageType }: RouteParams = useParams()

    const user = useSelector((state:RootState) => state.anotherUser)
    const userName = user.login

    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <HomeContainer>
            <HomeHeaderFollow>
                <ExitContainer onClick={()=> history.goBack()}>
                    <ExitIcon />
                </ExitContainer>
                <LoginName >
                    #{user.login}
                </LoginName>
                <ChangeProfileContainer
                    to={`/home`}>
                    <ButtonChangeProfile
                        onClick={() => {dispatch(getUserAsync(userName))}}
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

