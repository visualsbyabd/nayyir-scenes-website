"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import {
HomeContent} from "@/components/home";
import ReelVideoPlayer from "@/components/ReelVideoPlayer";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Project } from "@/utils/ProjectsData";

export default function Home() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
