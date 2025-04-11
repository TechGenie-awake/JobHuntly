"use client";

import Image from 'next/image';
import logo from './logo.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();

  return (
    <header className="absolute w-full h-[78px] flex justify-between items-center px-[124px] z-10">
      <div className='flex items-center'>
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={32} height={32} className="object-contain" priority />
          <h1 className="text-[#25324B] font-bold font-sans pl-2 text-[24px] leading-[150%]">JobHuntly</h1>
        </Link>
        <div className='ml-4'>
          <Link href="/jobs" className="text-[#515B6F] font-medium text-[16px] font-sans leading-[160%] px-2 hover:text-[#4640DE]">Find Jobs</Link>
          <Link href="/companies" className="text-[#515B6F] font-medium text-[16px] font-sans leading-[160%] px-2 hover:text-[#4640DE]">Browse Companies</Link>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <button
          onClick={() => router.push('/login&signup')}
          className="h-[50px] w-[92px] rounded-[4px] text-[#4640DE] hover:bg-[#4640DE] hover:text-white transition-colors duration-300"
        >
          Login
        </button>
        <div className="w-[3px] h-[40px] bg-[#D6DDEB]"></div>
        <button
          onClick={() => router.push('/login&signup')}
          className="h-[50px] w-[92px] rounded-[4px] text-white bg-[#4640DE] hover:bg-white hover:text-[#4640DE] transition-colors duration-300"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}
