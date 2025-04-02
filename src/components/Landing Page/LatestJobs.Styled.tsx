import styled from "styled-components";
import LatestJobsBackground from "./Images/LatestJobsBackground.png"

export const StyledLatestJobsDiv = styled.div`
    background-image: url(${LatestJobsBackground.src});
    background-size: cover;
    height: 877px;
    width: 100%;
    padding: 72px 124px;
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
    height: 149px;
    width: 600px;
    background-color: #FFFFFF;
    margin-bottom: 28px;
    padding: 24px 0;
    `;

export const StyledCardIcon = styled.div`
    height: 64px;
    width: 64px;
    background-color: gray;
    `;

export const StyledCardRoleText = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Fahkwang:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Gravitas+One&family=Michroma&family=Poiret+One&family=Spinnaker&family=Unbounded:wght@200..900&display=swap');
    color:#25324B;
    font-family: "Fahkwang", sans-serif;
    font-size: 20px;
    line-height: 120%;
    font-weight: 600;
    `;

export const StyledCardLocationText = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap');
    font-family: "Epilogue", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 160%;
    color: #515B6F;
    `;

export const StyledDot = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #515B6F;
    margin-top: 8px;
    `;

export const StyledFullTimeTag = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap');
    font-family: "Epilogue", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 160%;
    color:#56CDAD;
    background-color: #56CDAD1A;
    padding: 0 8px;
    text-align: center;
    margin: 10px 10px 0 0;
    border-radius: 16px;
    `;


export const StyledCardTag = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap');
    font-family: "Epilogue", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 160%;
    color:#FFB836;
    border: 1px solid #FFB836;
    padding: 0 8px;
    text-align: center;
    margin: 10px 10px 0 0;
    border-radius: 16px;
    `;

export const StyledLine = styled.div`
    width:1px;
    height: 34px;
    background-color:#D6DDEB;
    margin-top: 8px;
    `;