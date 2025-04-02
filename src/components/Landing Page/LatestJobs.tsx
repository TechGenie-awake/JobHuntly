'use client';

import React from 'react';
import LatestJobsBackground from './Images/LatestJobsBackground.png';

const CardData = [
    { id: 0, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 1, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 2, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 3, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 4, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 5, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 6, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] },
    { id: 7, icon: "", role: "Social Media Assistant", company: "Nomad", location: "Paris, France", tags: ["Marketing", "Design"] }
];

function LatestJobsCards() {
    const Cards = CardData.map((card) => (
        <div key={card.id} className="h-[149px] w-[580px] bg-white mb-[20px] p-[24px] flex"> {/* Reduced mb from 28px to 20px */}
            <div className='h-[64px] w-[64px] bg-gray-400 mr-8'>{card.icon}</div>
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
                <div className='flex items-center'>
                    <p className="font-epilogue font-normal text-[14px] leading-[160%] text-[#56CDAD] bg-[#56CDAD1A] rounded-[16px] px-[8px]">
                        Full Time
                    </p>
                    <div className="w-[1px] h-[34px] bg-[#D6DDEB] mx-2"></div>
                    <div className='flex'>
                        {card.tags.map((tag, index) => (
                            <p key={index} className="font-epilogue font-normal text-[16px] leading-[160%] text-[#FFB836] border border-[#FFB836] rounded-[16px] px-[8px] mr-[10px]">
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2"> {/* Reduced gap from 6 to 4 */}
            {Cards}
        </div>
    );
}

const LatestJobs = () => {
    return (
        <div className="bg-cover h-[877px] w-full px-4 md:px-[124px] py-[72px]" style={{ backgroundImage: `url(${LatestJobsBackground.src})` }}>
            <h1 className="text-[70px] text-[#25324B] font-fahkwang font-bold">
                Latest <span className="text-[#26A4FF]">jobs open</span> </h1>
            <LatestJobsCards />
        </div>
    );
}

export default LatestJobs;