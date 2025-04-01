'use client';

import React from 'react'
import { StyledCategoryDiv, StyledDivText } from './Category.Styled'

const Category = () => {
    return (
        <StyledCategoryDiv>
            <StyledDivText>Explore by <span>category</span></StyledDivText>
        </StyledCategoryDiv>
    )
}

export default Category