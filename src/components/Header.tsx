import Image from 'next/image';
import Link from 'next/link';
import AnimatedButton from './ui/AnimatedButton';

const Header = () => {
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
          <span>brewmyagent</span>
        </Link>
        <nav>
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
      </div>
    </header>
  );
};

export default Header;
