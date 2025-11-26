"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPlay,
  faShare,
  faStreetView,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { SectionSubtitle, SectionTitle } from "@/components/global";
import { homePageSectionsLabels } from "@/utils/SectionLabels";

const channels = [
  {
    title: "Erza3",
    subsCount: "1.24M",
    icon: "/chOne.jpg",
    link: "https://www.youtube.com/c/erza3ma3serry",
  },
  {
    title: "Marwan Serry",
    subsCount: "643K",
    icon: "/chTwo.jpg",
    link: "https://www.youtube.com/channel/UCzejIGtATKRpOj3zFDRBLug",
  },
  {
    title: "Beta3 Aflam",
    subsCount: "582K",
    icon: "/chThree.jpg",
    link: "https://www.youtube.com/channel/UCFo0CfTq0pr7R920LZtdd0Q",
  },
];
const HeroSection = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden bg-gradient-to-br from-secondary-varient/50 via-secondary/50 to-secondary-varient/50">
      <div className="w-full h-full flex relative -bottom-2/3 opacity-50">
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[125vw] lg:w-[25vw] aspect-square border-2 border-primary rounded-full"></div>
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[135vw] lg:w-[35vw] aspect-square border-2 border-primary rounded-full opacity-90"></div>
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[145vw] lg:w-[45vw] aspect-square border-2 border-primary rounded-full opacity-80"></div>
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[155vw] lg:w-[55vw] aspect-square border-2 border-primary rounded-full opacity-70"></div>
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[165vw] lg:w-[65vw] aspect-square border-2 border-primary rounded-full opacity-60"></div>
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[175vw] lg:w-[75vw] aspect-square border-2 border-primary rounded-full opacity-50"></div>
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[185vw] lg:w-[85vw] aspect-square border-2 border-primary rounded-full opacity-40"></div>
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[195vw] lg:w-[100vw] aspect-square border-2 border-primary rounded-full opacity-30"></div>
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[205vw] lg:w-[110vw] aspect-square border-2 border-primary rounded-full opacity-20"></div>
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[215vw] lg:w-[120vw] aspect-square border-2 border-primary rounded-full opacity-10"></div>
        <div className="pointer-events-none absolute top-1/3 lg:top-1/2 left-1/2 -translate-1/2 w-[225vw] lg:w-[130vw] aspect-square border-2 border-primary rounded-full opacity-5"></div>
      </div>
      <div className="absolute top-32 left-1/2 w-full -translate-x-1/2 flex flex-col items-center justify-start">
        <h1 className="font-accent font-black lg:text-7xl md:text-5xl text-4xl text-primary text-center">
          <span className="absolute">
            Crafting Stories<br></br>That Shine<br></br>
          </span>
          <span className="blur-2xl">
            Crafting Stories<br></br>That Shine<br></br>
          </span>
        </h1>
        <SectionSubtitle text={homePageSectionsLabels.heroSection.subtitle} />
      </div>
      <div className="w-full lg:h-1/3 h-1/2 bg-gradient-to-t from-background lg:via-transparent via-background to-background/0 absolute bottom-0"></div>
    </section>
  );
};

export default HeroSection;
