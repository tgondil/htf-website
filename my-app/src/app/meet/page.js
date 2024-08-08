"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { ReactTyped } from "react-typed";

export default function Home() {
  const [me, onMe] = useState(true);
  const [vp, onVp] = useState(true);
  const [treasurer, onTreasurer] = useState(true);
  const [designer, onDesigner] = useState(true);
  const [tech, onTech] = useState(true);
  const [secretary, onSecretary] = useState(true);
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
          <div className="basis-1/3 ml-12"></div>
          <Link href="/">
            <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
              <h1 className="font-monument px-4 text-white">HOME</h1>
            </button>
          </Link>
          <Link href="/#about">
            <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
              <h1 className="font-monument px-4 text-white">ABOUT</h1>
            </button>
          </Link>
          <Link href="/involvement">
            <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
              <h1 className="font-monument px-4 text-white">APPLY</h1>
            </button>
          </Link>
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1 id="home" className="font-monument px-4 text-white gradient">
              MEET US
            </h1>
          </button>
          <Link href="/events">
            <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
              <h1 className="font-monument px-4 text-white">EVENTS</h1>
            </button>
          </Link>
          <Link href="/faq">
            <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
              <h1 className="font-monument px-4 text-white">FAQ</h1>
            </button>
          </Link>
        </div>
        <div className="h-full w-full bg-black flex-col z-10 relative">
          <div className="h-1/12 w-full font-monument text-white text-5xl flex-col items-center">
            <div className="flex items-center justify-center h-full ">
              <img src="/leftarrow.png"></img>
              <h1 className="pt-2 mx-8">MEET THE EXEC BOARD!</h1>
              <img src="/rightarrow.png"></img>
            </div>
          </div>
          <div className="w-full flex h-1/3 px-72 gap-48 mb-8">
            
            <img className="scale-125" src="/mahika.png"></img>
            {me ? (
              <img
                onMouseEnter={() => {
                  onMe(false);
                  document.body.style.cursor = 'pointer';
                }}
                className="scale-125"
                src="/tanay.png"
              ></img>
            ) : (
              <img
                onMouseLeave={() => {
                  onMe(true);
                  document.body.style.cursor = 'default';
                }}
                onClick={() => window.open("https://tanaygondil.com")}
                className="scale-125"
                src="/tanay-2.png"
              ></img>
            )}
            <img className="scale-125" src="/lalitha.png"></img>
          </div>
          <div className="w-full flex h-1/3 px-72 gap-44">
            <img className="scale-125" src="/sanjana.png"></img>
            <img className="scale-125" src="/vipula.png"></img>
            <img className="scale-125" src="/ryan.png"></img>
          </div>
          <div className="w-full flex gap-10 font-monument text-base bg-black text-white pt-16">
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
          </div>
          <img className="z-0 absolute -bottom-32 mt-20" src="/globe.png"></img>
        </div>
      </div>
    </>
  );
}
