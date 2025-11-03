import React from "react";
import Image from "next/image";
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
          <a
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
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-primary/50 sm:mb-0 ">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:underline me-4 md:me-6">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-primary/50 sm:mb-0 ">
            <li>
              <a href={facebook} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href={instagram} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href={tiktok} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
            <li>
              <a href={linkedin} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href={`mail:${mail}`} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${whatsapp}`} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a href={`tel:${phone}`} className="hover:underline me-4 md:me-6">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-primary/50 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Nayyir Scenes™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default DefaultFooter;
