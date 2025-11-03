import React from "react";
import { SectionSubtitle, SectionTitle } from "@/components/global";
import { servicesData, ServiceData } from "@/utils/Consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { homePageSectionsLabels } from "@/utils/SectionLabels";

const ServicesSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1200px)",
  });

  return (
    <section className="w-full h-screen bg-secondary/50 flex flex-col items-center justify-center lg:px-12 lg:py-24 px-8 py-24">
      <p className="z-10 max-w-4xl text-md text-primary/50 font-primary font-medium text-center mx-12 text-sm lg:text-lg">
        The Full Spectrum of Production
      </p>
      <SectionTitle text={homePageSectionsLabels.servicesSection.title} />
      <SectionSubtitle text={homePageSectionsLabels.servicesSection.subtitle} />
      <div className="lg:max-w-7xl md:max-w-2xl w-[90%] h-full grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-20 md:gap-x-10 md:gap-y-5 lg:gap-y-10 gap-y-4 mt-8 lg:mt-12">
        {servicesData.map((service: ServiceData, i: number) => (
          <div
            key={i}
            className="w-full items-start justify-start flex flex-row gap-4"
          >
            {/*Left Side*/}
            <div className="flex flex-1 relative h-full">
              <FontAwesomeIcon
                icon={service.secondaryIcon}
                size="2x"
                className="absolute top-4 left-4 text-secondary-varient"
              />
              <FontAwesomeIcon
                icon={service.primaryIcon}
                size="2x"
                className="absolute top-0 text-primary"
              />
            </div>
            {/*Right Side*/}
            <div className="flex-6 h-full flex flex-col items-start justify-start gap-2">
              <h3 className="text-primary lg:text-xl text-md font-bold font-primary">
                {service.title}
              </h3>
              <p className="text-primary-varient lg:text-md text-sm font-light font-primary text-justify">
                {service.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
