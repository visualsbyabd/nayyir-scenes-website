"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  PortfolioHeroSection,
  PortfolioPickedForYourSection,
  PortfolioExploreMoreSection,
} from "@/components/portfolio";
import { Project } from "@/utils/ProjectsData";
import ReelVideoPlayer from "@/components/ReelVideoPlayer";

const PortfolioContent = () => {
  const [video, setVideo] = React.useState<Project | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <PortfolioHeroSection />
      <PortfolioPickedForYourSection
        onOpenReelVideoPlayer={(video) => {
          setVideo(video);
          setIsOpen(true);
          const searchParams = useSearchParams();
          const currentParams = new URLSearchParams(searchParams.toString());
          currentParams.set("video", video.id.toString());
          const queryString = currentParams.toString();
          router.replace(`${pathname}${queryString ? `?${queryString}` : ""}`, {
            scroll: false,
          });
        }}
      />
      <PortfolioExploreMoreSection
        onOpenReelVideoPlayer={(video) => {
          setVideo(video);
          setIsOpen(true);
          const searchParams = useSearchParams();

          const currentParams = new URLSearchParams(searchParams.toString());
          currentParams.set("video", video.id.toString());
          const queryString = currentParams.toString();
          router.replace(`${pathname}${queryString ? `?${queryString}` : ""}`, {
            scroll: false,
          });
        }}
      />
      <ReelVideoPlayer
        open={isOpen}
        video={video}
        closeCallback={() => {
          setVideo(null);
          setIsOpen(false);
          const searchParams = useSearchParams();

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
};

export default PortfolioContent;
