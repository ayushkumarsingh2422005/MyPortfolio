import React from 'react';
import { services } from '.';
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import { fadeIn } from '../utils/motion';

function Card({ ele, key_}) {
  return <Tilt>
    <div className='bg-gray-400 rounded-md p-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'>
      <motion.div variants={fadeIn("right", "spring", 0.5*key_, 1)} className='w-full shadow-md px-4 py-9 md:px-11 md:py-24 rounded-md bg-[#0c1332] text-center'>
        <img src={ele.icon} alt={ele.name} className='size-[100px] mx-auto'/><br />
        {ele.name}
      </motion.div>
    </div>
  </Tilt>
}

export default function About() {
  return (
    <div className='flex justify-center'>
      <div className='container lg:w-3/4 p-4 text-gray-200 text-2xl'>
        INTRODUCTION
        <br />
        <span className='text-7xl font-bold'>Overview</span><br /><br />
        <span className='text-xl'>
        I'm Ayush Kumar, a passionate BTech CSE student at NIT Jamshedpur. With a love for technology, I specialize in full-stack development, Android app development, and machine learning. I thrive on crafting innovative solutions and creating seamless user experiences. Explore my journey and projects to see how I'm shaping the future of tech, one line of code at a time. <br /><br />My experties are as follow
        </span> <br /><br /><br />

        <div className='flex gap-6 flex-wrap justify-center'>
          {services.map((ele, index) => (
            <Card key_={index} ele={ele} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}
