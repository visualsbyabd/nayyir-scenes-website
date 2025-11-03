import React from "react";
import { genres, Project } from "@/utils/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import { convertEpochToDateString } from "@/utils/formatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "@/utils/formatter";

const ProjectCard = ({
  project,
  openReelVideoPlayerCallback,
  allowHoverScale = true,
}: {
  project: Project;
  allowHoverScale?: boolean;
  openReelVideoPlayerCallback: (project: Project) => void;
}) => {
  console.log(allowHoverScale)
  return (
    <div
      key={project.id}
      className={`w-full h-full cursor-pointer border-2 border-transparent lg:hover:drop-shadow-2xl  lg:hover:border-primary/50 duration-300 ease ${
        allowHoverScale ? `lg:hover:scale-110`:``
      } bg-secondary-varient rounded-2xl relative overflow-hidden`}
      onClick={() => {
        openReelVideoPlayerCallback(project);
      }}
    >
      {/*  Thumbnail*/}
      <Image
        src={project.videoThumbnailUrl}
        alt={`${project.title}: ${project.subtitle}`}
        width={1080}
        height={1920}
        className="w-full h-full object-cover object-center"
      />
      {/*  Content Overlays*/}
      <div className="opacity-0 md:opacity-100 w-full h-9/10 lg:h-2/3 absolute bottom-0 bg-gradient-to-t from-secondary to-secondary/0"></div>
      <div className="opacity-0 md:opacity-100 w-full h-9/10 lg:h-2/3 absolute bottom-0 bg-gradient-to-t from-secondary to-secondary/0"></div>
      <div className="opacity-0 md:opacity-100 w-full h-9/10 lg:h-2/3 absolute bottom-0 bg-gradient-to-t from-secondary to-secondary/0"></div>
      <div className="w-full h-9/10 lg:h-2/3 absolute bottom-0 bg-gradient-to-t from-secondary to-secondary/0"></div>
      <div className="w-full md:hidden flex h-9/10 lg:h-2/3 absolute bottom-0 bg-gradient-to-t from-secondary to-secondary/0"></div>
      <div className="opacity-0 md:opacity-100 w-full h-1/2 absolute top-0 left-0 bg-gradient-to-br from-secondary via-secondary/0"></div>
      <div className="w-full h-1/2 absolute top-0 left-0 bg-gradient-to-br from-secondary via-secondary/0"></div>
      {/*  Content*/}
      <div className="w-full gap-2 h-1/4 absolute bottom-0 flex flex-col items-start justify-end px-4 py-2">
        <div className="flex-wrap flex flex-col items-start justify-start gap-x-4 gap-y-2">
          <p className="lg:text-sm text-md font-primary text-primary font-medium">
            {convertEpochToDateString(project.addedIn!)}
          </p>
          {(() => {
            const genre = genres.filter(
              (genre) => genre.id === project.genreId
            )[0];
            return (
              <Link
                href={`/portfolio?genre=${genre.id}`}
                className={`${genre.bgColor} z-10 flex flex-row items-center justify-start gap-x-4 rounded-lg px-2 py-1`}
              >
                <FontAwesomeIcon
                  icon={genre.icon}
                  size="1x"
                  className="text-primary"
                />
                <p className="lg:text-sm text-md font-primary text-primary font-medium">
                  {genre.name}
                </p>
              </Link>
            );
          })()}
        </div>
        <h4 className="text-primary lg:text-lg text-md font-primary font-bold">
          {project.title}
        </h4>
        <p className="text-primary-varient lg:text-sm text-sm font-primary font-light">
          {project.subtitle}
        </p>
      </div>
      <div className="w-full h-1/10 absolute top-0 left-0 flex flex-row items-center justify-start px-4 py-2 gap-1">
        <FontAwesomeIcon icon={faEye} size="1x" className="text-primary" />
        <p className="text-sm font-primary text-primary font-medium">
          {formatNumber(project.likes * project.comments)}
        </p>
        <FontAwesomeIcon
          icon={faHeart}
          size="1x"
          className="text-primary ml-2 lg:ml-4"
        />
        <p className="text-sm font-primary text-primary font-medium">
          {formatNumber(project.likes)}
        </p>
        <FontAwesomeIcon
          icon={faMessage}
          size="1x"
          className="text-primary ml-2 lg:ml-4"
        />
        <p className="text-sm font-primary text-primary font-medium">
          {formatNumber(project.comments)}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
