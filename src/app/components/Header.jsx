import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-5 px-8 bg-white">
      <Link href="/" passHref>
        <Image
          src={logo}
          alt="SINC Partners Logo"
          width={120}
          height={40}
        />
      </Link>
      <div className="md:hidden mt-4">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav
        className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 ${
          isOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <Link href="/about" passHref>About</Link>
        <Link href="/sip" passHref>SIP</Link>
        <Link href="/studio" passHref>Studio</Link>
        <Link href="/seeq" passHref>SEEQ</Link>
        <Link href="/platforms" passHref>Platforms</Link>
        <Link href="/initiatives" passHref>Initiatives</Link>
        <Link href="/more" passHref>More</Link>
      </nav>
      <div
        className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 ${
          isOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <Link href="/contact" passHref className="bg-teal-600 btn hover:bg-teal-700 ease-in-out">SINC With Us
        </Link>
        <Link href="/apply" passHref className="btn bg-neutral-700 hover:bg-neutral-900 ease-in-out">Apply to SIP 1.0
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
