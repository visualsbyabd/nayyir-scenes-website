import React from "react";
import { clientsLogosAssets } from "@/utils/Consts";
import Image from "next/image";
import { SectionSubtitle, SectionTitle } from "@/components/global";
import { useMediaQuery } from "react-responsive";
import { homePageSectionsLabels } from "@/utils/SectionLabels";

const ClientsLogosSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1200px)",
  });

  return (
    <section className="overflow-hidden relative w-full h-[40vh] lg:h-[60vh] flex flex-col items-center justify-center lg:px-12 lg:py-24 px-2 py-12">
      <div className="h-full lg:w-1/4 w-1/8 absolute top-0 right-0 bg-gradient-to-l from-background to-background/0 pointer-events-none"></div>
      <div className="h-full lg:w-1/4 w-1/8 absolute top-0 left-0 bg-gradient-to-r from-background to-background/0 pointer-events-none"></div>
      <SectionTitle text={homePageSectionsLabels.clientsLogosSection.title} />
      <SectionSubtitle
        className="px-8 md:px-0"
        text={homePageSectionsLabels.clientsLogosSection.subtitle}
      />
      <div
        className="w-full h-full mt-4 lg:mt-8 flex flex-row items-center justify-center lg:gap-12 gap-4 scrolling-wrapper"
        id="logos-container"
      >
        {clientsLogosAssets.map((asset, index) => (
          <Image
            className="lg:w-24 w-16 h-full object-contain object-center opacity-25"
            alt={asset.alt}
            src={asset.src}
            width={asset.width}
            height={asset.height}
            key={index}
          ></Image>
        ))}
        {clientsLogosAssets.map((asset, index) => (
          <Image
            className="lg:w-24 w-16 h-full object-contain object-center opacity-25"
            alt={asset.alt}
            src={asset.src}
            width={asset.width}
            height={asset.height}
            key={index}
          ></Image>
        ))}
        {clientsLogosAssets.map((asset, index) => (
          <Image
            className="lg:w-24 w-16 h-full object-contain object-center opacity-25"
            alt={asset.alt}
            src={asset.src}
            width={asset.width}
            height={asset.height}
            key={index}
          ></Image>
        ))}
        {clientsLogosAssets.map((asset, index) => (
          <Image
            className="lg:w-24 w-16 h-full object-contain object-center opacity-25"
            alt={asset.alt}
            src={asset.src}
            width={asset.width}
            height={asset.height}
            key={index}
          ></Image>
        ))}
        {clientsLogosAssets.map((asset, index) => (
          <Image
            className="lg:w-24 w-16 h-full object-contain object-center opacity-50"
            alt={asset.alt}
            src={asset.src}
            width={asset.width}
            height={asset.height}
            key={index}
          ></Image>
        ))}
      </div>
    </section>
  );
};

export default ClientsLogosSection;
