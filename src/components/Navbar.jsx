import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <a href = '/' className='text-xl font-bold'>Home</a>
        </li>
        <li>
          <a href = '/Projects' className='text-xl font-bold'>Projects</a>
        </li>
        <li>
          <a href = '/Blog' className='text-xl font-bold'>Blog</a>
        </li>
        <li>
          <a href = '/About' className='text-xl font-bold'>About</a>
        </li>
        <li>
          <a href = '/Contact' className='text-xl font-bold'>Contact</a>
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
          <a href = '/'>Home</a>
        </li>
        <li className='py-6 text-xl font-bold'>
          <a href = '/Projects'>Projects</a>
        </li>
        <li className='py-6 text-xl font-bold'>
          <a href = '/Blog'>Blog</a>
        </li>
        <li className='py-6 text-xl font-bold'>
          <a href = '/About'>About</a>
        </li>
        <li className='py-6 text-xl font-bold'>
          <a href = '/Contact'>Contact</a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/sbgrewe'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
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
