import React from "react";
import Image from "next/image";
import Link from "next/link";
import { symbolPrimary, symbolSecondary } from "@/utils/Assets";
import { nayyirLogoUlt } from "@/utils/Consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { facebook, instagram, linkedin, mail, phone, tiktok, whatsapp } from "@/utils/EnvVars";

const DefaultFooter = () => {
  return (
    <footer className="rounded-lg shadow-sm bg-background">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={symbolSecondary.src}
              alt={nayyirLogoUlt}
              width={symbolSecondary.width}
              height={symbolSecondary.height}
              className="h-12 w-12"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">
              Nayyir Scenes
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-primary/50 sm:mb-0 ">
            <li>
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline me-4 md:me-6">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-primary/50 sm:mb-0 ">
            <li>
              <Link href={URL.parse(facebook!)!} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </li>
            <li>
              <Link href={URL.parse(instagram!)!} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link href={URL.parse(tiktok!)!} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faTiktok} />
              </Link>
            </li>
            <li>
              <Link href={URL.parse(linkedin!)!} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li>
              <Link href={`mail:${mail}`} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </li>
            <li>
              <Link href={`https://wa.me/${whatsapp}`} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </li>
            <li>
              <Link href={`tel:${phone}`} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faPhone} />
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-primary/50 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link href="https://flowbite.com/" className="hover:underline">
            Nayyir Scenes™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default DefaultFooter;
