import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";

function SecondText({ textClass }) {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".textAnimate2", {
      transform: `rotateX(-80deg) scale(0.8)`,
      duration: 1,
      opacity: 0.5,
      stagger: 2,
      scrollTrigger: {
        trigger: ".textAnimate2",
        // markers:true,
        start: "top 70%",
        end: "top -300%",
        scrub: 2,
        
      },
    });
  });

  return (
    <div className="bg-red-200  text-center pt-[2vw] pb-[4vw] ">
      <div
        className=" font-[anzo5] text-[40vw] mt-[5vw] leading-[32vw] "
        id="section2"
      >
        <div className="textAnimate2 ">
          <h1 className="text-black">HELPING</h1>
        </div>
        <div className="textAnimate2">
          <h1 className="text-[#ffff]">MY</h1>
        </div>
        <div className="textAnimate2">
          <h1 className="text-black">CLIENTS</h1>
        </div>
        <div className="textAnimate2">
          <h1 className="text-black">TO ACHIEVE</h1>
        </div>
        <div className="textAnimate2">
          <h1 className="text-[#ffff]">THERE</h1>
        </div>
        <div className="textAnimate2">
          <h1 className="text-black">DREAMS!</h1>
        </div>
      </div>
    </div>
  );
}

export default SecondText;
