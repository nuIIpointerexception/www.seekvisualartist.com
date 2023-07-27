import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="flex h-[100vh] flex-col items-center justify-center gap-5 bg-[#0E1016] text-[#e4ded7]">
            <Image
                src="/404.gif"
                alt="Funny Meme"
                width={158}
                height={283}
                className="w-[20%] sm:w-[20%] md:w-[20%] lg:w-[20%]"
            />
            <p className="text-[25px] lowercase sm:text-[30px] md:text-[35px] lg:text-[40px]">
        Oh no! You seem to be wrong here.
            </p>
            <div>
                <Link
                    href="/"
                    className="text-[25px] lowercase sm:text-[30px] md:text-[35px] lg:text-[40px]"
                >
          Go back
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
