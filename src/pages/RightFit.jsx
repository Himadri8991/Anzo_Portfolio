import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
const Page5 = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
        gsap.to(".clockrotate", {
            rotate: 360,
            // stagger: 3,
            duration: 20,
            scrollTrigger: {
                trigger: ".clockrotate",
                start: "top 98%",
                end: "top -70%",
                scrub: 4,
                // markers: 'true'
            }
        });
        gsap.from(".showanimation1", {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".showanimation1",
                start: "top 90%", // Start animation when element is 90% in viewport
                end: "top 50%", // End when element is 50% in viewport
                scrub: 1,
                // // markers: "true"
            },
        });
        gsap.from(".showanimation2", {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".showanimation2",
                start: "top 90%", // Start animation when element is 90% in viewport
                end: "top 50%", // End when element is 50% in viewport
                scrub: 1,
                // markers: "true"
            },
        });
        gsap.from(".showanimation3", {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".showanimation3",
                start: "top 90%", // Start animation when element is 90% in viewport
                end: "top 50%", // End when element is 50% in viewport
                scrub: 1,
                // markers: "true"
            },
        });
        gsap.from(".showanimation4", {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".showanimation4",
                start: "top 90%", // Start animation when element is 90% in viewport
                end: "top 50%", // End when element is 50% in viewport
                scrub: 1,
                // markers: "true"
            },
        });
        gsap.from(".showanimation5", {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".showanimation5",
                start: "top 90%", // Start animation when element is 90% in viewport
                end: "top 50%", // End when element is 50% in viewport
                scrub: 1,
                // markers: "true"
            },
        });
        gsap.from(".showanimation6", {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".showanimation6",
                start: "top 90%", // Start animation when element is 90% in viewport
                end: "top 50%", // End when element is 50% in viewport
                scrub: 1,
                // markers: "true"
            },
        });
        gsap.from(".showanimation7", {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".showanimation7",
                start: "top 90%", // Start animation when element is 90% in viewport
                end: "top 50%", // End when element is 50% in viewport
                scrub: 1,
                // // markers: "true"
            },
        });
        gsap.from(".showanimation8", {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".showanimation8",
                start: "top 90%", // Start animation when element is 90% in viewport
                end: "top 50%", // End when element is 50% in viewport
                scrub: 1,
                // markers: "true"
            },
        });
    })

    return (
        <div>
            <div>
                <div className='h-[160vh] w-full px-3 py-5 bg-red-100  text-white'>
                    <div className='relative pl-16 pt-10 h-full w-full shadow-xl shadow-white bg-black rounded-[40px]'>
                        <h1 className='absolute top-10 left-20 text-[20vw] font-[anzo5] leading-[38vh]' >RIGHT <br />FIT</h1>
                        <img className='clockrotate w-[27%] absolute top-[90vh] left-10 ' src="https://static.wixstatic.com/media/11062b_b42f6deed88e48509affdc02c3eb5b45f000.png/v1/fill/w_411,h_411,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_b42f6deed88e48509affdc02c3eb5b45f000.png " alt="" />
                        <div className=' absolute top-3 right-20 w-[60%]'>
                            <h1 className='showanimation1 mt-10 text-[17px] font-[anzo2] tracking-wider text-zinc-400 ' >PERSONALITY <br /> <span className='text-white font-[anzo1] tracking-wider'>Business relationships build on trust and compassion vs how can I get more for less +/-</span></h1>
                            <h1 className='showanimation2 mt-10 text-[17px] font-[anzo2] tracking-wider text-zinc-400 ' >APPROACH <br /> <span className='text-white font-[anzo1] tracking-wider'>Full dive into personality, goals and objectives with transparency of worq process vs template and unmanageable office routine +/-</span></h1>
                            <h1 className='showanimation3 mt-10 text-[17px] font-[anzo2] tracking-wider text-zinc-400 ' >DESIGN <br /> <span className='text-white font-[anzo1] tracking-wider'>Design that is actually functional and helps to achieve results is design that works +/-</span></h1>
                            <h1 className='showanimation4 mt-10 text-[17px] font-[anzo2] tracking-wider text-zinc-400 ' >FOCUS <br /> <span className='text-white font-[anzo1] tracking-wider'>How can I help and what can I do solve your problem or objective vs how can I sell you more +/-</span></h1>
                            <h1 className='showanimation5 mt-10 text-[17px] font-[anzo2] tracking-wider text-zinc-400 ' >FIT <br /> <span className='text-white font-[anzo1] tracking-wider'>Business relationships build on trust and compassion vs how can I get more for less +/-</span></h1>
                            <h1 className='showanimation6 mt-10 text-[17px] font-[anzo2] tracking-wider text-zinc-400 ' >CORE VALUES <br /> <span className='text-white font-[anzo1] tracking-wider'>The perfect suit is the one fits you vs the one you can fit in. Choose wisely you are investing in yourself! +/-</span></h1>
                            <h1 className='showanimation7 mt-10 text-[17px] font-[anzo2] tracking-wider text-zinc-400 ' >TO CONSIDER <br /> <span className='text-white font-[anzo1] tracking-wider'>Time, trust and experience are resources we can not buy, yet we are sharing them and exchange +/-
                            </span></h1>
                            <h1 className=' showanimation8 mt-10 text-[17px] font-[anzo2] tracking-wider text-zinc-400 ' >PERSONALITY <br /> <span className='text-white font-[anzo1] tracking-wider'>Your brand, your personal identity is the reflection of your passion and goals on your future; your first online impression matters +/-
                            </span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page5
