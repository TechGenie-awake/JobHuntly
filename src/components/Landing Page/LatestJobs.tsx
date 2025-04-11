'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LatestJobsBackground from './Images/LatestJobsBackground.png';
import BufferCompanyIcon from './Images/BufferCompanyIcon.png';
import InVisionCompanyIcom from './Images/InVisionCompanyIcon.png';
import HuggingFaceCompanyIcon from './Images/HuggingFaceCompanyIcon.webp';
import FigmaCompanyIcon from './Images/FigmaCompanyIcon.png';
import HashnodeCompanyIcon from './Images/HashnodeCompanyIcon.png';
import PostmanCompanyIcon from './Images/PostmanCompanyIcon.png';
import NetlifyCompanyIcon from './Images/NetlifyCompanyIcon.png';
import ZapierCompanyIcon from './Images/ZapierCompanyIcon.png';

const CardData = [
    {
        id: 0,
        icon: BufferCompanyIcon,
        role: "Content Strategist",
        company: "Buffer",
        location: "Remote",
        tags: ["Marketing", "Campaigns"]
    },
    {
        id: 1,
        icon: InVisionCompanyIcom,
        role: "UX Designer",
        company: "InVision",
        location: "Remote",
        tags: ["Design", "Frontend"]
    },
    {
        id: 2,
        icon: HuggingFaceCompanyIcon,
        role: "AI Research Intern",
        company: "Hugging Face",
        location: "Paris, France",
        tags: ["AI", "Python"]
    },
    {
        id: 3,
        icon: HashnodeCompanyIcon,
        role: "Frontend Engineer",
        company: "Hashnode",
        location: "Bangalore, India",
        tags: ["React", "Frontend"]
    },
    {
        id: 4,
        icon: ZapierCompanyIcon,
        role: "Growth Marketer",
        company: "Zapier",
        location: "Remote",
        tags: ["Marketing", "Community"]
    },
    {
        id: 5,
        icon: FigmaCompanyIcon,
        role: "Visual Designer",
        company: "Figma",
        location: "San Francisco, USA",
        tags: ["Design"]
    },
    {
        id: 6,
        icon: PostmanCompanyIcon,
        role: "Developer Advocate",
        company: "Postman",
        location: "Remote (India)",
        tags: ["Community", "Marketing"]
    },
    {
        id: 7,
        icon: NetlifyCompanyIcon,
        role: "Frontend Intern",
        company: "Netlify",
        location: "Remote",
        tags: ["Frontend", "React"]
    }
];


const tagStyles: Record<string, string> = {
    Marketing: "bg-[#FFF3E0] text-[#FB8C00] border border-[#FB8C00]",
    Design: "bg-[#E0F7FA] text-[#00838F] border border-[#00838F]",
    Campaigns: "bg-[#FFEBEE] text-[#C62828] border border-[#C62828]",
    Frontend: "bg-[#F1F8E9] text-[#558B2F] border border-[#558B2F]",
    AI: "bg-[#E8F5E9] text-[#2E7D32] border border-[#2E7D32]",
    Python: "bg-[#EDE7F6] text-[#5E35B1] border border-[#5E35B1]",
    React: "bg-[#E3F2FD] text-[#1565C0] border border-[#1565C0]",
    Community: "bg-[#FFFDE7] text-[#F9A825] border border-[#F9A825]"
};

function LatestJobsCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CardData.map((card) => (
                <Link href="/jobs" key={card.id}>
                    <div
                        key={card.id}
                        className="h-[149px] w-[580px] bg-white mb-[20px] p-[24px] flex rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300"
                    >
                        <div className='h-[64px] w-[64px] bg-white-200 mr-8 rounded-full overflow-hidden relative'>
                            <Image
                                src={card.icon.src}
                                alt="icon"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <p className="text-[#25324B] font-fahkwang text-[20px] leading-[120%] font-semibold">
                                {card.role}
                            </p>
                            <div className='flex items-center mt-2 gap-2'>
                                <p className="font-epilogue font-normal text-[16px] leading-[160%] text-[#515B6F]">
                                    {card.company}
                                </p>
                                <div className="w-[4px] h-[4px] rounded-full bg-[#515B6F] mt-[8px]"></div>
                                <p className="font-epilogue font-normal text-[16px] leading-[160%] text-[#515B6F]">
                                    {card.location}
                                </p>
                            </div>
                            <div className='flex items-center mt-2'>
                                <p className="font-epilogue text-[14px] text-[#56CDAD] bg-[#56CDAD1A] rounded-[16px] px-[8px] py-[2px]">
                                    Full Time
                                </p>
                                <div className="w-[1px] h-[34px] bg-[#D6DDEB] mx-2"></div>
                                <div className='flex flex-wrap'>
                                    {card.tags.map((tag, index) => (
                                        <p
                                            key={index}
                                            className={`font-epilogue text-[14px] rounded-[16px] px-[8px] py-[2px] text-center mr-[10px] mb-[4px] ${tagStyles[tag] || 'bg-gray-100 text-gray-600 border border-gray-300'}`}
                                        >
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

const LatestJobs = () => {
    return (
        <div className="bg-cover h-auto w-full px-4 md:px-[124px] py-[72px]" style={{ backgroundImage: `url(${LatestJobsBackground.src})` }}>
            <h1 className="text-[48px] md:text-[70px] text-[#25324B] font-fahkwang font-bold mb-12">
                Latest <span className="text-[#26A4FF]">jobs open</span>
            </h1>
            <LatestJobsCards />
        </div>
    );
}

export default LatestJobs;
