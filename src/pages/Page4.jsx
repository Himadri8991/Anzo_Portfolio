import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAppwrite } from "react-icons/si";


const Page4 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [Link, setLink] = useState(false);
  useGSAP(() => {
    gsap.from(".projectAnimate", {
      gap: "8vw",
      duration: 1.4,
      opacity: 0,
      scrollTrigger: {
        trigger: ".projectAnimateCont",
        start: "top center",
      },
      onComplete: () => {
        setLink(true);
      },
    });
  });
  const [xValue, setXValue] = useState(null);
  const [yValue, setYValue] = useState(null);
  const [xValue2, setXValue2] = useState(null);
  const [yValue2, setYValue2] = useState(null);
  const imageRef = useRef();
  const imageRef2 = useRef();

  const onChange = (e) => {
    setXValue(
      (e.clientX -
        imageRef.current.getBoundingClientRect().x -
        imageRef.current.getBoundingClientRect().width / 2) /
        10
    );
    setYValue(
      -(
        e.clientY -
        imageRef.current.getBoundingClientRect().y -
        imageRef.current.getBoundingClientRect().height / 2
      ) / 3
    );
  };

  useGSAP(() => {
    gsap.to(imageRef.current, {
      transform: `rotateX(${yValue}deg) rotateY(${xValue}deg)`,
      duration: 1.3,
    });
  }, [xValue, yValue]);
  const onChange2 = (e) => {
    setXValue2(
      (e.clientX -
        imageRef2.current.getBoundingClientRect().x -
        imageRef2.current.getBoundingClientRect().width / 2) /
        10
    );
    setYValue2(
      -(
        e.clientY -
        imageRef2.current.getBoundingClientRect().y -
        imageRef2.current.getBoundingClientRect().height / 2
      ) / 3
    );
  };
  useGSAP(() => {
    gsap.to(imageRef2.current, {
      transform: `rotateX(${yValue2}deg) rotateY(${xValue2}deg)`,
      duration: 1.3,
    });
  }, [xValue2, yValue2]);

  useGSAP(() => {
    gsap.to(".icons", {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: "linear",
    });
  });

  const randomNumber = Math.floor(Math.random() * 721) - 360;
  const randomNumber2 = Math.floor(Math.random() * 721) - 360;

  
  useGSAP(() => {
    gsap.from(".lines", {
      width: 0, 
      duration: 1.5,
      opacity:0,
      rotation: `${randomNumber}deg`,
      scrollTrigger: {
        trigger: ".projectAnimateCont",
        start: "top center",
      },
      // transform: `translate(${randomNumber}px)`,
    });
  });
  useGSAP(() => {
    gsap.from(".lines2", {
      width: 0, 
      duration: 2,
      opacity:0,
      rotation: `${randomNumber2}deg`,
      scrollTrigger: {
        trigger: ".projectAnimateCont",
        start: "top center",
      },
      // transform: `translate(${randomNumber}px)`,

    });
  });

  useGSAP(() => {
    gsap.fromTo(
      ".icons4", // Target element
      {
        opacity: 0,
        scale: 0, // Starting scale
      },
      {
        opacity: 1,
        scale: 1, // Ending scale
        duration: 2,
        delay: 1.3,
        scrollTrigger: {
          trigger: ".projectAnimateCont",
          start: "top center",
        },
      }
    );
  });
  
  return (
    <div className='h-screen p-4 bg-red-200'>
      <div className='projectAnimateCont overflow-hidden bg-black w-full h-full xl:rounded-3xl  shadow-lg shadow-zinc-400  relative flex items-center justify-center gap-[28vw] rounded-[40px]'>  
      <video
          autoPlay={true}
          loop
          muted
          src="/src/assets/clock.mp4"
          className="absolute top-[35%] left-[10%] brightness-50"
        ></video>
        <div className="text-[16vw] text-white relative z-[6] font-[anzo5] leading-[12vw] tracking-wide  w-fit ">
          <h1 className="">WHAT</h1>
          <h1 className="text-zinc-400 translate-x-16">I'VE</h1>
          <h1 className="">BUILT</h1>
        </div>

        <div className="mt-6 projects relative z-[5] w-[32vw] rounded-xl h-[90%] flex flex-col items-center justify-center gap-[4vw] ">
          <div className="e-commerce  w-[100%] flex-wrap flex flex-col gap-3 projectImage  items-center justify-center">
            <a
              href="https://himadri8991.github.io/Responsive-Travel-Webpage/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ pointerEvents: Link ? "auto" : "none" }}
              ref={imageRef}
              onMouseMove={(e) => onChange(e)}
            >
              <div className=" flex items-center w-[100%]  h-[11vw] projectAnimate rounded-3xl overflow-hidden shadow-lg shadow-gray-700">
                <img
                  src="/src/assets/e-1.jpg"
                  alt=""
                  className="w-[50%] h-full"
                />
                <img
                  src="/src/assets/e-2.jpg"
                  alt=""
                  className="w-[50%] h-full"
                />
              </div>
            </a>
            <div className="text text-white w-[85%] mx-1 flex flex-col flex-wrap ">
              <a
                className="flex items-center gap-1 hover:underline w-fit"
                href="https://himadri8991.github.io/Responsive-Travel-Webpage/"
                target="_blank"
              >
                <h3 className="font-[anzo1] text-[1vw] tracking-wider">
                  TRAVEL{" "}
                </h3>
                <IoIosArrowDropupCircle className=" text-[1.5vw]  rounded-full rotate-[90deg]" />
              </a>
              <div className="font-[anzo2] text-[0.7vw] leading-2">
                <p className="tracking-wider">
                Responsive Travel Webpage - With Background Slider
                </p>{" "}
              </div>
            </div>
            <div className="absolute bg-[#676767] w-[32vw] h-[0.08vw] z-[-1] top-[56%] left-[-43%] rotate-[-25deg] lines"></div>
            <div className="absolute bg-[#676767] w-[23vw] h-[0.08vw] z-[-1] top-[55%] left-[46%] rotate-[37deg] lines"></div>

            <div className="appwrite absolute bg-[#676767] w-[35vw] h-[0.08vw] z-[-1] top-[9vw] left-[-70%] rotate-[-23.5deg] lines2"></div>

          </div>
            <div className="bg-[#FE296D] p-1 rounded-full text-[1.5vw] absolute top-[38%] left-[-70%] z-[9] appwriteGlow icons4 ">
                  <SiAppwrite  className=""/>
                </div>
          <div>
            <div className="e-commerce flex-wrap flex flex-col gap-3 projectImage w-[100%] items-center justify-center relative">
              <a
                href="https://tathastu-jade.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ pointerEvents: Link ? "auto" : "none" }}
                ref={imageRef2}
                onMouseMove={(e) => onChange2(e)}
              >
                <div className=" flex items-center w-[100%]  h-[11vw] projectAnimate rounded-3xl overflow-hidden shadow-lg shadow-gray-700">
                  <img
                    src="/src/assets/blog-2.jpg"
                    alt=""
                    className="w-[50%] h-full"
                  />
                  <img
                    src="/src/assets/blog-1.jpg"
                    alt=""
                    className="w-[50%] h-full"
                  />
                </div>
              </a>
              <div className="text text-white w-[85%] mx-1">
                <a
                  className="flex items-center gap-1 hover:underline w-fit"
                  href="https://tathastu-jade.vercel.app/"
                  target="_blank"
                >
                  <h3 className="font-[anzo2] text-[1vw] ">Tathastu{" "} </h3>
                  <IoIosArrowDropupCircle className=" text-[1.5vw]  rounded-full rotate-[90deg]" />
                </a>
                <div className="font-[anzo2] text-[0.7vw] leading-2 ">
                  <p className="tracking-wider">
                  At TATHASTU, we believe education is a right, not a privilege. Our mission is to bridge the gap between students in need and generous donors who want to make a difference. Through scholarships, study materials, and direct financial aid, we empower students to overcome financial hurdles and chase their dreams.
                  🚀 Why TATHASTU?
✅ AI-Powered Transparency – Every contribution reaches the right hands.
✅ Real Impact – Scholarships, resources, and career guidance that change lives.
✅ Support Beyond Funds – Mentorship, internships, and skill development for a brighter future.
Join us in reshaping education and creating a world where no student is left behind! 💙✨
                  </p>{" "}
                </div>
              </div>
              <div className="absolute bg-[#676767] w-[34vw] h-[0.08vw] z-[-1] top-[2vw] left-[-43%] rotate-[24deg] lines2"></div>
              <div className="absolute bg-[#676767] w-[24vw] h-[0.08vw] z-[-1] top-[2vw] left-[43%] rotate-[-35deg] lines2"></div>

 
                <div className=" absolute bg-[#676767] w-[35vw] h-[0.08vw] z-[-1] top-[1.5vw] left-[-71%] rotate-[25deg] lines2"></div>


              <div className=" text-white">
                <div className=" text-[#20232A] text-[1.5vw] absolute top-[-34%] left-[-41%]  bg-[#0CD0FF] p-1 rounded-full reactGlow icons4">
                  <FaReact />
                </div>
                <div className="bg-tailwind-logo p-1 rounded-full text-[1.5vw]  absolute top-[-32%] right-[-13%] tailwindGlow icons4">
                  <RiTailwindCssFill />
                </div>
              
              </div>
            </div>
          </div>
        </div>     
      </div>
    </div>
  )
}

export default Page4