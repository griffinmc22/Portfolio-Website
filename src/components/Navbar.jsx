import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaGithub, FaLinkedin, FaTimes, FaMedium} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo Image'style={{width: '50px'}}/>
        </div>
        {/* menu */}
           <ul className='hidden md:flex border-2 rounded-lg p-2 bg-[#0a192f]'>
                <li className='hover:text-pink-500'>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li className='hover:text-pink-500'>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li className='hover:text-pink-500'>
                <Link to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                {/* <li className='hover:text-pink-500'>
                <Link to="work" smooth={true} duration={500}>
                Work
                </Link>
                </li> */}
                <li className='hover:text-pink-500'>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul> 

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li  className='py-6 text-center w-40 text-4xl border-2 rounded-lg'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link></li>
            <li className='py-6 m-4 text-center w-40 text-4xl border-2 rounded-lg'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li className='py-6 text-center w-40 text-4xl border-2 rounded-lg'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            {/* <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                Work
                </Link>
            </li> */}
            <li className='py-6 m-4 text-center w-40 text-4xl border-2 rounded-lg'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>
        
        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a target='_blank' rel='nooppener noreferrer' className='flex justify-between items-center w-full text-gray-300' 
                    href='https://www.linkedin.com/in/griffinmcmurray12/'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a target='_blank' rel='nooppener noreferrer' className='flex justify-between items-center w-full text-gray-300' 
                    href='https://github.com/griffinmc22'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href='/'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
                    <a target='_blank' rel='nooppener noreferrer'className='flex justify-between items-center w-full text-gray-300' 
                    href='https://medium.com/@griffinmc22'>
                        Medium <FaMedium size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar