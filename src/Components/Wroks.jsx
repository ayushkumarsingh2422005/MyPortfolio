import React from 'react'
import { projects } from '.';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { BsGithub, BsGlobe2 } from 'react-icons/bs';
import getRandomLightHexColor from '../utils/randomColor';
import { CgWebsite } from 'react-icons/cg';

function Card({ ele, key_ }) {
  return <Tilt>
    <motion.div variants={fadeIn("right", "spring", 0.5 * key_, 1)} className='max-w-[250px] shadow-md p-3 rounded-lg bg-[#0c1332] relative h-full'>
      <img src={ele.image} alt={ele.heading} className='w-full rounded-md my-0' /><br />
      <h1 className='font-bold mb-4 text-gray-100'>{ele.heading}</h1>
      <h2 className='text-base text-gray-200' dangerouslySetInnerHTML={{ __html: ele.content }} ></h2>
      <div className='text-base mt-4'>{ele.tags && ele.tags.map((e, index) => {
        return <span style={{
          color: `${getRandomLightHexColor()}`
        }} key={index}> #{e}</span>
      })}</div>
      <div className='top-4 right-4 absolute bg-gray-900 rounded-full p-1 text-base shadow-slate-800 shadow-inner'>
        <a href={ele.repo} target="_blank" rel="noopener noreferrer">
          {key_ === 1 ? <BsGlobe2 /> : <BsGithub />}
        </a>
      </div>
    </motion.div>
  </Tilt>
}

export default function Wroks() {
  return (
    <div className='flex justify-center'>
      <div className='container lg:w-3/4 p-4 text-gray-200 text-2xl'>
        My Work
        <br />
        <span className='text-7xl font-bold'>Projects.</span><br /><br />
        <span className='text-xl'>
          I have developed a diverse range of applications, showcasing my expertise in full-stack development. My projects include a comprehensive restaurant management app, a general safety application for incident reporting and visualization, a student budgeting and finance tool created for a hackathon, and a sales management system for daily operations and inventory tracking. These projects demonstrate my proficiency in technologies like React, Express, Node.js, and SQLite, as well as my ability to integrate interactive features, ensure secure authentication, and manage complex data structures.
        </span> <br /><br /><br />

        <div className='flex gap-6 flex-wrap justify-center'>
          {projects.map((ele, index) => (
            <Card key_={index} ele={ele} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
