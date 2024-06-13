import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Nev from './Components/Nev'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Tech from './Components/Tech'
import Wroks from './Components/Wroks'
import Feedbacks from './Components/Feedbacks'
import Contact from './Components/Contact'
import Stars from './Components/Stars'
// import bgHero from './assets/bg.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-[url("./assets/bg.png")]'>
          <Nev />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Wroks />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
