'use client';

import React from 'react'
import { StyledCategoryDiv, StyledDivText, StyledCard, StyledCardCategoryText, StyledCardJobsText, StyledCardsWrapper, StyledCardIcon, StyledArrowSpan } from './Category.Styled'

const CardData = [
    { id: 0, Category: 'Design', Icon: '', Jobs: 235 },
    { id: 1, Category: 'Sales', Icon: '', Jobs: 756 },
    { id: 2, Category: 'Marketing', Icon: '', Jobs: 140 },
    { id: 3, Category: 'Finance', Icon: '', Jobs: 325 },
    { id: 4, Category: 'Technology', Icon: '', Jobs: 436 },
    { id: 5, Category: 'Engineering', Icon: '', Jobs: 542 },
    { id: 6, Category: 'Business', Icon: '', Jobs: 211 },
    { id: 7, Category: 'Human Resource', Icon: '', Jobs: 346 }]

function CategoryCard() {
    const Cards = CardData.map((card) => (
        <StyledCard key={card.id}>
            <StyledCardIcon>{card.Icon}</StyledCardIcon>
            <StyledCardCategoryText>{card.Category}</StyledCardCategoryText>
            <div className='flex items-center mr-10'>
                <StyledCardJobsText>{card.Jobs} jobs available</StyledCardJobsText>
                <StyledArrowSpan />
            </div>
        </StyledCard>
    ))

    return (
        <StyledCardsWrapper>{Cards}</StyledCardsWrapper>
    )
}

const Category = () => {

    return (
        <StyledCategoryDiv>
            <StyledDivText>Explore by <span>category</span></StyledDivText>
            <CategoryCard />
        </StyledCategoryDiv>
    )
}

export default Category