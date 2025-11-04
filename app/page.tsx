"use client";
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
import { useState } from "react";
import { Project } from "@/utils/ProjectsData";

export default function Home() {
    const [video, setVideo] = useState<Project | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
  
  return (
    <>
      <ParallaxProvider>
        <HeroSection />
      </ParallaxProvider>
      <ClientsLogosSection />
      <ServicesSection />
      <ProjectsCountSection />
      <LatestProjectsSection
        onOpenVideoReelPlayer={(video) => {
          setVideo(video);
          setIsOpen(true);
          const currentParams = new URLSearchParams(searchParams.toString());
          currentParams.set("video", video.id.toString());
          const queryString = currentParams.toString();
          router.replace(`${pathname}${queryString ? `?${queryString}` : ""}`, {
            scroll: false,
          });
        }}
 />
      <ContactUsSection />
      <ReelVideoPlayer
        open={isOpen}
        video={video}
        closeCallback={() => {
          setVideo(null);
          setIsOpen(false);
          const currentParams = new URLSearchParams(searchParams.toString());
          currentParams.delete("video");
          const queryString = currentParams.toString();
          router.replace(`${pathname}${queryString ? `?${queryString}` : ""}`, {
            scroll: false,
          });
        }}
      />
    </>
  );
}
