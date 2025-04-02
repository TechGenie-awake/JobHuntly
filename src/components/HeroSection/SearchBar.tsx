import React from 'react';

const JobSearch: React.FC = () => {
    return (
        <div className="flex w-[852px] h-[89px] mt-6 items-center space-x-4 p-4 bg-white shadow-md">
            <div className="flex items-center border-none shadow-md">
                <span className="px-4">

                </span>
                <input type="text" placeholder="Job title or keyword" className="border-none outline-none px-2 py-2 placeholder-gray-400 w-[305.5px]" />
            </div>
            <div className="relative ">
                <select className="border-none shadow-md p-2 w-[305.5px]">
                    <option>Florence, Italy</option>
                    <option>Rome, Italy</option>
                    <option>Milan, Italy</option>
                </select>
            </div>
            <button className="bg-[#4640DE] border border-transparent text-[#FFFFFF] px-4 py-2 hover:bg-[#FFFFFF] hover:text-[#4640DE] hover:border-[#4640DE] transition duration-200 shadow-md">
                Search my job
            </button>
        </div>
    );
};

export default JobSearch;