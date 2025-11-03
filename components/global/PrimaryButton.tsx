"use client";
import React from "react";
import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface PrimaryButtonProps {
  title: string;
  colorMode: "primary" | "secondary";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon?: IconProp;
  iconPosition?: "left" | "right";
}

const PrimaryButton = ({
  title,
  colorMode,
  onClick,
  icon,
  iconPosition,
}: PrimaryButtonProps) => {
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
      className={`rounded-2xl whitespace-nowrap px-8 py-1 border-2 hover:bg-transparent duration-250 ease-in font-primary font-semibold ${colorMode === "primary" ? "bg-primary border-primary text-secondary hover:text-primary" : "bg-secondary border-secondary text-primary hover:text-secondary"}`}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
