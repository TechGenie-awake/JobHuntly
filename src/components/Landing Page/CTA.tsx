'use client';

import React from 'react'
import { StyledCTADiv, StyledCTAWrapper, StyledDivText, StyledPostingText, StyledSignUpButton, StyledTextWrapper } from './CTA.Styled'

const CTA = () => {
    return (
        <StyledCTADiv>
            <StyledCTAWrapper>
                <StyledTextWrapper>
                    <StyledDivText>Start posting jobs today</StyledDivText>
                    <StyledPostingText>Start posting jobs for only $10.</StyledPostingText>
                    <StyledSignUpButton>Sign Up For Free</StyledSignUpButton>
                </StyledTextWrapper>
            </StyledCTAWrapper>
        </StyledCTADiv>
    )
}

export default CTA