'use client';

import React from 'react'
import Image from 'next/image';
import { StyledCompanyDiv, StyledCompanyText, StyledCompanyWrapper } from './Company.Styled'
import Vodafone from './Images/Vodafone.png'
import Intel from './Images/Intel.png'
import Tesla from './Images/Tesla.png'
import AMD from './Images/AMD.png'
import Talkit from './Images/Talkit.png'

const CompanyData = [
    { id: 0, image: Vodafone },
    { id: 1, image: Intel },
    { id: 2, image: Tesla },
    { id: 3, image: AMD },
    { id: 4, image: Talkit }]

function Companies() {
    const CompanyCards = CompanyData.map((company) => (
        <Image className="max-w-none h-10 w-auto block" src={company.image} alt="Company" key={company.id} />
    ))

    return (
        <StyledCompanyWrapper>{CompanyCards}</StyledCompanyWrapper>
    )
}

const Company = () => {
    return (
        <StyledCompanyDiv>
            <StyledCompanyText>Companies we helped grow</StyledCompanyText>
            <Companies />
        </StyledCompanyDiv>
    )
}

export default Company