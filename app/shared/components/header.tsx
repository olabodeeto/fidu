"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

import { AnimatePresence } from "framer-motion";
import { motion, useScroll } from "framer-motion";

export default function Header() {
  const [istoogle, setistoogle] = useState(false);
  const { scrollYProgress } = useScroll();
  return (
    <>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        {/* desktop */}
        <div className="w-full hidden lg:block fixed z-50 bg-white top-0">
          <div className="w-11/12 flex justify-between items-center m-auto py-5 lg:px-2 xl:px-4 bg-white">
            <div className="xl:pl-4">
              <Image
                src="/images/logo.svg"
                width={140}
                height={140}
                alt="Picture of the author"
                className="lg:w-28"
              />
            </div>
            <div>
              <ul className="flex gap-x-10">
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>
                <li>
                  <Link href="/about">FAQ&apos;s</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ==== */}

        {/* == mobile=== */}
        <div></div>
        <div className="w-full lg:hidden overflow-hidden bg-black z-50 fixed">
          <div className="w-full py-5  flex justify-between items-center px-2 fixed top-0 z-50 bg-white">
            <Image
              src="/images/logo.svg"
              width={140}
              height={140}
              alt="Picture of the author"
              className="w-28"
            />
            <div onClick={() => setistoogle(!istoogle)}>
              <MenuIcon />
            </div>
          </div>
          <div
            className={`${
              istoogle ? "ml-0 h-screen" : "ml-[100rem] h-0"
            } bg-fidu_primary z-40 mt-2 headerTransition`}
          >
            <div className="pt-20">
              <ul className="flex flex-col gap-y-10 text-center text-white font-semibold text-4xl">
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>
                <li>
                  <Link href="/about">FAQ&apos;s</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ======= */}
      </AnimatePresence>
    </>
  );
}
