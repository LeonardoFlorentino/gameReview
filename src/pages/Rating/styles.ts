import styled from "styled-components";
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { MdOutlineGrade } from 'react-icons/md'
import { MdGrade } from 'react-icons/md'

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
    width:100% ;
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
    font-size:80px ;
    font-style: initial ;
`

export const ListRateContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    width:  80vw;
    border-radius:10px 10px 10px 10px ;
    background-color:#555 ;
    padding:20px 20px ;
    align-items: flex-start ;
    margin-bottom:80px ;
`

export const ElementRateContainer = styled.div`
    display:grid ;
    grid-template-columns: 1fr 1fr 1fr ;
    width:100% ;
    padding:20px ;
`

export const TitleCard = styled.h3`
    color: #ddd ;
    font-weight:100 ;
    font-size:30px ;
    text-shadow: 1px 1px #00fa9a ;
    font-family: 'ka1';
    margin:20px 20px ;
    width:500px ;
`

export const InputCard = styled.div`
    display:flex ;
    flex-direction: column ;
    align-items:center ;
    justify-content:center;
`

export const InputContainer = styled.div`
    display:flex ;
    justify-content:center ;
    align-items:center ;
    width:100% ;
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


export const ImageCardContainer = styled.div`
    display:flex;
    justify-content:center ;
    align-items:center ;
`

export const ImageCard = styled.img`
    display:flex;
    justify-content:center ;
    align-items:center ;
    width:150px ;
    border-radius:5px ;
    border: 5px solid #00ae6b  ;
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

export const StarGradeEmpty = styled(MdOutlineGrade)`
    width:40px ;
    height: 40px;
`
export const StarGradeFull = styled(MdGrade)`
    width:40px ;
    height: 40px;
`

export const HomeFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
`