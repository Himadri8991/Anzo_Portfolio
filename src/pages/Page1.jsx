import React, { useRef, useState } from 'react'
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'
import Page1Bottom from '../components/Page1Bottom'
import TiltText from '../components/TiltText';

const Page1 = () => {


      const tiltRef = useRef(null)
      const [xVal, setXVal] = useState(0)
      const [yVal, setYVal] = useState(0)

      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      const mouseMoving = (e) => {
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/20)
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/6)

        tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`

        if (!isTouchDevice) {
          setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 20);
          setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 6);
          tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
        }
      }

      useGSAP(function(){
        gsap.to(tiltRef.current, {
          transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
          duration: 7,
          ease: 'power4.out'
          //ease: 'elastic.out(1,0.3)'
        })
        if (!isTouchDevice) {
          gsap.to(tiltRef.current, {
            transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration: 7,
            ease: 'power4.out',
          })
        }
      }, [xVal, yVal])

  return (
    <div id='page1' onMouseMove={(e)=>{
      mouseMoving(e)
    }} className='h-[112vh] p-3 relative bg-red-200'>
        <div id='page1-in' className='relative shadow-xl p-6 sm:p-12 shadow-gray-900 min-h-[95vh] sm:min-h-screen bg-cover w-full rounded-[40px]'
        style={{
          backgroundImage: 'url(src/assets/me1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
            <img className='h-10 sm:h-16 ml-6' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />

            <TiltText abc={tiltRef} />
            <Page1Bottom />
        </div>

    </div>
  )
}

export default Page1