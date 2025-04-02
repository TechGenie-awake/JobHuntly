'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../Header/logo.png';

const AboutMenuItems = ["About", "Companies", "Pricing", "Terms", "Advice", "Privacy Policy"];
const ResourcesMenuItems = ["Resources", "Help Docs", "Guide", "Updates", "Contact Us"];

function AboutMenu() {
    const AboutItems = AboutMenuItems.map((item, index) => (
        index === 0 ? (
            <li key={index} className="font-semibold text-white text-lg mb-4">{item}</li>
        ) : (
            <li key={index} className="font-light text-[#D6DDEB] text-base mb-4">{item}</li>
        )
    ));
    return (
        <ul>{AboutItems}</ul>
    );
}

function ResourcesMenu() {
    const ResourcesItems = ResourcesMenuItems.map((item, index) => (
        index === 0 ? (
            <li key={index} className="font-semibold text-white text-lg mb-4">{item}</li>
        ) : (
            <li key={index} className="font-light text-[#D6DDEB] text-base mb-4">{item}</li>
        )
    ));
    return (
        <ul>{ResourcesItems}</ul>
    );
}

const Footer = () => {
    return (
        <div className="bg-[#202430] h-[497px] w-full">
            <div className="flex justify-between w-[1192px] mx-auto py-[90px]">
                <div className="w-[376px]">
                    <div className='flex items-center'>
                        <Image src={logo} alt="Logo" width={32} height={32} className="object-contain" priority />
                        <h1 className="text-[#F8F8FD] font-bold text-[24px] pl-2">JobHuntly</h1>
                    </div>
                    <p className="font-light text-[#D6DDEB] text-base leading-[160%] mt-[30px] w-[376px]">
                        Great platform for the job seeker that passionate about startups. Find your dream job easier.
                    </p>
                </div>
                <div className="flex justify-between w-[295px]">
                    <AboutMenu />
                    <ResourcesMenu />
                </div>
                <div className="w-[362px]"></div> {/* Placeholder for the right section */}
            </div>
        </div>
    );
}

export default Footer;