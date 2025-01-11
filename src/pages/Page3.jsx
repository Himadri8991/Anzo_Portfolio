import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative flex items-center justify-center bg-red-200'>
        <img className='absolute z-20 h-[40vh] sm:h-[85vh] w-[75vw] sm:w-[65vw]' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_567,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
        <video autoPlay={true} loop muted className='h-[40vh] sm:h-[73vh] w-[56vw] sm:w-[48vw] relative object-cover z-10' src="/src/assets/file1.mp4"></video>
        <div className='h-0.5 w-4/6 sm:w-4/6 top-[40%] sm:top-[35%] absolute z-0 bg-gray-500'></div>
        <div className='h-0.5 w-5/6 sm:w-5/6 top-[50%] sm:top-[58%] absolute z-0 bg-gray-500'></div>
        <div className='h-0.5 w-full top-[60%] sm:top-[78%] absolute z-0 bg-gray-500'></div>
    </div>
  )
}

export default Page3
