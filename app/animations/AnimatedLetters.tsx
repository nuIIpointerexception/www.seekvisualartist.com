import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimatedLettersProps = {
  title: string;
  style: string;
};

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ title, style }) => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("animate");
    }
    if (!inView) {
      ctrls.start("initial");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 4,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1,
      },
    },
  };

  return (
    <h1 aria-label={title}>
      <motion.span
        ref={ref}
        className="flex max-w-[500px] flex-col overflow-hidden text-center text-[96px] font-extrabold leading-[0.8em] text-[#f8fbff] sm:text-[120px] sm:leading-[0.85em] md:max-w-[900px] md:text-[155.5px] lg:text-[215px]"
      >
        {title.split(" ").map((word, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate={ctrls}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className="flex items-center justify-center overflow-hidden"
          >
            <motion.span className={style} variants={wordAnimation}>
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimatedLetters;
