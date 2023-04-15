import React from 'react'
import {FaBars, FaGithub, FaLinkedin, FaTimes, FaMedium} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'



const Links = () => {
    return (
      <div name='links' className='block md:hidden w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='min-h-screen flex items-center'>
          <div className='w-full flex flex-col items-center'>
            <p className='text-4xl ml-4 font-bold inline border-b-4 border-pink-600 mb-4'>
              Links
            </p>
            <ul className='space-y-4 text-center'>
              <li className='mx-auto w-[160px] h-[60px] flex justify-between items-center bg-blue-600'>
                <a
                  target='_blank'
                  rel='nooppener noreferrer'
                  className='flex justify-between items-center w-full text-gray-300'
                  href='https://www.linkedin.com/in/griffinmcmurray12/'
                >
                  Linkedin <FaLinkedin size={30} />
                </a>
              </li>
              <li className='mx-auto w-[160px] h-[60px] flex justify-between items-center bg-[#333333]'>
                <a
                  target='_blank'
                  rel='nooppener noreferrer'
                  className='flex justify-between items-center w-full text-gray-300'
                  href='https://github.com/griffinmc22'
                >
                  Github <FaGithub size={30} />
                </a>
              </li>
              <li className='mx-auto w-[160px] h-[60px] flex items-center content-center bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                  Resume <BsFillPersonLinesFill size={30} />
                </a>
              </li>
              <li className='mx-auto w-[160px] h-[60px] flex items-center content-center bg-[#000000]'>
                <a
                  target='_blank'
                  rel='nooppener noreferrer'
                  className='flex justify-between items-center w-full text-gray-300'
                  href='https://medium.com/@griffinmc22'
                >
                  Medium <FaMedium size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  

export default Links