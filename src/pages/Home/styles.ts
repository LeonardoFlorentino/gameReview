import styled from "styled-components";
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { MdOutlineGrade } from 'react-icons/md'
import { MdGrade } from 'react-icons/md'
import {FaAward} from 'react-icons/fa'

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

export const SlidesContainer = styled.div`
    width:  80vw;
    border-radius:10px ;
    background-color:#555 ;
`

export const CardSlide = styled.div`
    display:flex ;
    flex-direction: column;
`

export const TitleCard = styled.h3`
    color: #ddd ;
    font-weight:100 ;
    font-size:40px ;
    text-shadow: 1px 1px #00fa9a ;
    font-family: 'ka1';
    text-align:center ;
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
    width:500px ;
    border-radius:5px ;
    border: 5px solid #00ae6b  ;
`

export const ScoreContainer = styled.div`
    margin-top:20px ;
    height:100% ;
    display:flex ;
    align-items:center ;
    justify-content: center ;
    background-color: #00ae6b ;
    width:80vw ;
    height:80px ;
    font-family:  'KarmaFuture';
    font-size:50px ;
    border-radius:0px 0px 10px 10px;
`

 export const AwardIcon = styled(FaAward)`
    position:relative ;
    width:60px ;
    height: 60px;
    right: 40px;
 `

export const StarGradeEmpty = styled(MdOutlineGrade)`
    width:40px ;
    height: 40px;
`
export const StarGradeFull = styled(MdGrade)`
    width:40px ;
    height: 40px;
`

// export const ProfileContainer = styled.div`
//     display: flex;
//     width: 100vw;
//     padding: 20px 0px;
//     justify-content: center;
//     background: conic-gradient(#292929 0.25turn, #343434 0.25turn 0.5turn, #343434 0.5turn 0.75turn, #292929 0.75turn);
// `

// export const ProfilePic = styled.img`
//     align-items: center;
//     background-color: #eee;
//     border: 3px solid white;
//     border-radius: 100%;
//     height: 150px;
//     width:150px;
// `

// export const MainInfoContainer = styled.div`
//     width: 100%;
//     display: grid;
//     grid-template-areas:
//     "a b"
//     "c d";
//     grid-template-columns: 20px 1fr;
//     grid-auto-rows: 1fr 1fr;
//     justify-items: start;
// `

// export const NameLocationContainer = styled.div`
//     display: flex;
//     padding: 10px 0px;
//     flex-direction: column;
// `

// export const Square = styled.div`
//     grid-area:a;
//     align-self: start;
//     background-color: #e6cc12;
//     height: 40px;
//     width: 10px;
//     border-radius: 0px 10px 10px 0px;
//     margin-right: 20px;
// `

// export const Name = styled.div`
//     width: 100%;
//     padding-bottom: 5px;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     font-weight: bold;
//     font-size: 1.5rem;
// `

// export const InfoContainer = styled(Link)`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     align-items: center;
//     cursor: pointer;
//     color: inherit;
//     text-decoration: none;
// `

// export const InfoName = styled.div`
//     font-size: 0.8rem;
// `

// export const InfosContainer = styled.div`
//     width: 100%;
//     padding: 20px 0px;
//     background-color:#3C3C3C ;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//     margin-bottom: 40px;

// `

// export const InfoNumber = styled.div`
//     font-weight: bold;
//     font-size: 2rem;
// `


export const HomeFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
`