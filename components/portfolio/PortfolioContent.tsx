"use client";

import React from "react";
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

  return (
    <>
      <PortfolioHeroSection />
      <PortfolioPickedForYourSection
        onOpenReelVideoPlayer={(video) => {
          setVideo(video);
          setIsOpen(true);
        }}
      />
      <PortfolioExploreMoreSection
        onOpenReelVideoPlayer={(video) => {
          setVideo(video);
          setIsOpen(true);
        }}
      />
      <ReelVideoPlayer
        open={isOpen}
        video={video}
        closeCallback={() => {
          setVideo(null);
          setIsOpen(false);
        }}
      />
    </>
  );
};

export default PortfolioContent;
