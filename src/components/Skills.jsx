import React from 'react'
import Golang from '../assets/golang.png';
import Python from '../assets/python.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 py-4'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                <p className='py-4'>These are the thechnologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2  sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md py-4 w-40 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={JavaScript} alt='Javascript'></img>
                    <p>Javascript</p>
                </div>
                <div className='shadow-md py-4 w-40 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='React'></img>
                    <p>React</p>
                </div>
                <div className='shadow-md py-4 w-40 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Golang} alt='Golang'></img>
                    <p>Golang</p>
                </div>
                <div className='shadow-md py-4 w-40 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='Python'></img>
                    <p>Python</p>
                </div>
                <div className='shadow-md py-4 w-40 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='Node'></img>
                    <p>Node</p>
                </div>
                <div className='shadow-md py-4 w-40 shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt='Mongo'></img>
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Skills