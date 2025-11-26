import { HomeContent } from "@/components/home";
import { PortfolioData } from "@/models/PortfolioData";
import { getPortfolioData } from "@/utils/getPortfolioData";
import { Suspense } from "react";

export default async function Home() {
  const portfolioData: PortfolioData = await getPortfolioData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent portfolioData={portfolioData} />
    </Suspense>
  );
}
