 import React from 'react'
 const TiltText = (props) => {
   return (
    <div id='tiltDiv' ref={props.abc} className='mt-36  sm:text-left'>
        <h1 className='text-[32px] sm:text-[58px] leading-[3vw] uppercase font-[anzo1]'>I Am <span className='text-black'>DARK MODE</span>™</h1>
        <h1 className='text-[8vw] sm:text-[8vw] leading-[8vw] font-[anzo1]'>DESIGNER</h1>
        <h1 className='text-[32px] sm:text-[58px] leading-[3vw] uppercase font-[anzo1]'>To Hire</h1>
    </div>
   )
 }

 export default TiltText