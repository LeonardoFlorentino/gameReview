import styled from "styled-components";
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center;
`


export const HomeHeaderMain = styled.div`
    padding: 20px 0px;
    width: 100%;
    display: flex;
    flex-direction: line;
    justify-content: space-between;
    background-color:#444;
`

export const LoginName = styled(Link)`
   font-weight: bold;
   cursor: pointer;
   color: inherit;
   text-decoration: none;
`

export const ExitContainer = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
`

export const ChangeProfileContainer = styled(Link)`
    margin-right: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
`

export const LogOutIcon = styled(FiLogOut)`
    margin-left: 5px;
    width: 25px;
    height: 25px;
`


export const HomeBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &:after{
        content: "";
        display: block;
        height: 60px;
        width: 100%
    }
`

export const TitlePage = styled.h1`
    font-weight:100 ;
    color: #fff ;
    font-family: 'Blox' ;
    font-style: initial ;
    ${props => props.theme.breakpoints.up("sm")} {
        font-size:60px ;
    }
    ${props => props.theme.breakpoints.up("md")} {
        font-size:80px ;
    }
    ${props => props.theme.breakpoints.up("lg")} {
        font-size:80px ;
    }
`

export const ListRateContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    border-radius:10px 10px 10px 10px ;
    background-color:#555 ;
    align-items: flex-start ;
    width:80vw ;
    ${props => props.theme.breakpoints.up("sm")} {
        margin:0px 40px 80px 40px ;
    }
    ${props => props.theme.breakpoints.up("md")} {
        margin:0px 80px 80px 80px ;
    }
    ${props => props.theme.breakpoints.up("lg")} {
        margin:0px 80px 80px 80px ;
    }
`

export const LoadingPage = styled.div`
    height:50vh ;
    padding:20px 20px ;
    display: flex ;
    font-weight:100 ;
    color: #fff ;
    font-family: 'ka1';
    font-size:50px ;
    font-style: initial ; 
    justify-content: center ;
    align-items:center ;
`

export const ElementRateContainer = styled.div`
    align-items:center ;
    justify-content:center ;
    margin:5px 0px;
    width:100% ;
    display: flex ;
    flex-direction: column ;
    justify-content: space-around ;
    ${props => props.theme.breakpoints.up("sm")} {
        display:grid ;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:
        'c1 c1 c1'
        'c2 c2 c2 '
        'c3 c3 c3';
        align-items:center ;
        height:380px ;
    }
    ${props => props.theme.breakpoints.up("md")} {
        display:grid ;
        grid-template-columns: 1fr 1fr ;
        grid-template-rows: 1fr 1fr ;
        grid-template-areas:
        'top lef'
        'ft lef';
        height:300px ;
    }
    ${props => props.theme.breakpoints.up("lg")} {
        display:grid ;
        grid-template-columns: 1fr 1fr 1fr ;
        grid-template-rows: 1fr ;
        grid-template-areas:
        'l1 l2 l3';
    }
`
export const ImageCardContainer = styled.div`
    ${props => props.theme.breakpoints.up("sm")} {
        grid-area:c2;
        justify-self:center ;
    }
    ${props => props.theme.breakpoints.up("md")} {
        grid-area:ft;
    }
    ${props => props.theme.breakpoints.up("lg")} {
        grid-area: l1;
    }
`

export const AverageSocore = styled.text`
    width:120px ;
    color:black ;
    font-family:'KarmaFuture' ;
    border-top:4px solid #00fa9a ;
    border-right:4px solid #00fa9a ;
    border-bottom:4px solid #00fa9a ;
    border-left:4px solid #00fa9a ;
    border-radius: 10px 10px 10px 10px ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    position:relative ;
    left:120px ;
    bottom:18px ;
    background-color:#eee ;
    ${props => props.theme.breakpoints.up("sm")} {
    }
    ${props => props.theme.breakpoints.up("md")} {
        left:225px ;
        bottom:18px ;
    }
    ${props => props.theme.breakpoints.up("lg")} {
    }
`



export const ImageCard = styled.img`
    height: 130px;
    border-radius:5px ;
    border: 5px solid #00fa9a  ;
    ${props => props.theme.breakpoints.up("sm")} {
    }
    ${props => props.theme.breakpoints.up("md")} {
        height: 180px ;
    }
    ${props => props.theme.breakpoints.up("lg")} {
    }
`

export const ScoreContainer = styled.div`
    display:flex ;
    align-items:center ;
    justify-content: space-around ;
    background-color: #00ae6b ;
    width:80vw ;
    height:60px ;
    border-radius: 0px 0px 10px 10px ;
`

export const TitleCard = styled.h3`
    display:flex ;
    justify-content:center ;
    align-items:center ;
    color: #ddd ;
    font-weight:100 ;
    font-size:30px ;
    text-shadow: 1px 1px #00fa9a ;
    font-family: 'ka1';
    margin:20px 20px ;
    width:100% ;
    line-break: normal ;
    ${props => props.theme.breakpoints.up("sm")} {
        grid-area:c1;
        justify-self:center ;
        margin-bottom:10px;
    }
    ${props => props.theme.breakpoints.up("md")} {
        grid-area: top;
        margin:0px ;

    }
    ${props => props.theme.breakpoints.up("lg")} {
        grid-area: l2;
    }
`

export const InputCard = styled.div`
    display:flex ;
    flex-direction: column ;
    align-items:center ;
    justify-content:center;
    ${props => props.theme.breakpoints.up("sm")} {
        grid-area:c3;
        justify-self:center ;
    }
    ${props => props.theme.breakpoints.up("md")} {
        grid-area:lef ;
        margin-top:50px ;
    }
    ${props => props.theme.breakpoints.up("lg")} {
        grid-area: l3;
    }
`

export const InputContainer = styled.div`
    display:flex ;
    flex-direction:row ;
    justify-content:center ;
    align-items:center ;
    ${props => props.theme.breakpoints.up("sm")} {
    }
    ${props => props.theme.breakpoints.up("md")} {
    }
    ${props => props.theme.breakpoints.up("lg")} {
    }
`

export const RateDisplay = styled.div`
    border: 4px solid #292929 ;
    border-radius:6px ;
    height:60px ;
    width:50px ;
    display:flex ;
    align-items: center;
    justify-content:center ;
    font-size: 25px ;
    font-family:'KarmaFuture' ;
    margin: 0px 10px ;
    background-color:#00fa9a ;
    color:#292929 ;
`
export const ButtonInput = styled.button`
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;
    border-radius:100% ;
    width:40px ;
    height:40px ;
    border: 4px solid #000 ;
    &:hover {
    cursor: pointer;
    background-color:#00fa9a ;
    border: 4px solid #fff ;
    }
`

export const ButtonRate = styled.button`
    font-family:'ka1' ;
    margin: 20px ;
    font-size:15px ;
    background: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;
    border: 4px solid #00fa9a  ;
    border-radius:10px ;
    background-color:#ddd ;
    padding:10px;
    &:hover {
        cursor: pointer;
        background-color:#00fa9a ;
        border: 4px solid #fff ;
        transform: translate(0%, -5%);
        transition: 0.3s ease-out;
  }
`

export const GamesBody = styled.div`
    background-color: #3f3f3f;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:after{
        content: "";
        display: block;
        height: 60px;
        width: 100%
    }
`




export const HomeFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
`