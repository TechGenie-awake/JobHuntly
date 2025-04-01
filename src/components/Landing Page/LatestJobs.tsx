'use client';

import React from 'react'
import { StyledLatestJobsDiv } from './LatestJobs.Styled'
import { StyledDivText } from './Category.Styled';

const LatestJobs = () => {
    return (
        <StyledLatestJobsDiv>
            <StyledDivText>Latest <span>jobs open</span></StyledDivText>
        </StyledLatestJobsDiv>
    )
}

export default LatestJobs