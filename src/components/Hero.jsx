import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center max-w-[900px] mx-auto p-4'>
    <div className='flex flex-col gap-4'>
      <p className='text-xl'>It's time to... </p>
      <h1 className='uppercase font-bold text-5xl sm:text-6xl md:text-7xl lg-text-8xl'>Gr<span className='text-blue-500'>ind</span></h1>
      </div>
      <p className='text-sm md:text-base font-light '>I hereby acknowledgement that I may become <span className='text-red-500 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-500 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
      <Button func={()=> window.location.href='#generate'} text={'Accept & begin'} />
    </div>

  )
}

export default Hero
