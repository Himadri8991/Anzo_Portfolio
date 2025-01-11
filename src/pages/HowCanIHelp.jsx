import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";

import { FaArrowDown } from "react-icons/fa6";
import SplitType from "split-type";

const HowCanIHelp = () => {
  const [rotation, setRotation] = useState(90);

  gsap.registerPlugin(ScrollTrigger)


  useGSAP(function () {
    gsap.from(".trianglerotate", {
        rotate: 190,
        duration: 1,
        // stagger: 1,
        scrollTrigger: {
            trigger: ".trianglerotate",
            start: "top 100%",
            end: "top -20%",
            scrub: 1,
            // markers: true,
        }
    });
  })



  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the current scroll position
      const rotationSpeed = 0.5; // Define how fast you want the rotation

      // Calculate the rotation based on scroll position and desired speed
      const newRotation = scrollPosition * rotationSpeed; // Start from 90 degrees
      setRotation(newRotation);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".icons", {
      rotation: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });
  });
  useGSAP(() => {
    gsap.to(".icons2", {
      rotationY: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });
  });
  useGSAP(() => {
    gsap.to(".icons3", {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: "power1.inOut", // Smooth easing for both growing and shrinking
    });
  });

  useEffect(() => {
    // Select all elements with the class 'text1'
    const elements = document.querySelectorAll(".text1");

    // Iterate through each element
    const splits = Array.from(elements).map((element) => {
      const split = new SplitType(element, { types: "words" });

      gsap.fromTo(
        split.words,
        { filter: "brightness(0.18)" }, // Initial value
        {
          filter: "brightness(0.90)", // End value
          scrollTrigger: {
            trigger: element, // Each element has its own ScrollTrigger
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
          stagger: 0.1,
        }
      );

      return split;
    });
  }, []);
  return (
    <div className=" min-h-screen p-3 bg-red-200 relative ">
      <div className="overflow-hidden  bg-zinc-900 w-full h-full  rounded-[40px] shadow-xl shadow-red-50 flex items-center justify-between gap-[4vw] relative  px-[7vw] py-[2vw] flex-col">

      <img className='trianglerotate absolute top-36 right-60 ' src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_auto/triangle%203.png" alt="" />

        <div className="text w-full uppercase font-[anzo5] text-white text-[20vw] relative tracking-wide flex items-center justify-between">
          <div className="leading-[16vw]">
            <h1>how</h1>
            <h1>can</h1>
          </div>
          <div className="leading-[16vw] flex flex-col items-end justify-end">
            <h1>i help</h1>
            <h1>you</h1>
          </div>
        </div>

        <div className="w-full text-zinc-100 font-[anzo4] text-[1.3vw] flex items-start justify-between relative ">
          <div className="text1 w-[30%] ">
            <p className="">
              I am a self-taught web and brand designer with a passion for
              creating unique and timeless masterpieces for ambitious
              professionals, entrepreneurs, artists, and boutique businesses. ​
            </p>
            <p className="mt-7"> Bespoke Freelance for agencies.</p>
          </div>

          <div className="text1 w-[29%] top-0 ">
            With a background in strategic marketing and acknowledged expertise
            in web development, I aim to minimize my client's resources spent on
            macro and micro-management, marketing research, and hiring a whole
            team of a larger agency. ​
          </div>
          <div className="text1 w-[29%]">
            My mission is to drive exceptional growth for my clients by
            increasing their brand appearance, defining their identity, and
            engaging customers through captivating black-and-white aesthetics
            with a modern, luxurious, and minimalistic touch.
          </div>
        </div>
        <div className=" font-[anzo5] text-white text-[4.5vw] flex items-center w-full justify-between mt-[-3.5vw] relative">
          <div className="flex items-center gap-6">
            <img src="/src/assets/SUN.webp" className="icons" alt="" />
            <div className="flex items-center gap-2 h-fit">
              <h1 className="">DESIGN</h1>
              <p className="font-[anzo4] text-[1.4vw] mt-8">01</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img src="/src/assets/EARTH.webp" className="icons2" alt="" />
            <div className="flex items-center gap-2 h-fit">
              <h1 className="">DEVELOPMENT</h1>
              <p className="font-[anzo4] text-[1.4vw] mt-8">02</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img src="/src/assets/START.webp" className="icons3" alt="" />
            <div className="flex items-center gap-2 h-fit">
              <h1 className="">BRANDING</h1>
              <p className="font-[anzo4] text-[1.4vw] mt-8">01</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-start mt-[-4vw] relative">
          <div className="font-[anzo3] text-[1.3vw] leading-6">
            <h2 className="text-zinc-400">GOT A PROJECT?</h2>
            <div className="flex items-center gap-2">
              <h2 className="text-zinc-400">THEN PLEASE</h2>
              <h2 className="font-[anzo2] text-zinc-100">CONTACT ME</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowCanIHelp;
