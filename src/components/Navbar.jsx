import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#0a1930] text-gray-300'>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to = '/' className='text-[#ffffff] text-xl font-bold'>Home</Link>
        </li>
        <li>
          <Link to = '/Projects' className='text-[#ffffff] text-xl font-bold'>Projects</Link>
        </li>
        <li>
          <Link to = '/Blog' className='text-[#ffffff] text-xl font-bold'>Blog</Link>
        </li>
        <li>
          <Link to = '/About' className='text-[#ffffff] text-xl font-bold'>About</Link>
        </li>
        <li>
          <Link to = '/Contact' className='text-[#ffffff] text-xl font-bold'>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-xl font-bold'>
          <Link to = '/'>Home</Link>
        </li>
        <li className='py-6 text-xl font-bold'>
          <Link to = '/Projects'>Projects</Link>
        </li>
        <li className='py-6 text-xl font-bold'>
          <Link to = '/Blog'>Blog</Link>
        </li>
        <li className='py-6 text-xl font-bold'>
          <Link to = '/About'>About</Link>
        </li>
        <li className='py-6 text-xl font-bold'>
          <Link to = '/Contact'>Contact</Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3f6dd4]'>
            <a
              className='font-bold flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/spencer-grewe-820a87157/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#312e2b]'>
            <a
              className='font-bold flex justify-between items-center w-full text-gray-300'
              href='https://github.com/sbgrewe'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#df733b]'>
            <a
              className='font-bold flex justify-between items-center w-full text-gray-300'
              href='mailto:spencer.grewe@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
