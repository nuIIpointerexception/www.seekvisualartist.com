import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";
import Logo from "../components/svg/Logo";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[80vh] w-full items-stretch justify-center py-0 sm:h-[90vh] md:h-[100vh]"
            id="home"
            initial="initial"
            animate="animate"
        >
            <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full mix-blend-color"></motion.div>

            <HeroBackground />

            <div className="lg:my-90 -mt-36 flex flex-col items-center justify-center sm:-mt-0 lg:-mt-2 lg:py-40 ">
                <div
                    className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
                >
                    <Logo width={100} height={100} />
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
