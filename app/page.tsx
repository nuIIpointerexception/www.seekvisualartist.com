"use client";
import Hero from "./sections/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
/* TODO: Decide wether i should use this. import { ScrollerMotion } from "scroller-motion"; */
import PreLoader from "./components/other/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./sections/NavBar";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import dynamic from "next/dynamic";
const Work = dynamic(() => import("./sections/Work"));
const About = dynamic(() => import("./sections/About"));
const Contact = dynamic(() => import("./sections/Contact"));
const Footer = dynamic(() => import("./sections/Footer"));

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

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
      <main
        className="flex flex-col items-center justify-center"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <Hero />
        <About />
        <Work />
        {/*<Blog /> TODO: !*/}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
