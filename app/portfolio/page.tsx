import React, { Suspense } from "react";
import { PortfolioContent } from "@/components/portfolio";
import { PortfolioData } from "@/models/PortfolioData";
import { getPortfolioData } from "@/utils/getPortfolioData";

export default async function PortfolioPage() {
  const portfolioData: PortfolioData = await getPortfolioData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioContent portfolioData={portfolioData} />
    </Suspense>
  );
}
