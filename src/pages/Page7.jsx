import React from 'react'
import video4 from '/src/assets/video4.mp4';
import video5 from '/src/assets/video5.mp4';


const Page7 = () => {
  return (
    <div className=' min-h-screen pt-5 p-4 bg-red-50 '>
      <div className='min-h-screen w-full mt-20 md:mt-72 bg-black rounded-[40px] overflow-hidden relative flex items-center justify-center shadow-xl shadow-red-300'> 

      <video
            className="w-full h-full object-cover opacity-50 absolute top-0 left-0"
            autoPlay
            muted
            loop
            src={video4}>
          </video>
          <video
            className="w-[70vw] md:w-[30vw] absolute left-1/2 md:left-20 top-1/2 transform -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 rounded-full"
            autoPlay
            muted
            loop
            src={video5}>
          </video>
          <div className="absolute p-12 md:p-9 flex flex-col items-center justify-center md:right-32 text-white top-[24vw] md:top-[1vw] space-y-5 md:space-y-10 w-full md:w-auto">
            <div className="mt-9 text-black md:text-white text-[15vw] md:text-[15vw] font-[anzo5] text-center leading-[4vw] md:leading-[4.6vw]">
              PERSONAL
              <div className="mt-5 md:mt-5 font-[anzo1] text-[3vw] md:text-[1.5vw] text-amber-200 md:text-[#9b9b9b] hover:scale-110 hover:text-sky-600 hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.4)] transition-all duration-300 ease-in-out">Intuition, Imagination, Discipline</div>
            </div>
            <div className="mt-4 text-black md:text-white text-[15vw] md:text-[15vw] font-[anzo5] text-center leading-[4vw] md:leading-[4.6vw]">
              PROFESSIONAL
              <div className="mt-5 md:mt-5 font-[anzo1] text-[3vw] md:text-[1.5vw] text-amber-200 md:text-[#9b9b9b]  hover:scale-110 hover:text-sky-600 hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.4)] transition-all duration-300 ease-in-out">Time Management, Multitasking, Creativity</div>
            </div>
            <div className="mt-4 text-black md:text-white text-[15vw] md:text-[15vw] font-[anzo5] text-center leading-[4vw] md:leading-[4.6vw]">
              ADDITIONAL
              <div className="mt-5 md:mt-5 font-[anzo1] text-[3vw] md:text-[1.5vw] text-amber-200 md:text-[#9b9b9b]  hover:scale-110 hover:text-sky-600 hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.4)] transition-all duration-300 ease-in-out">3D, Animation, AI Tools</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Page7