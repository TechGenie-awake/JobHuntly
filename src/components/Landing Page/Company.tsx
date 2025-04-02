'use client';

import React from 'react';
import Image from 'next/image';
import Vodafone from './Images/Vodafone.png';
import Intel from './Images/Intel.png';
import Tesla from './Images/Tesla.png';
import AMD from './Images/AMD.png';
import Talkit from './Images/Talkit.png';

const CompanyData = [
    { id: 0, image: Vodafone },
    { id: 1, image: Intel },
    { id: 2, image: Tesla },
    { id: 3, image: AMD },
    { id: 4, image: Talkit }
];

function Companies() {
    const CompanyCards = CompanyData.map((company) => (
        <Image
            className="max-w-none h-10 w-auto block"
            src={company.image}
            alt="Company"
            key={company.id}
        />
    ));

    return (
        <div className="flex flex-wrap justify-between gap-4">
            {CompanyCards}
        </div>
    );
}

const Company = () => {
    return (
        <div className="h-[197px] w-full py-[72px] px-[124px]">
            <p className="font-epilogue font-light text-[18px] leading-[160%] tracking-[1px] text-[#515B6F] mb-[30px]">
                Companies we helped grow
            </p>
            <Companies />
        </div>
    );
}

export default Company;