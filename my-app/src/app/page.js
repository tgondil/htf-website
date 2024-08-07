"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { ReactTyped } from "react-typed";

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
                TRANSFORMING NONPROFITS <br />{" "}
                <span className="gradient">WITH TECHNOLOGY</span>
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
                  we are <br />{" "}
                </h1>
                <div className="font-sofachrome text-htfgreen pt-2 text-xl leading-loose">
                  <ReactTyped
                    strings={[
                      "DEVELOPERS",
                      "DESIGNERS",
                      "INNOVATORS",
                      "HACK THE FUTURE",
                    ]}
                    typeSpeed={100}
                    backSpeed={70}
                    showCursor={false}
                    //onComplete={hide}
                  />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="h-screen bg-black">
        <div id="sphere" className="z-0 absolute"></div>
        <div className="h-full w-full flex z-10 absolute">
          <div className="h-full w-full font-monument text-white text-6xl flex-col items-center px-8 py-20">
            <div className="flex items-center justify-center">
              <img src="/leftarrow.png"></img>
              <h1 className="pt-4 mx-2"> WHAT WE DO</h1>
              <img src="/rightarrow.png"></img>
            </div>

            <div className="pt-20 pb-12 text-xl text-center z-10 px-36 font-horizon">
              <h1>
                Hack the Future is a student run organization at Purdue aimed
                towards creating software for local nonprofits free of cost. We
                develop several projects throughout the school year with various
                different nonprofits with the hopes of bettering the community.
              </h1>
            </div>
            <div className="w-full h-3/5 flex-col">
                <div className=" h-1/4 w-full flex px-20">
                    <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center">
                      <h1 className="text-3xl font-sofachrome text-htfgreen pr-2 pb-2">COMMUNITY</h1>
                    </div>
                    <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center">
                      <h1 className="text-3xl font-sofachrome text-htfgreen pr-2 pb-2">ENGAGEMENT</h1>
                    </div>
                    <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center">
                      <h1 className="text-3xl font-sofachrome text-htfgreen pr-2 pb-2">IMPACT</h1>
                    </div>
                </div>
                <div className=" h-3/4 w-full flex px-20 pt-8">
                    <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center px-4 text-center">
                      <h1 className="text-xl font-horizon text-white pr-2 pb-2">
                      We’ve worked with over 10 nonprofits in the Greater Lafayette area so far. This year, we plan to expand our reach and work with non profits all over the country and potentially the world!
                      </h1>
                    </div>
                    <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center px-4 text-center">
                      <h1 className="text-xl font-horizon text-white pr-2 pb-2">
                      We are the largest software development club on the Purdue campus with over 200 applicants each year and multiple teams of  50+ students
                      </h1>
                    </div>
                    <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center px-4 text-center">
                      <h1 className="text-xl font-horizon text-white pr-2 pb-2">
                      We’ve built many projects throughout the years that aid nonprofits in multiple ways and automate their processes,  saving them countless hours of work
                     </h1>
                    </div>
                </div>
            </div>
            
          </div>
            
          </div>
      </div>
    </>
  );
}
