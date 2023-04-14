import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Welcome to my digital home! As a business administration graduate who has transitioned into a data analyst role, I am passionate about harnessing the power of programming to unlock innovative solutions in the insurance industry. With a strong foundation in data-driven decision making and a keen eye for identifying trends, I am excited to embark on the next stage of my career, venturing into the realm of software development and programming.</p>
                        <p className='py-2'>As I make the transition from crunching numbers to crafting code, my ultimate goal is to seamlessly integrate my analytical skills and love for technology to create transformative applications. By doing so, I aim to drive efficiency, growth, and success in the modern business landscape, and contribute to a more connected, innovative future.</p>

                    </div>
            </div>
        </div>
        
    </div>
  )
}

export default About