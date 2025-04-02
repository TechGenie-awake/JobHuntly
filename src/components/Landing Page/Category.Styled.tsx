import styled from "styled-components";
import ArrowRight from "./Images/ArrowRight.png"

export const StyledCategoryDiv = styled.div`
    height: 633px;
    width: 100%;
    padding: 72px 124px 0 124px;
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

export const StyledCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `;

export const StyledCard = styled.div`
    height: 214px;
    width: 274px;
    border: 1px solid #D6DDEB;
    margin-top: 30px;
    padding: 32px 0 32px 32px;

    &:hover{
        background-color: #4640DE;
        p{
            color: #FFFFFF;
        }
    }
    `;

export const StyledCardIcon = styled.div`
    height: 48px;
    width: 48px;
    background-color: gray;
    `;

export const StyledCardCategoryText = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Fahkwang:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Gravitas+One&family=Michroma&family=Poiret+One&family=Spinnaker&family=Unbounded:wght@200..900&display=swap');
    color:#25324B;
    font-family: "Fahkwang", sans-serif;
    font-size: 24px;
    line-height: 120%;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: -20px;
    `;

export const StyledCardJobsText = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap');
        font-family: "Epilogue", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: 1px;
        color: #7C8493;
        height: 26px;
        width: 364px;
        margin: 30px 0;
    `;

export const StyledArrowSpan = styled.div`
    height: 24px;
    width: 44px;
    background-image: url(${ArrowRight.src});
    background-size: cover;
    margin-top: 5px;
    `;


