"use client";
import Image from 'next/image';
import logo from './logo.png';
import { StyledLoginButton, StyledLogoText, StyledNavLink, StyledSignUpButton, StyledLine } from './Header.Styled';

export default function Header() {

  return (
    <>
      <header className="absolute w-full h-[78px] flex justify-between px-[124px] z-10">
        <div className='flex items-center'>
          <Image src={logo} alt="Logo" width={32} height={32} className="object-contain" />
          <StyledLogoText className="">JobHuntly</StyledLogoText>

          <StyledNavLink>Find Jobs</StyledNavLink>
          <StyledNavLink>Browse Companies</StyledNavLink>
        </div>
        <div className='flex items-center gap-4'>
          <StyledLoginButton>Login</StyledLoginButton>
          <StyledLine />
          <StyledSignUpButton>Sign Up</StyledSignUpButton>
        </div>

      </header>
    </>
  );
}
