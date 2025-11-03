"use client"
import React from 'react'
import { ProjectCard, SectionSubtitle, SectionTitle } from '../global'
import { portfolioPageSectionsLabels } from '@/utils/SectionLabels'
import { useMediaQuery } from 'react-responsive'
import {useState, useEffect} from 'react'
import { genres, Project, projectsData } from '@/utils/ProjectsData'
import { useSearchParams } from 'next/navigation'

const PortfolioPickedForYourSection = ({onOpenReelVideoPlayer}: {onOpenReelVideoPlayer: (project:Project)=>void}) => {
    const isMobile = useMediaQuery({
    query: "(min-width: 0px) and (max-width: 768px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1200px)",
  });
const max = isTablet ? 6 : isMobile ? 4 : 10;
  const [selectedGenre, setSelectedGenre] = useState<number>(-1);
  const [randomItems, setRandomItems] = useState<Project[]>([]);
  const searchParams= useSearchParams();
  useEffect(() => {
    (()=> {
      const genre = searchParams.get('genre');
      if(!genre) return;
      if(!genres[Number.parseInt(genre)-1]) {
        setSelectedGenre(-1); 
        return;
      };
      setSelectedGenre(Number.parseInt(genre));
    })();
    const selectedItems = projectsData.sort((projectA, projectB) => projectA.addedIn! - projectB.addedIn!).slice(0, max);
    setRandomItems(selectedItems);
  }, [projectsData, max]);
  return (
    <section className="-mt-40 md:mt-0 overflow-hidden relative w-full flex flex-col items-center justify-center lg:px-12 lg:py-24 px-2 py-12">
      <div className='md:max-w-7xl w-full flex md:flex-row flex-col items-center justify-between'>
        <div className='flex flex-col md:items-start items-center justify-center'>
          <SectionTitle text={portfolioPageSectionsLabels.PortfolioPickedForYourSection.title} />
          <SectionSubtitle text={portfolioPageSectionsLabels.PortfolioPickedForYourSection.subtitle} className='lg:text-start lg:max-w-[60%]'/>
        </div>
      </div>
      <div className="mt-8 xl:max-w-7xl xl:px-0 md:px-8 h-full xl:gap-x-6 xl:gap-y-3 md:gap-x-4 md:gap-y-2 gap-2 items-center grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2">
        {randomItems.map((project: Project, index: number) => (<ProjectCard project={project} key={index} openReelVideoPlayerCallback={onOpenReelVideoPlayer} />))}
      </div>
    </section>
  )
}

export default PortfolioPickedForYourSection