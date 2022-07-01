import styled from "styled-components";
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { MdOutlineGrade } from 'react-icons/md'
import { MdGrade } from 'react-icons/md'
import { FaAward } from 'react-icons/fa'
import Slider from "react-slick";

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

export const SlidesContainer = styled.div`
    width:  80vw;
    border-radius:10px ;
    background-color:#555 ;
`

export const CardSlide = styled.div`
    display:grid ;
    grid-template-columns:1fr 1fr 80px ;
`

export const TitleCard = styled.h3`
    display:flex ;
    align-items:center ;
    justify-content:center ;
    color: #ddd ;
    font-weight:100 ;
    text-shadow: 1px 1px #00fa9a ;
    font-family: 'ka1';
    text-align:center ;
    ${props => props.theme.breakpoints.up("sm")} {
        font-size:40px ;
        height:100px ;
    }
    ${props => props.theme.breakpoints.up("md")} {
        font-size:40px ;
        height:100px ;
    }
    ${props => props.theme.breakpoints.up("lg")} {
        font-size:40px ;
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
    width:500px ;
    border-radius:5px ;
    border: 5px solid #00ae6b  ;
`

export const ScoreContainer = styled.div`
    position:bottom ;
    margin-top:20px ;
    display:flex ;
    align-items:center ;
    justify-content: center ;
    background-color: #00ae6b ;
    height:40px ;
    font-family: 'KarmaFuture';
    font-size: 20px;
    ${props => props.theme.breakpoints.up("sm")} {
        font-size:40px ;
        height:100px ;
    }
    ${props => props.theme.breakpoints.up("md")} {
        font-size:40px ;
        height:100px ;
    }
    ${props => props.theme.breakpoints.up("lg")} {
        font-size:40px ;
    }
`

export const SliderModified = styled(Slider).attrs((props:any) => {
    const {theme} = props
    if(theme.breakpoints.up("sm"))
    return {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    }
})`
`

export const AwardIcon = styled(FaAward)`
    position:relative ;
    right: 40px;
    width:30px ;
    height: 30px;
    ${props => props.theme.breakpoints.up("sm")} {
        width:60px ;
        height: 60px;
    }
    ${props => props.theme.breakpoints.up("md")} {
        width:60px ;
        height: 60px;
    }
    ${props => props.theme.breakpoints.up("lg")} {
        width:60px ;
        height: 60px;
    }
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