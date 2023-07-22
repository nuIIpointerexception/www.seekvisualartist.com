"use client";
import Link from "next/link";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBarWindow from "../components/container/NavBarWindow";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
  
    <nav
      className="fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto rounded-lg flex items-center justify-center gap-1 px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px] nowrap"
    >
      <NavBarWindow
              width="100%"
              height="50px"
              color="rgba(255, 255, 255, 0.1)"
              borderRadius={10}
              top="0px"
              left="0px"
              angle={0}
      >
    <nav
      className="fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto rounded-lg flex items-center justify-center gap-1 px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px] nowrap"
      style={{
        transform: "translateY(40px) translateX(0px)",
      }}
    >

        <Link
          href="#home"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Home Section"
        >
          <h4 className="py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
            HOME
          </h4>
        </Link>

        <Link
          href="#about"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to About Section"
        >
          <h4 className="py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
            ABOUT
          </h4>
        </Link>
        
        <Link
          href="#work"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Work Section"
        >
          <h4 className="py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
            WORK
          </h4>
        </Link>

        <Link
          href="#contact"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Contact Section"
        >
          <h4 className="py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
            CONTACT
          </h4>
        </Link>
        </nav>
    </NavBarWindow>
  </nav>
  );
};

export default NavBar;
