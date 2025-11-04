"use client";
import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { porftolioHeroPeacockBack, porftolioHeroPeacockFront } from "@/utils/Assets";
import { SectionSubtitle, SectionTitle } from "@/components/global";
import { portfolioPageSectionsLabels } from "@/utils/SectionLabels";

const PortfolioHeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="w-full md:h-[50vh] xl:h-screen h-[70vh] relative overflow-hidden bg-gradient-to-br from-secondary-varient/50 via-secondary/50 to-secondary-varient/50">
      <Image src={porftolioHeroPeacockBack.src} alt={porftolioHeroPeacockBack.alt} width={porftolioHeroPeacockBack.width} height={porftolioHeroPeacockBack.height} className="absolute bottom-[20%] md:-bottom-[30%] xl:-bottom-[90%] w-screen aspect-square brightness-25 drop-shadow-2xl/25 drop-shadow-secondary pointer-events-auto"></Image>
      <div className="absolute top-32 md:top-55 xl:top-55 left-1/2 w-full -translate-x-1/2 flex flex-col items-center justify-start">
      <h1 className="font-accent font-black xl:text-7xl md:text-5xl text-3xl text-primary text-center scale-125">
            Nayyir <span className="">&nbsp;&nbsp;&nbsp;&nbsp;</span>Scenes<br></br>Creative Projects<br></br>
          <span className="w-full absolute blur-2xl top-0 left-1/2  -translate-x-1/2">
            Nayyir <span className="sm:hidden">&nbsp;&nbsp;&nbsp;&nbsp;</span>Scenes<br></br>Creative Projects<br></br>
          </span>
        </h1>
      </div>
      <Image src={porftolioHeroPeacockFront.src} alt={porftolioHeroPeacockFront.alt} width={porftolioHeroPeacockFront.width} height={porftolioHeroPeacockFront.height} className="absolute left-1/2 -translate-x-1/2 bottom-[5%] md:-bottom-[30%] xl:-bottom-[70%] w-[200vw] scale-200 md:scale-110 xl:scale-100 md:w-[80vw] xl:w-[80vw] aspect-square drop-shadow-xl/100 drop-shadow-secondary pr-4 md:pr-8 xl:pr-12 pointer-events-auto"></Image>
      <div className="w-full xl:h-1/3 h-2/3 bg-gradient-to-t from-background xl:via-transparent via-background to-background/0 absolute bottom-0"></div>
      <div className="w-full xl:h-1/3 h-2/3 bg-gradient-to-t from-background xl:via-transparent via-background to-background/0 absolute bottom-0"></div>
    </section>
  );
};

export default PortfolioHeroSection;
