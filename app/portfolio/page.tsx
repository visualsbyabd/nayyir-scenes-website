"use client";
import React, { Suspense } from "react";
import { PortfolioContent } from "@/components/portfolio";

const PortfolioPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioContent />
    </Suspense>
  );
};

export default PortfolioPage;
