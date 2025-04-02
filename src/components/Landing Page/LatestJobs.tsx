'use client';

import React from 'react'
import { StyledLatestJobsDiv, StyledCard, StyledCardIcon, StyledDot, StyledCardLocationText, StyledCardRoleText, StyledCardsWrapper, StyledFullTimeTag, StyledLine, StyledCardTag } from './LatestJobs.Styled'
import { StyledDivText } from './Category.Styled';

const CardData = [
    { id: 0, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 1, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 2, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 3, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 4, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 5, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 6, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 7, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] }]

function LatestJobsCards() {
    const Cards = CardData.map((card) => (
        <StyledCard key={card.id}>
            <div className='flex ml-14 mb-8'>
                <StyledCardIcon className='mr-8'>{card.icon}</StyledCardIcon>
                <div>
                    <StyledCardRoleText>{card.role}</StyledCardRoleText>
                    <div className='flex items-center mt-2 gap-2'>
                        <StyledCardLocationText>{card.company}</StyledCardLocationText>
                        <StyledDot />
                        <StyledCardLocationText>{card.location}</StyledCardLocationText>
                    </div>
                    <div className='flex items-center'>
                        <StyledFullTimeTag>Full Time</StyledFullTimeTag>
                        <StyledLine />
                        <div className='flex ml-2'>
                            {card.tags.map((tag, index) => (
                                <StyledCardTag key={index}>{tag}</StyledCardTag>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </StyledCard >
    ))

    return (
        <StyledCardsWrapper>{Cards}</StyledCardsWrapper>
    )
}

const LatestJobs = () => {
    return (
        <StyledLatestJobsDiv>
            <StyledDivText>Latest <span>jobs open</span></StyledDivText>
            <LatestJobsCards />
        </StyledLatestJobsDiv>
    )
}

export default LatestJobs