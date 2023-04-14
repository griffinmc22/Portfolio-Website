import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { animateScroll as scroll } from 'react-scroll';

const Home = () => {
  const scrollToElement = (elementName) => {
    const elements = document.getElementsByName(elementName);
    if (elements.length > 0) {
      scroll.scrollTo(elements[0].offsetTop, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
    } else {
      console.warn(`Element with name "${elementName}" not found.`);
    }
  };

  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className= 'text-pink-600 text-xl' > Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Griffin McMurray</h1>
            <h2 className='text 4xl sm:text-7xl font-bold text-[#8892b0]'> I am a Full Stack Developer...</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> Discover the fusion of data analysis and programming expertise, where a passion for technology meets innovative problem-solving to drive business growth and success. Welcome to my journey.</p>
            <div>
                <button onClick={()=> scrollToElement('work')} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> View Work 
                  <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3'/>
                  </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home