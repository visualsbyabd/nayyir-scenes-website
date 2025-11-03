"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import {
  HeroSection,
  ClientsLogosSection,
  ServicesSection,
  ProjectsCountSection,
  LatestProjectsSection,
  ContactUsSection,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <HeroSection />
      </ParallaxProvider>
      <ClientsLogosSection />
      <ServicesSection />
      <ProjectsCountSection />
      <LatestProjectsSection />
      <ContactUsSection />
    </>
  );
}
