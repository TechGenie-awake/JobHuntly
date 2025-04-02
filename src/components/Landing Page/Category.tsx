'use client';

import React from 'react';
import ArrowRight from './Images/ArrowRight.png';

const CardData = [
    { id: 0, Category: 'Design', Icon: '', Jobs: 235 },
    { id: 1, Category: 'Sales', Icon: '', Jobs: 756 },
    { id: 2, Category: 'Marketing', Icon: '', Jobs: 140 },
    { id: 3, Category: 'Finance', Icon: '', Jobs: 325 },
    { id: 4, Category: 'Technology', Icon: '', Jobs: 436 },
    { id: 5, Category: 'Engineering', Icon: '', Jobs: 542 },
    { id: 6, Category: 'Business', Icon: '', Jobs: 211 },
    { id: 7, Category: 'Human Resource', Icon: '', Jobs: 346 }
];

function CategoryCard() {
    const Cards = CardData.map((card) => (
        <div
            key={card.id}
            className="h-[214px] w-[274px] border border-[#D6DDEB] mt-[30px] p-[32px] hover:bg-[#4640DE] transition-colors duration-200 group" // Added 'group' class
        >
            <div className="h-[48px] w-[48px] bg-gray-400"></div>
            <p className="text-[#25324B] font-fahkwang text-[24px] leading-[120%] font-semibold mt-[30px] mb-[-20px] group-hover:text-white"> {/* Added 'group-hover:text-white' */}
                {card.Category}
            </p>
            <div className="flex items-center mr-6">
                <p className="font-epilogue font-normal text-[18px] leading-[160%] tracking-[1px] text-[#7C8493] h-[26px] w-[364px] my-[30px] group-hover:text-white"> {/* Added 'group-hover:text-white' */}
                    {card.Jobs} jobs available
                </p>
                <div
                    className="h-[24px] w-[44px] bg-cover mt-[5px]"
                    style={{ backgroundImage: `url(${ArrowRight.src})` }}
                />
            </div>
        </div>
    ));

    return (
        <div className="flex flex-wrap justify-between">
            {Cards}
        </div>
    );
}

const Category = () => {
    return (
        <div className="h-[633px] w-full py-[72px] px-[124px]">
            <h1 className="text-[70px] text-[#25324B] font-fahkwang font-bold">
                Explore by <span className="text-[#26A4FF]">category</span>
            </h1>
            <CategoryCard />
        </div>
    );
}

export default Category;