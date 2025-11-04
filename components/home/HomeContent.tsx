"use client";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import {
  HeroSection,
  ClientsLogosSection,
  ServicesSection,
  ProjectsCountSection,
  LatestProjectsSection,
  ContactUsSection,
} from "@/components/home";
import ReelVideoPlayer from "@/components/ReelVideoPlayer";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Project } from "@/utils/ProjectsData";

const HomeContent = () => {
  const [video, setVideo] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <ParallaxProvider>
        <HeroSection />
      </ParallaxProvider>
      <ClientsLogosSection />
      <ServicesSection />
      <ProjectsCountSection />
      <Suspense>
        <LatestProjectsSection
          onOpenVideoReelPlayer={(video) => {
            setVideo(video);
            setIsOpen(true);
          }}
        />
      </Suspense>
      <ContactUsSection />
      <Suspense>
        <ReelVideoPlayer
          open={isOpen}
          video={video}
          closeCallback={() => {
            setVideo(null);
            setIsOpen(false);
          }}
        />
      </Suspense>
    </>
  );
};

export default HomeContent;
