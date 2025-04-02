'use client';

import React from 'react'
import { StyledDivText, StyledFeaturedJobsDiv, StyledCard, StyledCardsWrapper, StyledCardIcon, StyledCardRoleText, StyledFullTimeTag, StyledCardDescriptionText, StyledCardLocationText, StyledDot, StyledCardTag } from './FeaturedJobs.Styled'

const CardData = [
    { id: 0, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 1, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 2, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 3, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 4, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 5, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 6, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 7, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] }]

function FeaturedJobsCards() {
    const Cards = CardData.map((card) => (
        <StyledCard key={card.id}>
            <div className='flex justify-between mb-8'>
                <StyledCardIcon>{card.icon}</StyledCardIcon>
                <StyledFullTimeTag>Full Time</StyledFullTimeTag>
            </div>
            <StyledCardRoleText>{card.role}</StyledCardRoleText>
            <div className='flex items-center justify-between mr-7 mb-6'>
                <StyledCardLocationText>{card.company}</StyledCardLocationText>
                <StyledDot />
                <StyledCardLocationText>{card.location}</StyledCardLocationText>
            </div>
            <StyledCardDescriptionText>{card.description}</StyledCardDescriptionText>
            <div className='flex'>
                {card.tags.map((tag, index) => (
                    <StyledCardTag key={index}>{tag}</StyledCardTag>
                ))}
            </div>
        </StyledCard >
    ))

    return (
        <StyledCardsWrapper>{Cards}</StyledCardsWrapper>
    )
}

const FeaturedJobs = () => {
    return (
        <StyledFeaturedJobsDiv>
            <StyledDivText>Featured <span>jobs</span></StyledDivText>
            <FeaturedJobsCards />
        </StyledFeaturedJobsDiv>
    )
}

export default FeaturedJobs