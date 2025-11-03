import React, { ReactElement } from "react";

export default function SectionSubtitle({
  text,
  className,
  textDirection = "center",
  margin = true,
}: {
  text: string;
  className?: string;
  textDirection?: "start" | "end" | "center";
  margin?: boolean;
}): ReactElement {
  return (
    <p
      className={
        "max-w-4xl text-md text-primary-varient font-primary font-medium text-sm lg:text-lg" +
        ` ${className ?? ""} text-${textDirection} ${margin ? "max-12" : "mx-0"}`
      }
    >
      {text}
    </p>
  );
}
