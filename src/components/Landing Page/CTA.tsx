'use client';

import React from 'react';
import CTABackground from './Images/CTABackground.png';
import { useRouter } from 'next/navigation';

const CTA = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/signup'); // Navigate to signup page
    };

    return (
        <div className="w-[1440px] h-[558px] mx-auto flex items-center justify-center">
            <div className="relative w-[1192px] h-[414px] bg-cover" style={{ backgroundImage: `url(${CTABackground.src})` }}>
                <div className="absolute left-[124px] flex flex-col justify-center h-full">
                    <h1 className="text-[48px] text-white font-fahkwang font-bold leading-[110%] w-[364px]">
                        Start posting jobs today
                    </h1>
                    <p className="font-epilogue font-light text-[16px] leading-[160%] tracking-[1px] text-white my-[30px]">
                        Start posting jobs for only $10.
                    </p>
                    <button
                        onClick={handleClick}
                        className="h-[50px] w-[179px] text-[#4640DE] bg-white border border-transparent hover:bg-[#4640DE] hover:text-white hover:border-white transition-colors duration-300"
                    >
                        Sign Up For Free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTA;
