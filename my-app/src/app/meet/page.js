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
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1 className="font-monument px-4 text-white">MEET US</h1>
          </button>
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1 className="font-monument px-4 text-white">EVENTS</h1>
          </button>
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1 className="font-monument px-4 text-white">FAQ</h1>
          </button>
        </div>
        <div className="h-full w-full bg-black flex z-10 relative">
          <div className="h-full w-full font-monument text-white text-5xl flex-col items-center pb-20">
            <div className="flex items-center justify-center">
              <img src="/leftarrow.png"></img>
              <h1 className="pt-2 mx-8">MEET THE EXEC BOARD!</h1>
              <img src="/rightarrow.png"></img>
            </div>

        </div>
      </div>
      </div>
    </>
  );
}
