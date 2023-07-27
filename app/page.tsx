"use client";
import React, {useState} from "react";
import { ScrollerMotion } from "scroller-motion";
import { useEffectOnce, useEventListener } from 'usehooks-ts';

import PreLoader from "./components/other/PreLoader";
import useBlobity from "./components/blobity/useBlobity";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Tools from "./sections/Tools.tsx";

export default function Home() {

    const [isMobile, setIsMobile] = useState(false);

    useEffectOnce(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        setIsMobile(window.innerWidth < 768);
    });

    useEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });

    useBlobity(
        {
            licenseKey: "opensource",
            focusableElementsOffsetX: 4,
            focusableElementsOffsetY: 4,
            color: "#ffffff",
            dotColor: "#ffffff",
            invert: true,
            focusableElements:
                "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
            font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
            fontSize: 16,
            fontWeight: 900,
            opacity: 1.0,
            fontColor: "#ffffff",
            zIndex: 35,
            size: 50,
            radius: 5,
            magnetic: false,
        }
    );

    return (
        <>
            <PreLoader />
            <Blur />
            <Color />
            <NavBar />
            {/*<ScrollerMotion // Weird, stuff happening with this
                disabled={isMobile}
                spring={{ mass: 1, stiffness:800, bounce: 300, damping: 100 }}
            >*/}
            <main
                className="flex flex-col items-center justify-center bg-black"
            >
                <Hero />
                <About />
                <Work />
                <Tools />
                { /* <Blog /> TODO: Low Priority */ }
                <Contact />
                <Footer />
            </main>
            {/*</ScrollerMotion>*/}
        </>
    );
}
