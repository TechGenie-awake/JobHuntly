import styled from 'styled-components';
import HeroBackground from './HeroBackground.png';
import Underline from './Underline.png'

export const StyledHeroSection = styled.section`
    background-image: url(${HeroBackground.src});
    background-size: cover;
    height: 794px;
    width: 100%;
    `;

export const StyledDiv = styled.div`
    width: 500px;
    height: 237px;
    margin: 0 124px;
    padding-top: 156px;
    `;
export const StyledDivText = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Fahkwang:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Gravitas+One&family=Michroma&family=Poiret+One&family=Spinnaker&family=Unbounded:wght@200..900&display=swap');
    font-size: 70px;
    color:#25324B;
    font-family: "Fahkwang", sans-serif;
    font-weight: 700;
    font-style: normal;
    span{
        color:#26A4FF;
    }
    `;
export const StyledUnderline = styled.div`
    background-image: url(${Underline.src});
    background-size: cover;
    height: 32.17px;
    width: 455px;
    `;
export const StyledAboutText = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap');
        font-family: "Epilogue", sans-serif;
        font-optical-sizing: auto;
        font-weight: 200;
        font-style: normal;
        font-size: 20px;
        line-height: 160%;
        letter-spacing: 1px;
        color: #515B6F;
        height: 64px;
        width: 521px;
        margin-top: 30px;
    `;