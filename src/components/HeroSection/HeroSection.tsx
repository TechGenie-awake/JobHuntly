'use client';

import { StyledAboutText, StyledDiv, StyledDivText, StyledHeroSection, StyledUnderline } from "./HeroSection.Styled";

export default function HeroSection() {
    return (
        <StyledHeroSection>
            <StyledDiv>
                <StyledDivText>Discover more than <span>5000+ Jobs</span></StyledDivText>
                <StyledUnderline />
                <StyledAboutText>Great platform for the job seeker that searching for new career heights and passionate about startups.</StyledAboutText>
            </StyledDiv>
        </StyledHeroSection>
    )
}