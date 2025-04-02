'use client';

import HeroBackground from './HeroBackground.png';
import Underline from './Underline.png';

export default function HeroSection() {
    return (
        <section
            className="bg-cover h-[794px] w-full"
            style={{ backgroundImage: `url(${HeroBackground.src})` }}
        >
            <div className="w-[500px] h-[237px] mx-[124px] pt-[156px]">
                <h1 className="text-[70px] text-[#25324B] font-fahkwang font-bold">
                    Discover more than <span className="text-[#26A4FF]">5000+ Jobs</span>
                </h1>
                <div
                    className="bg-cover h-[32.17px] w-[455px]"
                    style={{ backgroundImage: `url(${Underline.src})` }}
                ></div>
                <p className="font-epilogue font-light text-[20px] leading-[160%] tracking-[1px] text-[#515B6F] mt-[30px] w-[521px]">
                    Great platform for the job seeker that searching for new career heights and passionate about startups.
                </p>
            </div>
        </section>
    );
}