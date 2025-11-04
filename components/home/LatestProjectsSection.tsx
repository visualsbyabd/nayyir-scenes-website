"use client";
import React, { useEffect, useState } from "react";
import {
  ProjectCard,
  SecondaryButton,
  SectionSubtitle,
  SectionTitle,
} from "@/components/global";
import { Project, projectsData } from "@/utils/ProjectsData";
import { useMediaQuery } from "react-responsive";
import { homePageSectionsLabels } from "@/utils/SectionLabels";

const LatestProjectsSection = ({onOpenVideoReelPlayer}: {onOpenVideoReelPlayer: (project: Project)=> void}) => {
  const isMobile = useMediaQuery({
    query: "(min-width: 0px) and (max-width: 768px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1200px)",
  });
  const max = isTablet ? 6 : isMobile ? 4 : 8;
  const [randomItems, setRandomItems] = useState<Project[]>([]);
  useEffect(() => {
    const shuffled = [...projectsData];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const selectedItems = shuffled.slice(0, max);
    setRandomItems(selectedItems);
  }, [max]);
  return (
    <section className="w-full flex flex-col items-center justify-center bg-secondary/50 lg:px-24 lg:py-12 px-4 py-8">
      <div className="max-w-7xl w-[90%] items-center lg:justify-between justify-center flex lg:flex-row flex-col">
        <div className="lg:items-start items-center lg:justify-start justify-center flex flex-col">
          <SectionTitle
            text={homePageSectionsLabels.latestProjectsSection.title}
          />
          <SectionSubtitle
            textDirection={isMobile ? "center" : isTablet ? "center" : "start"}
            text={homePageSectionsLabels.latestProjectsSection.subtitle}
          />
        </div>
        <SecondaryButton
          title={"Show More"}
          colorMode="primary"
          onClick={() => {
            window.open("/portfolio/", "_self");
          }}
        />
      </div>
      <div className="w-[99%] max-w-7xl h-full mt-8 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-x-8 lg:gap-y-8 gap-x-2 gap-y-2">
        {randomItems.map((project: Project, index: number) => (
          <ProjectCard project={project} key={index} openReelVideoPlayerCallback={onOpenVideoReelPlayer} />
        ))}
      </div>
    </section>
  );
};

export default LatestProjectsSection;
