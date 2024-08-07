"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-black">
        <div id="navbar" className="h-1/6 flex items-center">
          <img src="/Logo.png" className="h-12 w-42 px-12"></img>
          <div className="basis-1/4"></div>
          <h1 className="font-monument px-4 text-white">HOME</h1>
          <h1 className="font-monument px-4 text-white">ABOUT</h1>
          <h1 className="font-monument px-4 text-white">GET INVOLVED</h1>
          <h1 className="font-monument px-4 text-white">PORTFOLIO</h1>
          <h1 className="font-monument px-4 text-white">MEET US</h1>
          <h1 className="font-monument px-4 text-white">EVENTS</h1>
          <h1 className="font-monument px-4 text-white">FAQ</h1>
        </div>
        <div className="h-5/6 w-full bg-white bg-black flex">
          <div className="basis-7/12 flex-col bg-black">
            <div className="flex-col justify-center items-center pt-20  pl-20 h-full w-full">
              <h1 className="text-white font-monument text-5xl leading-normal">
                TRANSFORMING NONPROFITS <br /> WITH TECHNOLOGY
              </h1>
              <div className="pt-12 w-4/5">
                <Splide
                  options={{
                    type: "loop", // Loop back to the beginning when reaching the end
                    autoScroll: {
                      pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
                      pauseOnFocus: false, // Do not pause scrolling when the carousel is focused

                      speed: 0.5, // Scrolling speed
                    },
                    arrows: false, // Hide navigation arrows
                    pagination: false, // Hide pagination dots
                    gap: "12px", // Gap between slides
                  }}
                  extensions={{ AutoScroll }} // Use the AutoScroll extension
                >
                  <SplideSlide>
                    <div className="flex justify-center items-center">
                      <img src="/lthc.png" className="basis-1/5"></img>
                      <img src="/lcwe.png" className="basis-1/5"></img>
                      <img src="/hanna.png" className="basis-2/5"></img>
                      <img src="/ywca.png" className="basis-1/5"></img>
                      <img src="/laf.png" className="basis-1/5 pr-4"></img>
                    </div>
                  </SplideSlide>
                </Splide>
                <h1 className="text-white font-monument pt-8 text-xl leading-loose">
                  we are <br /> WITH TECHNOLOGY
                </h1>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
