import { Project, projectsData } from "@/utils/ProjectsData";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { ProjectCard, SectionSubtitle, SectionTitle } from "./global";
import { usePathname } from "next/navigation";

const ReelVideoPlayer = ({
  open,
  video,
  closeCallback,
}: {
  open: boolean;
  video: Project | null;
  closeCallback: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error(
          "Video playback failed, likely due to browser policy:",
          error
        );
      });
    }
  }, [video?.videoUrl]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCallback();
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [closeCallback]);
  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCallback}
        className={` z-40 fixed w-full h-full bg-black/35 backdrop-blur-md top-0 left-0 ${
          open ? `flex` : `hidden cursor-none`
        }`}
      ></div>
      {/* Player */}
      <div
        className={`z-40 fixed w-[90%]  h-[80%] md:w-[90%] md:h-[80%] mt-12 xl:max-w-7xl xl:aspect-video bg-primary/10 rounded-xl backdrop-blur-md px-6 py-4 -translate-x-1/2 left-1/2 duration-500 ease flex flex-col items-center justify-start ${
          open ? `top-1/2 -translate-y-1/2` : `top-[4000px]`
        }`}
      >
        {/* Header */}
        <div className="items-center justify-between flex flex-row w-full mb-4">
          <SectionTitle text="Video Player" />
          <button onClick={closeCallback} className="cursor-pointer">
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </button>
        </div>
        {/* Body */}
        <div className="w-full h-full overflow-y-auto items-center gap-4 justify-start flex flex-col md:flex-row">
          {/* Left Side: Player */}
          <div
            className={`h-full aspect-[9/16] flex items-center justify-center`}
          >
            <video
              controls
              autoPlay
              controlsList="nodownload"
              disablePictureInPicture
              ref={videoRef}
              muted
              className="w-full h-full aspect-[9/16] rounded-xl shadow-lg bg-black"
              poster={video?.videoThumbnailUrl ?? ""}
            >
              <source src={video?.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Right Side: Information & Recommendation */}
          <div className="w-full h-full flex flex-col  items-start justify-between">
            <div className=" w-full flex items-start justify-end flex-col">
              <h3 className={`font-primary font-black g:text-5xl md:text-4xl text-3xl text-primary text-start`}>{video?.title}</h3>
              <SectionSubtitle
                text={video?.subtitle ?? "No Video Selected"}
                textDirection="start"
              />
            </div>
            <div className="w-full lg:grid hidden lg:h-[70%]  grid-cols-2 lg:grid-cols-4 gap-4 overflow-visible">
              {projectsData
                .filter(
                  (project) =>
                    project.genreId === video?.genreId &&
                    project.id !== video?.id
                )
                .slice(0, 4)
                .map((project) => (
                  <ProjectCard
                  allowHoverScale={false}
                    key={project.id}
                    project={project}
                    openReelVideoPlayerCallback={() => {
                      window.open(`${pathname}/?video=${project.id}`, "_self");
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReelVideoPlayer;
