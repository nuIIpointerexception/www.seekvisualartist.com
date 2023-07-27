import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiAdobeaftereffects, SiAdobefonts,
    SiAdobeillustrator,
    SiAdobephotoshop, SiAstro, SiCinema4D, SiCplusplus, SiFigma, SiFramer, SiGit,
    SiGithub,
    SiGooglechrome, SiGooglefonts,
    SiIntellijidea, SiJavascript, SiKotlin, SiLua,
    SiNeovim, SiNextdotjs, SiReact, SiRust, SiTypescript, SiWebstorm, SiZig
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TOOLS IM USING."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.1} text="Design" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.1} stepSize={0.1} iconSize={50}>
                                <SiAdobephotoshop size={50}/>
                                <SiAdobeaftereffects size={50}/>
                                <SiAdobefonts size={50}/>
                                <SiCinema4D size={50}/>
                                <SiGooglefonts size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Frontend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiTypescript size={50}/>
                                <SiJavascript size={50}/>
                                <SiReact size={50}/>
                                <SiAstro size={50}/>
                                <SiNextdotjs size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Backend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiZig size={50}/>
                                <SiRust size={50}/>
                                <SiCplusplus size={50}/>
                                <SiLua size={50}/>
                                <SiKotlin size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Other" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiGithub size={50}/>
                                <SiGit size={50}/>
                                <SiNeovim size={50}/>
                                <SiIntellijidea size={50}/>
                                <SiWebstorm size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Tools;
