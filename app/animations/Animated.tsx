import React, { useEffect } from "react";
import { useAnimation, motion, Variants, Transition } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";

type AnimatedProps = {
    className?: string;
    delay?: number;
    stepSize?: number;
    iconSize?: number;
    children: React.ReactNode;
};

const animatedVariants: Variants = {
    hidden: {
        opacity: 0,
        y: "1em",
    },
    visible: {
        opacity: 1,
        y: "0em",
    },
};

const Animated: React.FC<AnimatedProps> = ({
    className,
    delay,
    stepSize = 0.1,
    iconSize = 50,
    children,
}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const transition: Transition = {
        delay: delay || 0,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
    };

    return (
        <motion.div
            className={className}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={animatedVariants}
            transition={transition}
        >
            {React.Children.map(children, (child, index) => {
                // Cast the child to an IconType to access the IconType properties
                const icon = child as React.ReactElement<IconType>;
                return (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, color: "#ff5733" }} // Modify the color when hovering
                        whileTap={{ scale: 0.9 }}
                        style={{ width: iconSize, height: iconSize }}
                        data-blobity
                        data-blobity-radius={15}
                        data-blobity-offset-x={15}
                        data-blobity-offset-y={15}
                        data-blobity-magnetic={false}
                    >
                        {icon}
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default Animated;
