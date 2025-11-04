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
            const searchParams = useSearchParams();
            setVideo(video);
            setIsOpen(true);
            const currentParams = new URLSearchParams(searchParams.toString());
            currentParams.set("video", video.id.toString());
            const queryString = currentParams.toString();
            router.replace(
              `${pathname}${queryString ? `?${queryString}` : ""}`,
              {
                scroll: false,
              }
            );
          }}
        />
      </Suspense>
      <ContactUsSection />
      <Suspense>
        <ReelVideoPlayer
          open={isOpen}
          video={video}
          closeCallback={() => {
            const searchParams = useSearchParams();
            setVideo(null);
            setIsOpen(false);
            const currentParams = new URLSearchParams(searchParams.toString());
            currentParams.delete("video");
            const queryString = currentParams.toString();
            router.replace(
              `${pathname}${queryString ? `?${queryString}` : ""}`,
              {
                scroll: false,
              }
            );
          }}
        />
      </Suspense>
    </>
  );
};

export default HomeContent;
