"use client";

import Image from 'next/image';
import Link from 'next/link';
import AnimatedButton from './ui/AnimatedButton';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-bgDark/80 backdrop-blur-lg">
        <div className="container mx-auto max-w-7xl px-5 py-4 flex justify-between items-center">
          <Link href="#hero" className="text-light no-underline flex items-center gap-3">
            <Image 
              src="/logo2.svg" 
              alt="Brewmyagent Logo" 
              width={40}
              height={40}
              className='w-8 h-8 md:w-10 md:h-10'
            />
            <span className="avalon-bold text-xl md:text-2xl hidden sm:inline">brewmyagent</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#solutions" className="text-light font-medium transition-colors hover:text-primaryAccent">Solutions</Link>
            <Link href="#process" className="text-light font-medium transition-colors hover:text-primaryAccent">Process</Link>
            <Link href="#case-study" className="text-textLight font-medium transition-colors hover:text-primaryAccent">Case Studies</Link>
            <AnimatedButton href="#cta">Book a Call</AnimatedButton>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-light focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-bgDark/90 backdrop-blur-xl z-40 flex items-center justify-center"
          onClick={toggleMenu}
        >
          <nav 
            className="flex flex-col items-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Link href="#solutions" onClick={toggleMenu} className="text-2xl text-light font-medium transition-colors hover:text-primaryAccent">Solutions</Link>
            <Link href="#process" onClick={toggleMenu} className="text-2xl text-light font-medium transition-colors hover:text-primaryAccent">Process</Link>
            <Link href="#case-study" onClick={toggleMenu} className="text-2xl text-textLight font-medium transition-colors hover:text-primaryAccent">Case Studies</Link>
            <AnimatedButton href="#cta" onClick={toggleMenu} className="text-2xl">Book a Call</AnimatedButton>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
