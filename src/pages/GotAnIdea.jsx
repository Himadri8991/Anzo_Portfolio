import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const GotAnIdea = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to("#rotateimg", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    });
  });

  useGSAP(function () {
    gsap.from("#animateText", {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 1,
      //repeat: -1,
      // stagger: 0.5,
      x: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#animateText",
        //markers: true,
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
      },
    });
  });

  useGSAP(function () {
    gsap.from("#animateline", {
      //transformOrigin: "bottom",
      height: 0,
      opacity: 0,
      duration: 5,
      delay: 1,
      height: 20,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#animateline",
        //markers: true,
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
      },
    });
  });

  return (
    <div className="relative h-screen text-white bg-white p-4">
      <div className="h-full w-full shadow-xl shadow-zinc-950 rounded-[40px] bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1452,h_951,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg)] bg-black">
        <div className="px-16 py-10">
          <h1 className="text-[19vw] leading-none uppercase tracking-wide font-[anzo5]">
            Got <span className="text-[#9B9B9B]">An</span>
          </h1>
          <h1 className="text-[19vw] leading-[12vw] uppercase tracking-wide font-[anzo5]">
            Idea
          </h1>
        </div>
        <div className="px-16">
          <h3 className="font-[anzo3] tracking-wide text-[#9B9B9B]">
            IT IS NOT JUST ABOUT SOLVING THE PROBLEM
          </h3>
          <h3 className="font-[anzo3] tracking-wide text-[#9B9B9B]">
            BUT{" "}
            <span className="text-white font-[anzo2]">
              OFFERING THE TRANSFORMATION!
            </span>
          </h3>
        </div>
        <div className="flex gap-10 absolute bottom-[25%] left-[40%]">
          <img
            id="rotateimg"
            className="w-[6.5vw]"
            src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png"
            alt=""
          />
          <div id="animateline" className="border-[1px]"></div>
          <div id="animateText" className="mt-5">
            <h3 className="font-[anzo3] leading-none tracking-wide text-[#9B9B9B]">
              WORLD SERVICE
            </h3>
            <h3 className="font-[anzo1] tracking-wide text-white">
              I CAN COME TO WHEREVER YOU ARE
            </h3>
            <h3 className="font-[anzo3] leading-none tracking-wide text-[#9B9B9B]">
              +91 94316 83162{" "}
            </h3>
            <h3></h3>
          </div>
        </div>
        <div className="absolute right-16 bottom-14 text-sm font-semibold font-[anzo3]">
          © 2024 Anzo.Studio™
        </div>
      </div>
    </div>
  );
};

export default GotAnIdea;
