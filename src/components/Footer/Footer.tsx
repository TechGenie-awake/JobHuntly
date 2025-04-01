'use client';

import React from 'react'
import { StyledAboutText, StyledFooterDiv, StyledFooterLeft, StyledFooterRight, StyledFooterWrapper, StyledListHeading, StyledListItems, StyledMenus } from './Footer.Styled';
import Image from 'next/image';
import logo from '../Header/logo.png';
import { StyledLogoText } from './Footer.Styled';

const AboutMenuItems = ["About", "Companies", "Pricing", "Terms", "Advice", "Privacy Policy"]
const ResourcesMenuItems = ["Resources", "Help Docs", "Guide", "Updates", "Contact Us"]


function AboutMenu() {
    const AboutItems = AboutMenuItems.map((item, index) => (
        index === 0 ? (
            <StyledListHeading key={index}>{item}</StyledListHeading>
        ) : (
            <StyledListItems key={index}>{item}</StyledListItems>
        )
    ))
    return (
        <ul>{AboutItems}</ul>
    );
}
function ResourcesMenu() {
    const ResourcesItems = ResourcesMenuItems.map((item, index) => (
        index === 0 ? (
            <StyledListHeading key={index}>{item}</StyledListHeading>
        ) : (
            <StyledListItems key={index}>{item}</StyledListItems>
        )

    ))
    return (
        <ul>{ResourcesItems}</ul>
    );
}

const Footer = () => {

    return (
        <StyledFooterDiv>
            <StyledFooterWrapper>
                <StyledFooterLeft>
                    <div className='flex items-center'>
                        <Image src={logo} alt="Logo" width={32} height={32} className="object-contain" priority />
                        <StyledLogoText>JobHuntly</StyledLogoText>
                    </div>
                    <StyledAboutText>Great platform for the job seeker that passionate about startups. Find your dream job easier.</StyledAboutText>
                </StyledFooterLeft>
                <StyledMenus>
                    <AboutMenu />
                    <ResourcesMenu />
                </StyledMenus>
                <StyledFooterRight></StyledFooterRight>
            </StyledFooterWrapper>
        </StyledFooterDiv>
    )
}

export default Footer