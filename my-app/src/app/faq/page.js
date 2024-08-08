"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
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
              <h1 className="font-monument px-4 text-white">
                APPLY
              </h1>
            </button>
          </Link>
          <Link href="/meet">
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1 className="font-monument px-4 text-white">MEET US</h1>
          </button>
          </Link>
          <Link href="events">
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1 className="font-monument px-4 text-white">EVENTS</h1>
          </button>
          </Link>
          <button onMouseEnter={isHovered} onMouseLeave={unHovered}>
            <h1  id="home" className="font-monument px-4 text-white gradient">FAQ</h1>
          </button>
        </div>
        <div className="h-4/5 w-full bg-black flex z-10 relative">
          <div className="h-full w-full font-monument text-white text-6xl flex-col items-center px-8 pb-20">
            <div className="flex items-center justify-center">
              <img src="/leftarrow.png"></img>
              <h1 className="pt-4 mx-6">FAQ</h1>
              <img src="/rightarrow.png"></img>
            </div>
            <div className="w-full h-full flex gap-14 px-20 py-20">


            <div className="w-full h-full faqbox flex-col pt-12  px-12">
                
            </div>
            </div>
            </div>
        </div>
        

        <div className="w-full bg-black flex gap-10 pt-16 font-monument text-base text-white ">
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
          <div className="flex-col px-8 pt-16 z-10">
            <h1 className="pb-4 text-htfgreen">CONTACT US</h1>
            <h1>htfpurdue@gmail.com</h1>
            <div className="flex text-4xl pt-4 gap-4">

                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/hack-the-future-at-purdue/"
                  >
                    <FaInstagram className="hover:animate-pop cursor-pointer"></FaInstagram>
                  </Link>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/hackthefuturepurdue/"
                  >
                    <FaLinkedin className="hover:animate-pop cursor-pointer"></FaLinkedin>
                  </a>
                  <a target="blank" href="https://github.com/Hack-the-Future">
                    <FaGithubSquare className="hover:animate-pop cursor-pointer" />
                  </a>
                  </div>
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
          <img className="absolute -mt-28 z-0" src="/globe.png"></img>
        </div>
      </div>
      
    </>
  );
}
