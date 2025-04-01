import styled from "styled-components";
import LatestJobsBackground from "./LatestJobsBackground.png"

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