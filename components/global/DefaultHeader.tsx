"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { headerTabs } from "@/utils/Consts";
import { symbolSecondary } from "@/utils/Assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrimaryButton, SecondaryButton } from "@/components/global/index";

const DefaultHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-[90%] z-50 max-h-16 lg:max-w-7xl fixed top-8 left-1/2 -translate-x-1/2 ${isScrolled ? "bg-gray-400/15 backdrop-blur-sm drop-shadow-2xl drop-shadow-secondary" : "bg-transparent"} px-4 py-2 rounded-2xl flex flex-row items-center justify-between duration-250 ease-in`}
    >
      <Link href="/">
        <Image
          src={symbolSecondary.src}
          alt={symbolSecondary.alt}
          width={symbolSecondary.width}
          height={symbolSecondary.height}
          className="max-h-12 object-contain object-center max-w-16 lg:max-w-32"
        />
      </Link>
      <div className="items-center justify-center lg:flex hidden flex-row w-full">
        {headerTabs.map((tab, i) => (
          <Link href={tab.href} key={i}>
            <p
              className={`${tab.href === pathname ? "text-primary" : "text-primary/50"} px-2 hover:text-primary font-primary text-lg duration-250 ease-in`}
            >
              {tab.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="items-center justify-end lg:flex hidden flex-row">
        <PrimaryButton
          title={"Book Meeting"}
          colorMode="primary"
          onClick={() => {
            window.open("https://calendly.com/nayyirscenes-info/30min", "_blank");
          }}
        />
      </div>
    </header>
  );
};

export default DefaultHeader;
