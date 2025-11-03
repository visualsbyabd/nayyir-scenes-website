import React, { ReactElement } from "react";

export default function SectionTitle({
  text,
  textSize = "lg:text-5xl md:text-4xl text-3xl",
  fontFamily = "accent",
}: {
  text: string;
  textSize?: string;
  fontFamily?: "primary" | "accent";
}): ReactElement {
  return (
    <h2
      className={`${fontFamily} font-black ${textSize} text-primary text-center`}
    >
      <span className="absolute">{text}</span>
      <span className="blur-2xl opacity-75">{text}</span>
    </h2>
  );
}
