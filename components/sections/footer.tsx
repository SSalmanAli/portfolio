import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-4 dark:bg-zinc-800 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        {/* Logo and Title */}
        <a
          href="#"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          {/* <Logo /> */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                          {/* SVG Image */}
                          <Image
                            src="/logo/jo_logo.svg"
                            alt="Logo"
                            className="size-8 object-contain"
                            height={32}
                            width={32}
                          />
                          {/* Text */}
                          <span className="text-lg font-bold text-zinc-800 dark:text-primary-white">
                          SSA
                          </span>
                        </div>
        </a>

        {/* Copyright */}
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2025{" "}
          <a href="#" className="hover:underline">
            Syed Salman Ali
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
