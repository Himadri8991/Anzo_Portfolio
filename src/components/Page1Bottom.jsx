import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('#banner img', {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
  })

  return (
    <div className='absolute bottom-0 left-0 p-6 sm:p-12 w-full flex flex-col sm:flex-row items-end justify-between'>
        <div className='ml-0 sm:ml-6 mt-0 text-right sm:text-left'>
            <h2 className='text-[14px] sm:text-[17.5px] font-[anzo4]'>BRAND DESIGN | WEBSITE DESIGN</h2>
            <h3 className='text-[14px] sm:text-[17.5px] leading-3 font-[anzo3] text-gray-400'>BESPOKE FREELANCE</h3>

        </div>
        <div id='banner' className='flex flex-row sm:flex-col justify-center sm:justify-end mt-4 sm:mt-0'> 
            <img className='mb-4 sm:mb-7 w-12 h-12 sm:w-16 sm:h-16' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
            <img className='w-12 h-12 sm:w-16 sm:h-16' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
        </div>
    </div>
  )
}

export default Page1Bottom