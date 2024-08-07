"use client";
import React from "react";
import Link from "next/link";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { ReactTyped } from "react-typed";

export default function Home() {
  const isHovered = (event) => {
    event.target.classList.add("gradient");
    document.getElementById("home")?.classList.remove("gradient");
  };

  const unHovered = (event) => {
    event.target.classList.remove("gradient");
    document.getElementById("home")?.classList.add("gradient");
  };

  return (
    <>
      <div className="h-screen w-screen bg-black">
        <div id="navbar" className="h-1/6 flex items-center">
          <img src="/Logo.png" className="h-12 w-42 px-12"></img>
          <div className="basis-1/4"></div>
          <Link href="/">
            <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
              <h1 className="font-monument px-4 text-white">HOME</h1>
            </button>
          </Link>
          <Link href="/about">
            <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
              <h1 className="font-monument px-4 text-white">ABOUT</h1>
            </button>
          </Link>
          <Link href="/involvement">
            <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
              <h1 id="home" className="font-monument px-4 text-white gradient">
                APPLY
              </h1>
            </button>
          </Link>
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1 className="font-monument px-4 text-white">PORTFOLIO</h1>
          </button>
          <Link href="/meet">
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1 className="font-monument px-4 text-white">MEET US</h1>
          </button>
          </Link>
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1 className="font-monument px-4 text-white">EVENTS</h1>
          </button>
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1 className="font-monument px-4 text-white">FAQ</h1>
          </button>
        </div>
        <div className="h-full w-full bg-black flex z-10 relative">
          <div className="h-full w-full font-monument text-white text-6xl flex-col items-center px-8 pb-20">
            <div className="flex items-center justify-center">
              <img src="/leftarrow.png"></img>
              <h1 className="pt-4 mx-6">JOIN US!</h1>
              <img src="/rightarrow.png"></img>
            </div>

            <div className="pt-16 pb-12 text-xl text-center z-10 px-36 font-horizon">
              <h1>
                Join our family at Hack the Future and use your skills to
                collaborate with talented students on meaningful projects that
                make a real difference in the community all while getting
                professional experience! Explore the different roles we offer
                and apply to what suits you best. We hope to see you soon :)
              </h1>
            </div>
            <div className="w-full h-3/5 flex-col">
              <div className=" h-1/4 w-full flex px-20">
                <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center">
                  <h1 className="text-3xl font-sofachrome text-htfgreen pr-2 pb-2">
                    TEAM LEAD
                  </h1>
                </div>
                <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center">
                  <h1 className="text-3xl font-sofachrome text-htfgreen pr-2 pb-2">
                    DEVELOPER
                  </h1>
                </div>
                <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center">
                  <h1 className="text-3xl font-sofachrome text-htfgreen pr-2 pb-2">
                    DESIGNER
                  </h1>
                </div>
              </div>
              <div className=" h-full w-full flex px-20 pt-8">
                <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center px-4 text-center">
                  <h1 className="text-xl font-horizon text-white pr-2 pb-2">
                    Team Leaders are the main line of communication between the
                    team and the non-profit. Team Leads are responsible for
                    ensuring the team's success, and spearheading the
                    development of the project. Team Leads will coordinate
                    weekly meetings with their team as well as report to the HTF
                    Executive Board on the team's progress.
                  </h1>
                </div>
                <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center px-4 text-center">
                  <h1 className="text-xl font-horizon text-white pr-2 pb-2">
                    Developers will, based on their experience, work on either
                    Frontend, Backend, or Fullstack development. Even if you
                    have never worked on stack development, the teams will be
                    structured such that you can find a comfortable place to
                    begin your development journey. Developers will also work
                    closely with the Designers to implement the applications. 
                  </h1>
                </div>
                <div className="itemhead mx-4 h-full basis-1/3 flex items-center justify-center px-4 text-center">
                  <h1 className="text-xl font-horizon text-white pr-2 pb-2">
                    Designers will interact with the non-profits to design the
                    application to their specifications. Using Figma (or other
                    similar software), Designers will use their creative skills
                    to come up with high-res mockups of the application to
                    present to the team and the non-profits, and work with the
                    Developers to bring the non-profits' ideas to fruition.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/4 bg-black py-16 w-full font-monument text-white text-6xl flex-col items-center px-8 pb-20">
        <div className="flex items-center justify-center">
          <img src="/leftarrow.png"></img>
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
          <h1 className="pt-4 mx-6 hover:gradient">CLICK TO APPLY!</h1>
          </button>
          <img src="/rightarrow.png"></img>
        </div>
      </div>

        <div className="w-full bg-black flex gap-10 pt-16 font-monument text-base text-white">
          <div className="flex-col px-8 pt-16">
            <h1 className="pb-4 text-htfgreen">GENERAL</h1>
            <h1>HOME</h1>
            <h1>ABOUT</h1>
            <h1>PORTFOLIO</h1>
            <h1>MEET US</h1>
            <h1>EVENTS</h1>
            <h1>FAQ</h1>
          </div>

          <div className="flex-col px-8 w-1/3 pt-16">
            <h1 className="pb-4 text-htfgreen">GET INVOLVED</h1>
            <h1>STUDENTS</h1>
            <h1>NON-PROFITS</h1>
          </div>
          <div className="flex-col px-8 pt-16">
            <h1 className="pb-4 text-htfgreen">CONTACT US</h1>
            <h1>htfpurdue@gmail.com</h1>
          </div>
          <div className="flex-col  pt-16 w-1/2"></div>
          <div className="flex-col justify-right px-8 pt-16">
            <img
              src="/Logo.png"
              className="h-12 w-42 pl-12 mb-8 ml-6 object-right"
            ></img>
            <h1 className="text-right">
              Purdue University, West Lafayette, IN, 47906
            </h1>
          </div>
          <img className="absolute -mt-28" src="/globe.png"></img>
        </div>
      </div>
      
    </>
  );
}
