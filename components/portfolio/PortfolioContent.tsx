"use client";

import React from "react";
import {
  PortfolioHeroSection,
  PortfolioPickedForYourSection,
  PortfolioExploreMoreSection,
} from "@/components/portfolio";
import ReelVideoPlayer from "@/components/ReelVideoPlayer";
import { PortfolioData } from "@/models/PortfolioData";
import { Project } from "@/models/Project";
import ProjectsSection from "./ProjectsSection";

const PortfolioContent = ({
  portfolioData,
}: {
  portfolioData: PortfolioData;
}) => {
  const [video, setVideo] = React.useState<Project | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [recommendedProjects, setRecommendedProjects] = React.useState<
    Project[]
  >([]);
  return (
    <>
      <PortfolioHeroSection />
      <PortfolioPickedForYourSection
        portfolioData={portfolioData}
        onOpenReelVideoPlayer={(video) => {
          setVideo(video);
          setIsOpen(true);
          setRecommendedProjects(
            portfolioData.projectsData.filter(
              (project) => project.genreId === video.genreId
            )
          );
        }}
      />
      <PortfolioExploreMoreSection
        portfolioData={portfolioData}
        onOpenReelVideoPlayer={(video) => {
          setVideo(video);
          setIsOpen(true);
          setRecommendedProjects(
            portfolioData.projectsData.filter(
              (project) => project.genreId === video.genreId
            )
          );
        }}
      />
      {...portfolioData.sections
        .sort((sectionA, sectionB) => sectionA.id - sectionB.id)
        .map((section) => (
          <ProjectsSection
            key={section.id}
            section={section}
            onOpenReelVideoPlayer={(video) => {
              setVideo(video);
              setIsOpen(true);
              setRecommendedProjects(
                section.projects.filter((project) => project.id !== video.id)
              );
            }}
          />
        ))}
      <ReelVideoPlayer
        recommendedProjects={recommendedProjects}
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
