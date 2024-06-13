import React from 'react'
import { projects } from '.';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

function Card({ ele, key_ }) {
  return <Tilt>
    <motion.div variants={fadeIn("right", "spring", 0.5 * key_, 1)} className='max-w-[250px] shadow-md p-3 rounded-lg bg-[#0c1332] relative'>
      <img src={ele.image} alt={ele.heading} className='w-full rounded-md' /><br />
      <h1 className='font-bold my-4 text-gray-100'>{ele.heading}</h1>
      <h2 className='text-base text-gray-200' >{ele.content}</h2>
      <div className='text-base my-4'>#{ele.tags.join(" #")}</div>
      <div className='top-2 right-2 absolute'>ghg</div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quo alias eaque veritatis. Quaerat doloribus repellat laudantium quisquam laborum. Distinctio, eum soluta. Ut repellat quidem, pariatur tenetur illum magnam illo quae, accusamus incidunt commodi ducimus. Facilis excepturi assumenda blanditiis harum magni quisquam velit repellat maiores repellendus nesciunt, odit animi fugit!
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
