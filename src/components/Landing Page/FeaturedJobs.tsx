'use client';

import React from 'react';

const CardData = [
    { id: 0, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 1, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 2, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 3, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 4, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 5, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 6, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] },
    { id: 7, icon: "", role: "Email Marketing", company: "Revolut", location: "Madrid, Spain", description: "Revolut is looking for Email Marketing to help team ma...", tags: ["Marketing", "Design"] }
];

function FeaturedJobsCards() {
    const Cards = CardData.map((card) => (
        <div key={card.id} className="h-[283px] w-[274px] border border-[#D6DDEB] mt-[30px] p-[24px]">
            <div className='flex justify-between mb-8'>
                <div className="h-[48px] w-[48px] rounded-full bg-gray-400">{card.icon}</div>
                <div className="w-[91px] h-[31px] border border-[#4640DE] text-[#4640DE] text-center flex items-center justify-center">
                    Full Time
                </div>
            </div>
            <p className="text-[#25324B] font-fahkwang text-[18px] leading-[160%] font-semibold">
                {card.role}
            </p>
            <div className='flex items-center justify-between mr-7 mb-6'>
                <p className="font-epilogue font-normal text-[16px] leading-[160%] text-[#515B6F]">
                    {card.company}
                </p>
                <div className="w-[4px] h-[4px] rounded-full bg-[#515B6F] mt-[8px]"></div>
                <p className="font-epilogue font-normal text-[16px] leading-[160%] text-[#515B6F]">
                    {card.location}
                </p>
            </div>
            <p className="font-epilogue font-normal text-[16px] leading-[160%] text-[#7C8493]">
                {card.description}
            </p>
            <div className='flex'>
                {card.tags.map((tag, index) => (
                    <p key={index} className="font-epilogue font-normal text-[16px] leading-[160%] text-[#FFB836] bg-[#EB85331A] rounded-[16px] px-[8px] text-center mr-[10px] mt-[10px]">
                        {tag}
                    </p>
                ))}
            </div>
        </div>
    ));

    return (
        <div className="flex flex-wrap justify-between">
            {Cards}
        </div>
    );
}

const FeaturedJobs = () => {
    return (
        <div className="h-[779px] w-full px-[124px] py-[72px ">
            <h1 className="text-[70px] text-[#25324B] font-fahkwang font-bold">
                Featured <span className="text-[#26A4FF]">jobs</span>
            </h1>
            <FeaturedJobsCards />
        </div>
    );
}

export default FeaturedJobs;