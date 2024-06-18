import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Computer from '../Model/Computer'
import { Html, Preload, useProgress } from '@react-three/drei'

function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html>
      <p className='text-2xl text-white'>{progress.toFixed(2)}%</p>
    </Html>
  );
}

export default function Hero() {
  return (
    <div className='flex justify-center'>
      <div className='container lg:w-3/4 p-4'>
        <div className='flex text-white mt-20 gap-5'>
          <div className='h-full w-2 flex flex-col items-center py-2'>
            <div className='h-4 w-4 rounded-full bg-violet-400'></div>
            <div className='w-1 h-[30vh] bg-gradient-to-b to-transparent from-violet-400'></div>
          </div>
          <div className='text-3xl'>
            <span className='text-6xl font-bold'>Hi, I'm <span className='text-violet-400'>Ayush</span></span><br /><br />
            Crafting stunning 3D web designs that  <br /> redefine digital experiences.
          </div>
        </div>

        <div className='text-white md:h-[70vh] h-[35vh]'>
          <Canvas frameloop='demand' shadows gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
              <Computer />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      </div>
    </div>
  )
}
