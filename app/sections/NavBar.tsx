"use client";
import Link from "next/link";
import NavBarContainer from "../components/container/NavBarContainer";

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
    <nav className="nowrap fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
      <NavBarContainer
        width="100%"
        height="50px"
        color="rgba(255, 255, 255, 0.1)"
        borderRadius={10}
        top="0px"
        left="0px"
        angle={0}
      >
        <nav
          className="nowrap fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]"
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
            <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
              HOME
            </h4>
          </Link>

          <Link
            href="#about"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to About Section"
          >
            <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
              ABOUT
            </h4>
          </Link>

          <Link
            href="#work"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Work Section"
          >
            <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
              WORK
            </h4>
          </Link>

          <Link
            href="#contact"
            data-blobity-magnetic="false"
            onClick={handleScroll}
            aria-label="Scroll to Contact Section"
          >
            <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
              CONTACT
            </h4>
          </Link>
        </nav>
      </NavBarContainer>
    </nav>
  );
};

export default NavBar;
