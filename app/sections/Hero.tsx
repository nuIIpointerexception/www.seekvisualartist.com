import Link from "next/link";
import Image from "next/image";
import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";
import HoverRectangle from "../components/container/Container";
import Logo from "../components/svg/Logo";
import AnimatedLetters from "../animations/AnimatedLetters";
import profile from "../../public/profile.webp";
import HeroBackground from "../components/background/HeroBackground";

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

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-0 lg:my-90 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className}   `}
        >
            <motion.div
              style={{
                pointerEvents: "none",
                transform: "translateY(0px) translateX(0px)",
              }}
            >
              <Logo
                width={100}
                height={100}
              />
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
