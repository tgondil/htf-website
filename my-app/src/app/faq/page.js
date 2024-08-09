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
              <h1 className="font-monument px-4 text-white">APPLY</h1>
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
            <h1 id="home" className="font-monument px-4 text-white gradient">
              FAQ
            </h1>
          </button>
        </div>
        <div className="h-full w-full bg-black flex z-10 relative">
          <div className="h-full w-full font-monument text-white text-6xl flex-col items-center px-8 pb-20">
            <div className="flex items-center justify-center">
              <img src="/leftarrow.png"></img>
              <h1 className="pt-4 mx-6">FAQ</h1>
              <img src="/rightarrow.png"></img>
            </div>
            <div className="w-full h-fit flex gap-14 px-20 py-20">
              <div className="w-full h-fit faqbox flex-col pt-12 text-lg font-horizon  px-12 text-center">
                <h1 className="font-monument text-2xl">
                  Who can join Hack the Future?
                </h1>
                <h1 className="my-4">
                  Both undergraduate and graduate students across any major can
                  join Hack the Future.
                </h1>

                <h1 className="font-monument text-2xl pt-8">
                  How do I get started?
                </h1>
                <h1 className="my-4">
                  Click{" "}
                  <span
                    onClick={() => {
                      window.open("/involvement");
                    }}
                    className="gradient cursor-pointer"
                  >
                    here
                  </span>{" "}
                  to head to the apply tab. There, you may look over the various
                  roles that you can apply for. If you are interested, you may
                  choose to apply to multiple roles. If you make it past this
                  initial application phase, you will be offered an interview
                  via email. Based on the result of this interview, you may be
                  given an offer to join Hack the Future.
                </h1>
                <h1 className="font-monument text-2xl pt-8">
                  Do I need prior coding experience to participate?
                </h1>
                <h1 className="my-4">
                  You do not require prior coding experience to participate.
                  However, you must showcase a willingness to constantly learn
                  and improve in both technical and non-technical aspects in
                  order to be given an offer.
                </h1>
                <h1 className="font-monument text-2xl pt-8">
                  Are there any fees to join or participate?
                </h1>
                <h1 className="my-4">
                  Students are required to pay a yearly membership fee of 15$.
                  These dues must be paid through TOOCOOL, in accordance with
                  Purdue&#39;s organizational policies.
                </h1>
                <h1 className="font-monument text-2xl pt-8">
                  What kinds of events does the club host?
                </h1>
                <h1 className="my-4">
                  Hack the Future organizes several events each semester outside
                  of the mandatory team meetings. These events include technical
                  workshops, project showcases, talks with professors,
                  networking events, and fun socials!
                </h1>
                <h1 className="font-monument text-2xl pt-8">
                  What are the expected hours/effort?
                </h1>
                <h1 className="my-4">
                  Students are required to dedicate at least two hours per week
                  to Hack the Future.
                </h1>
                <h1 className="font-monument text-2xl pt-8">
                  How can I stay up to date with club activities?
                </h1>
                <h1 className="my-4">Follow us on Instagram!</h1>
                <h1 className="font-monument text-2xl pt-8">
                  Other questions?
                </h1>
                <h1 className="my-4 pb-8">
                  Feel free to reach out to us via Instagram or Email.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2/3 bg-black"></div>
        <div className="w-full bg-black flex gap-10 pt-16 font-monument text-base text-white">
          <div className="flex-col px-8 pt-16 z-10">
            <h1 className="pb-4 text-htfgreen">GENERAL</h1>
            <Link href="/">
              <h1 className="hover:animate-pop">HOME</h1>
            </Link>
            <Link href="/#about">
              <h1 className="hover:animate-pop">ABOUT</h1>
            </Link>
            <Link href="/involvement">
              <h1 className="hover:animate-pop">APPLY</h1>
            </Link>
            <Link href="/meet">
              <h1 className="hover:animate-pop">MEET US</h1>
            </Link>
            <Link href="events">
              <h1 className="hover:animate-pop">EVENTS</h1>
            </Link>
            <Link href="faq">
              <h1 className="hover:animate-pop">FAQ</h1>
            </Link>
          </div>

          <div className="flex-col px-8 w-1/3 pt-16">
            <h1 className="pb-4 text-htfgreen">GET INVOLVED</h1>
            <h1 className="hover:animate-pop">STUDENTS</h1>
            <h1 className="hover:animate-pop">NON-PROFITS</h1>
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
