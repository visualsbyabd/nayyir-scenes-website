"use client";
import React from "react";
import { useState } from "react";

export interface SecondaryButtonProps {
  title: string;
  colorMode: "primary" | "secondary";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  // icon:
  iconPosition?: "left" | "right";
}

const SecondaryButton = ({
  title,
  colorMode,
  onClick,
  iconPosition,
}: SecondaryButtonProps) => {
  const [hoverState, setHoverState] = useState<boolean>(false);
  return (
    <button
      onClick={onClick}
      onMouseOver={() => {
        setHoverState(true);
      }}
      onMouseOut={() => {
        setHoverState(false);
      }}
      className={`whitespace-nowrap px-8 py-1 font-primary font-semibold ${colorMode === "secondary" ? "text-secondary" : "text-primary"}`}
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
