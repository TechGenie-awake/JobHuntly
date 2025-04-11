'use client';

import React from 'react';
import Link from 'next/link';

const CardData = [
    {
        id: 0,
        icon: "📧",
        role: "Marketing Specialist",
        company: "Revolut",
        location: "Madrid, Spain",
        description: "Create and manage email campaigns to drive user engagement and conversions.",
        tags: ["Marketing", "Campaigns"]
    },
    {
        id: 1,
        icon: "💼",
        role: "Product Designer",
        company: "Figma",
        location: "San Francisco, USA",
        description: "Design user interfaces and experiences for next-gen collaborative tools.",
        tags: ["Design", "UX/UI"]
    },
    {
        id: 2,
        icon: "🧠",
        role: "AI Research Intern",
        company: "OpenAI",
        location: "Remote",
        description: "Assist in large-scale model training and evaluation with the research team.",
        tags: ["AI", "Research"]
    },
    {
        id: 3,
        icon: "📱",
        role: "Mobile Developer",
        company: "ByteDance",
        location: "Beijing, China",
        description: "Develop and maintain cutting-edge mobile applications with React Native.",
        tags: ["React Native", "Mobile"]
    },
    {
        id: 4,
        icon: "🌐",
        role: "Frontend Engineer",
        company: "Mozilla",
        location: "Berlin, Germany",
        description: "Work on open-source projects and improve web performance across platforms.",
        tags: ["Frontend", "Open Source"]
    },
    {
        id: 5,
        icon: "🔒",
        role: "Cybersecurity Analyst",
        company: "Cloudflare",
        location: "Austin, USA",
        description: "Monitor and secure systems against threats using modern tools and techniques.",
        tags: ["Security", "Networking"]
    },
    {
        id: 6,
        icon: "💬",
        role: "Community Manager",
        company: "Discord",
        location: "Remote",
        description: "Grow and engage the community through events, content, and moderation.",
        tags: ["Community", "Engagement"]
    },
    {
        id: 7,
        icon: "📊",
        role: "Data Analyst",
        company: "Netflix",
        location: "Los Gatos, USA",
        description: "Analyze viewer behavior to support data-driven content decisions.",
        tags: ["Data", "SQL"]
    }
];

const tagStyles: Record<string, string> = {
    "Marketing": "bg-[#FFE0B2] text-[#E65100]",
    "Campaigns": "bg-[#FFEBEE] text-[#C62828]",
    "Design": "bg-[#E0F7FA] text-[#006064]",
    "UX/UI": "bg-[#F3E5F5] text-[#6A1B9A]",
    "AI": "bg-[#E8F5E9] text-[#2E7D32]",
    "Research": "bg-[#FFF3E0] text-[#EF6C00]",
    "React Native": "bg-[#E3F2FD] text-[#1565C0]",
    "Mobile": "bg-[#FFFDE7] text-[#F9A825]",
    "Frontend": "bg-[#F1F8E9] text-[#33691E]",
    "Open Source": "bg-[#FCE4EC] text-[#AD1457]",
    "Security": "bg-[#EDE7F6] text-[#4527A0]",
    "Networking": "bg-[#E0F2F1] text-[#004D40]",
    "Community": "bg-[#FFFDE7] text-[#FBC02D]",
    "Engagement": "bg-[#E1F5FE] text-[#0277BD]",
    "Data": "bg-[#E0F7FA] text-[#00796B]",
    "SQL": "bg-[#E8EAF6] text-[#3F51B5]"
};


function FeaturedJobsCards() {
    return (
        <div className="flex flex-wrap justify-between gap-y-[30px] mt-[30px]">
            {CardData.map((card) => (
                <Link href="/jobs" key={card.id}>
                    <div
                        key={card.id}
                        className="h-[283px] w-[274px] border border-[#D6DDEB] p-[24px] transition-transform duration-300 hover:shadow-xl hover:border-[#4640DE] hover:scale-105 cursor-pointer"
                    >
                        <div className='flex justify-between mb-6'>
                            <div className="h-[48px] w-[48px] rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                                {card.icon}
                            </div>
                            <div className="w-[91px] h-[31px] border border-[#4640DE] text-[#4640DE] text-center flex items-center justify-center text-sm">
                                Full Time
                            </div>
                        </div>
                        <p className="text-[#25324B] font-fahkwang text-[18px] leading-[160%] font-semibold">
                            {card.role}
                        </p>
                        <div className='flex items-center space-x-2 mb-4'>
                            <p className="font-epilogue text-[14px] text-[#515B6F]">
                                {card.company}
                            </p>
                            <div className="w-[4px] h-[4px] rounded-full bg-[#515B6F]" />
                            <p className="font-epilogue text-[14px] text-[#515B6F]">
                                {card.location}
                            </p>
                        </div>
                        <p className="font-epilogue text-[14px] text-[#7C8493]">
                            {card.description}
                        </p>
                        <div className='flex flex-wrap'>
                            {card.tags.map((tag, index) => (
                                <p
                                    key={index}
                                    className={`font-epilogue text-[13px] rounded-[16px] px-[8px] py-[2px] text-center mr-[10px] mt-[10px] ${tagStyles[tag] || 'bg-gray-200 text-gray-700'}`}
                                >
                                    {tag}
                                </p>
                            ))}

                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

const FeaturedJobs = () => {
    return (
        <div className="w-full px-[124px] py-[72px] bg-white">
            <h1 className="text-[70px] text-[#25324B] font-fahkwang font-bold">
                Featured <span className="text-[#26A4FF]">jobs</span>
            </h1>
            <FeaturedJobsCards />
        </div>
    );
}

export default FeaturedJobs;
