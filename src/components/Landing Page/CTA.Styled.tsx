import styled from "styled-components";
import CTABackground from "./CTABackground.png"

export const StyledCTADiv = styled.div`
    height: 558px;
    width: 100%;
    padding: 72px 124px;
    `;

export const StyledCTAWrapper = styled.div`
    background-image: url(${CTABackground.src});
    background-size: cover;
    width: 1192px;
    height: 414px;
    padding: 92px 70px;
    `;

export const StyledTextWrapper = styled.div`
    width: 364px;
    height: 230px;
    `;

export const StyledDivText = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Fahkwang:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Gravitas+One&family=Michroma&family=Poiret+One&family=Spinnaker&family=Unbounded:wght@200..900&display=swap');
    font-size: 48px;
    color:#FFFFFF;
    font-family: "Fahkwang", sans-serif;
    font-weight: 700;
    font-style: normal;
    line-height: 110%;
    `;

export const StyledPostingText = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap');
        font-family: "Epilogue", sans-serif;
        font-optical-sizing: auto;
        font-weight: 300;
        font-style: normal;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 1px;
        color: #FFFFFF;
        height: 26px;
        width: 364px;
        margin: 30px 0;
    `;

export const StyledSignUpButton = styled.button`
    height: 50px;
    width: 179px;
    color: #4640DE;
    background-color: #FFFFFF;
    padding: 0 auto;
    `;