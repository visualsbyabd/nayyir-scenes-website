import { Section } from "@/models/Section";
import React from "react";
import {
  PrimaryButton,
  ProjectCard,
  SectionSubtitle,
  SectionTitle,
} from "../global";
import { Project } from "@/models/Project";
import { useMediaQuery } from "react-responsive";

const ProjectsSection = ({
  section,
  onOpenReelVideoPlayer,
}: {
  onOpenReelVideoPlayer: (video: Project) => void;
  section: Section;
}) => {
  const max = section.projects.length;
  const isMobile = useMediaQuery({
    query: "(min-width: 0px) and (max-width: 768px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1200px)",
  });

  const [pagniationLimit, setPaginationLimit] = React.useState(
    isMobile ? 2 : isTablet ? 3 : 5
  );
  return (
    <section className="w-full items-center justify-center flex flex-col py-14">
      <SectionTitle text={section.title} />
      <SectionSubtitle
        text={section.subtitle}
        className="lg:text-start lg:max-w-[60%]"
      />
      <div className="mt-8 xl:max-w-7xl xl:px-0 md:px-8 h-full xl:gap-x-8 xl:gap-y-8 md:gap-x-4 md:gap-y-2 gap-2 items-center grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2">
        {section.projects
          .slice(0, pagniationLimit)
          .map((project: Project, index: number) => (
            <ProjectCard
              project={project}
              key={index}
              openReelVideoPlayerCallback={onOpenReelVideoPlayer}
            />
          ))}
      </div>
      {pagniationLimit < max && (
        <div className="mt-4">

        <PrimaryButton
          colorMode="primary"
          onClick={() => {
            const newLimit =
            pagniationLimit + (isMobile ? 2 : isTablet ? 3 : 5);
            setPaginationLimit(newLimit > max ? max : newLimit);
          }}
          title="Load More"
          />
          </div>
      )}
    </section>
  );
};

export default ProjectsSection;
