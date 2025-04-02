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

const SocialIcons: React.FC = () => {
    const icons = [
        { alt: '1' },
        { alt: '2' },
        { alt: '3' },
        { alt: '4' },
        { alt: '5' },
    ];

    return (
        <div className="flex justify-center space-x-4 mt-2">
            {icons.map((icon, index) => (
                <a
                    href="#"
                    key={index}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                >
                    <div className="w-full h-full rounded-full bg-gray-400 flex items-center justify-center">
                        {/* Placeholder for icon */}
                        <span className="text-white">{icon.alt}</span>
                    </div>
                </a>
            ))}
        </div>
    );
};

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
                <div className="w-[362px]">
                    <p className="font-semibold text-white text-lg mb-4">Get job notifications</p>
                    <p className="font-light text-[#D6DDEB] text-base mb-4 tracking-wider w-[306px] ">The latest job news, articles, sent to your inbox weekly.</p>
                    <div className='flex gap-2'>
                        <input type="text" placeholder="Email Address" className="border-none outline-none px-2 py-2 placeholder-gray-400 w-[223px] h-[50px] bg-white" />
                        <button className="bg-[#4640DE] border border-transparent text-[#FFFFFF] px-4 py-2 hover:bg-[#FFFFFF] hover:text-[#4640DE] hover:border-[#4640DE] transition duration-200 shadow-md w-[131px] h-[50px]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-[1300px] h-[0px] border-b-1 border-white mx-[124px] mt-[-40px]"></div>
            <div className='flex items-center justify-between mx-[124px]'>
                <p className="font-epilogue font-light text-[16px] leading-[160%] text-[#FFFFFF] mt-[20px]">
                    2021 @ JobHuntly. All rights reserved.
                </p>
                <SocialIcons />
            </div>
        </div>
    );
}

export default Footer;