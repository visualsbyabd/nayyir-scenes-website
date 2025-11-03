import React from "react";
import {
  CountUpOnScroll,
  SectionSubtitle,
  SectionTitle,
} from "@/components/global";
import { ProjectCount, projectsCountsData } from "@/utils/Consts";
import { useMediaQuery } from "react-responsive";
import { homePageSectionsLabels } from "@/utils/SectionLabels";

const ProjectsCountSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1200px)",
  });

  return (
    <section className="w-full lg:h-[60vh] md:h-[80vh] h-[140vh] flex flex-col items-center justify-center lg:px-24 lg:py-12 px-4 py-8">
      <SectionTitle text={homePageSectionsLabels.projectsCountsSection.title} />
      <SectionSubtitle
        text={homePageSectionsLabels.projectsCountsSection.subtitle}
      />
      <div className="w-[90%] lg:w-full h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-8 md:gap-x-4 md:gap-y-4 gap-4 mt-12">
        {projectsCountsData.map((projectCount: ProjectCount, index: number) => (
          <div
            key={index}
            className="w-full h-full bg-secondary/50 rounded-2xl border-2 lg:border-secondary/50 hover:border-primary border-primary duration-500 ease-in flex flex-col items-start justify-start gap-2 px-4 py-2"
          >
            <div className="relative h-1/3">
              <p className="absolute top-0 left-0 text-7xl text-secondary-varient/50 font-accent font-extrabold">
                +
                <CountUpOnScroll endCount={projectCount.count} />
              </p>
              <p className="absolute bottom-0 left-0 text-5xl text-primary font-accent font-extrabold">
                +
                <CountUpOnScroll endCount={projectCount.count} />
              </p>
            </div>
            <h3 className="text-lg text-primary font-primary font-bold">
              {projectCount.title}
            </h3>
            <p className="lg:text-md text-sm text-primary-varient font-light">
              {projectCount.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCountSection;
