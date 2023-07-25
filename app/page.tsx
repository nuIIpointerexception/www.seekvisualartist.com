"use client";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import { ScrollerMotion } from "scroller-motion";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import { useEffectOnce, useEventListener } from 'usehooks-ts';

import PreLoader from "./components/other/PreLoader";
import useBlobity from "./components/blobity/useBlobity";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

const NavBar = dynamic(() => import("./sections/NavBar"));
const Hero = dynamic(() => import("./sections/Hero"));
const About = dynamic(() => import("./sections/About"));
const Work = dynamic(() => import("./sections/Work"));
const Contact = dynamic(() => import("./sections/Contact"));
const Footer = dynamic(() => import("./sections/Footer"));

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

    useEffectOnce(() => {
        setIsMobile(window.innerWidth < 768);
    });

    useEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });

  useBlobity(initialBlobityOptions);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
        <PreLoader />
        <Blur />
        <Color />
        <NavBar />
        <ScrollerMotion
            disabled={isMobile}
            spring={{ mass: 1, stiffness:800, bounce: 300, damping: 100 }}
        >
          <main
            className="flex flex-col items-center justify-center"
            style={{
              backgroundColor: "#000000",
            }}
          >
            <Hero />
            <About />
            <Work />
            { /* <Blog /> TODO: Low Priority */ }
            <Contact />
            <Footer />
          </main>
        </ScrollerMotion>
    </>
  );
}
