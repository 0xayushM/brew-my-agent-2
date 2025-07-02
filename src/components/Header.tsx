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
    <header className="fixed top-0 left-0 w-full py-5 z-10 backdrop-blur-lg">
      <div className="container mx-auto max-w-7xl px-5 flex justify-between items-center">
        <Link href="#hero" className="font-heading text-2xl text-light no-underline flex items-center gap-2">
          <Image 
            src="/logo2.svg" 
            alt="Brewmyagent Logo" 
            width={50}
            height={50}
          />
          <span className="font-heading text-2xl text-light no-underline flex items-center gap-2 hidden md:block">brewmyagent</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center list-none">
            <li className="ml-6 first:ml-0">
              <Link href="#solutions" className="text-light font-medium transition-colors hover:text-primaryAccent">
                Solutions
              </Link>
            </li>
            <li className="ml-6">
              <Link href="#process" className="text-light font-medium transition-colors hover:text-primaryAccent">
                Process
              </Link>
            </li>
            <li className="ml-6">
              <Link href="#case-study" className="text-textLight font-medium transition-colors hover:text-primaryAccent">
                Case Studies
              </Link>
            </li>
            <li className="ml-6">
              <AnimatedButton href="#cta">
                Book a Call
              </AnimatedButton>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-light focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark h-screen py-5">
            <ul className="flex flex-col items-center list-none">
              <li className="mb-4">
                <Link href="#solutions" onClick={toggleMenu} className="text-light font-medium transition-colors hover:text-primaryAccent">
                  Solutions
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#process" onClick={toggleMenu} className="text-light font-medium transition-colors hover:text-primaryAccent">
                  Process
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#case-study" onClick={toggleMenu} className="text-textLight font-medium transition-colors hover:text-primaryAccent">
                  Case Studies
                </Link>
              </li>
              <li>
                <AnimatedButton href="#cta" onClick={toggleMenu}>
                  Book a Call
                </AnimatedButton>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
