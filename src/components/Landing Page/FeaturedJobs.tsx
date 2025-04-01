'use client';

import React from 'react'
import { StyledDivText, StyledFeaturedJobsDiv } from './FeaturedJobs.Styled'

const FeaturedJobs = () => {
    return (
        <StyledFeaturedJobsDiv>
            <StyledDivText>Featured <span>jobs</span></StyledDivText>
        </StyledFeaturedJobsDiv>
    )
}

export default FeaturedJobs