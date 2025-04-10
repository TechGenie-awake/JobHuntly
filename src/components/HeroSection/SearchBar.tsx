'use client';

import React from 'react';
import Image from 'next/image';
import SearchIcon from './icons/SearchIcon.png';
import LocationIcon from './icons/LocationIcon.png';

interface JobSearchProps {
    onSearch: () => void;
}

const JobSearch: React.FC<JobSearchProps> = ({ onSearch }) => {
    return (
        <div className="flex w-[852px] h-[89px] mt-6 items-center space-x-4 p-4 bg-white shadow-md">
            <div className="flex items-center bg-white shadow-md px-2 py-2 w-[305.5px]">
                <Image src={SearchIcon} alt="Search Icon" className="w-7 h-7 mr-2" />
                <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="border-none outline-none placeholder-gray-400 w-full"
                />
            </div>

            {/* Location dropdown with icon */}
            <div className="flex items-center bg-white shadow-md px-2 py-2 w-[305.5px]">
                <Image src={LocationIcon} alt="Location Icon" className="w-7 h-7 mr-2" />
                <select className="border-none outline-none w-full bg-white">
                    <option>Florence, Italy</option>
                    <option>Rome, Italy</option>
                    <option>Milan, Italy</option>
                </select>
            </div>

            {/* Search button */}
            <button
                onClick={onSearch}
                className="bg-[#4640DE] border border-transparent text-[#FFFFFF] px-4 py-2 hover:bg-[#FFFFFF] hover:text-[#4640DE] hover:border-[#4640DE] transition duration-200 shadow-md"
            >
                Search my job
            </button>
        </div>
    );
};

export default JobSearch;
