import React from 'react'

const Page5 = () => {
  return (
    <div className='h-screen relative p-3 bg-red-200'>
      <div className='h-full w-full shadow-xl shadow-white overflow-hidden bg-black rounded-[40px]'>
        <video autoPlay={true} loop muted className="h-full w-full object-cover" src="/src/assets/moon.mp4"></video>
        <h1 className='font-[anzo5] text-[45vw] md:text-[40vw] absolute uppercase left-12 md:left-20 bottom-20 md:-bottom-44'>About</h1>
      </div>
    </div>
  )
}

export default Page5