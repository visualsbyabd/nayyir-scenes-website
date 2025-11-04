"use client";
import React from "react";
import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { genres, Project, projectsData } from "@/utils/ProjectsData";
import { ProjectCard, SectionSubtitle, SectionTitle } from "../global";
import { portfolioPageSectionsLabels } from "@/utils/SectionLabels";
import { faAllergies } from "@fortawesome/free-solid-svg-icons";
const PortfolioExploreMoreSection = ({onOpenReelVideoPlayer}: {onOpenReelVideoPlayer: (project: Project) => void}) => {  const [selectedGenre, setSelectedGenre] = useState<number>(-1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    (() => {
      const genre = searchParams.get("genre");
      if (!genre) return;
      if (!genres[Number.parseInt(genre) - 1]) {
        setSelectedGenre(-1);
        return;
      }
      setSelectedGenre(Number.parseInt(genre));
    })();
  }, [genres, searchParams]);
  return (
    <section className="w-full items-center justify-center flex flex-col">
      <SectionTitle
        text={portfolioPageSectionsLabels.PortfolioExploreMoreSection.title}
      />
      <SectionSubtitle
        text={portfolioPageSectionsLabels.PortfolioExploreMoreSection.subtitle}
      />
      {/* Genres Selector */}
      <div className="max-w-7xl items-center justify-center flex flex-row gap-2 flex-wrap">
        {(() => {
          const genresData = [
            {
              id: -1,
              name: "All",
              icon: faAllergies,
              bgColor: "bg-gray-500/15",
            },
            ...genres,
          ];
          return genresData.map((genre, index) => (
            <div key={index}
              onClick={() => {
                if (genre.id === selectedGenre) return;
                let queryString = "";
                const currentParams = new URLSearchParams(
                  searchParams.toString()
                );
                if (genre.id === -1) {
                  currentParams.delete("genre");
                  queryString = currentParams.toString();
                } else {
                  currentParams.set("genre", genre.id.toString());
                  queryString = currentParams.toString();
                }
                router.replace(
                  `${pathname}${queryString ? `?${queryString}` : ""}`,
                  {
                    scroll: false,
                  }
                );
                setSelectedGenre(genre.id);
              }}
              className={`px-2 py-1 items-center justify-center gap-2 flex flex-row rounded-lg cursor-pointer ${
                selectedGenre === genre.id
                  ? "bg-primary text-secondary"
                  : "bg-secondary-varient/50 text-primary hover:bg-secondary-varient duration-250 ease"
              }`}
            >
              {genre.name}
            </div>
          ));
        })()}
      </div>
      <div className="mt-8 xl:max-w-7xl xl:px-0 md:px-8 h-full xl:gap-x-8 xl:gap-y-8 md:gap-x-4 md:gap-y-2 gap-2 items-center grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2">
        {projectsData.filter((project) => selectedGenre === -1 ? true :project.genreId === selectedGenre ).map((project, index) => (
          <ProjectCard project={project} key={index} openReelVideoPlayerCallback={onOpenReelVideoPlayer}/>        ))}
      </div>
    </section>
  );
};

export default PortfolioExploreMoreSection;
