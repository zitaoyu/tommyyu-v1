import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MotionDiv from "./MotionDiv";
import { SpinLogo } from "./Logo";
import { Page } from "../util/page";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

const Link = ({ index, page }) => {
  const lowerCasePage = page.toLowerCase();
  // const beforeStyle = `before:content-['${index.toString()}'] before:mr-1 before:text-cyan`;
  return (
    <AnchorLink
      className={`font-robotomono text-slate  hover:text-cyan transition duration-500 p-4`}
      href={`#${lowerCasePage}`}
      onClick={() => {}}
    >
      <span className="text-cyan mr-1">{"[" + index + "]"}.</span>
      {page.charAt(0).toUpperCase() + page.slice(1)}
    </AnchorLink>
  );
};

const LinkGroup = ({ className }) => {
  return (
    <div className={className}>
      <MotionDiv delay={0} duration={0.4} y1={-20} y2={0}>
        <Link index={0} page={Page.Home} />
      </MotionDiv>
      <MotionDiv delay={0.2} duration={0.4} y1={-20} y2={0}>
        <Link index={1} page={Page.About} />
      </MotionDiv>
      <MotionDiv delay={0.4} duration={0.4} y1={-20} y2={0}>
        <Link index={2} page={Page.Experience} />
      </MotionDiv>
      <MotionDiv delay={0.6} duration={0.4} y1={-20} y2={0}>
        <Link index={3} page={Page.Work} />
      </MotionDiv>
      <MotionDiv delay={0.8} duration={0.4} y1={-20} y2={0}>
        <Link index={4} page={Page.Contact} />
      </MotionDiv>
    </div>
  );
};

const NavBar = () => {
  const [y, setY] = useState(0);
  const [showNavBar, setShowNavBar] = useState(true);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const updateNavBar = () => {
    const windowY = window.scrollY;
    if (showNavBar && y < windowY && !isMenuToggled) {
      setShowNavBar(false);
    } else if (!showNavBar && y > windowY) {
      setShowNavBar(true);
    }
    setY(windowY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateNavBar);
    return () => {
      window.removeEventListener("scroll", updateNavBar);
    };
  });

  return (
    <nav
      className={`fixed w-full top-0 py-6 z-40 ease-in-out duration-500 
        ${showNavBar ? "translate-y-0" : "-translate-y-full"} 
        ${y === 0 ? "shadow-none" : "shadow-md"}`}
    >
      <div className="flex justify-between items-center mx-auto w-11/12">
        <SpinLogo />
        {isAboveSmallScreens ? (
          <LinkGroup className={`flex justify-between`} />
        ) : (
          <MotionDiv delay={0} y1={-20} y2={0}>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img
                className="h-9 w-9 bg-cyan p-2 rounded-full"
                alt="menu-icon"
                src={menuIcon}
              />
            </button>
          </MotionDiv>
        )}
      </div>

      {/* MOBILE MENU POPUP */}
      {
        <div
          className={`fixed right-0 top-0 h-[100vh] bg-navy w-[66%] 
                      ease-in-out duration-500
                      ${
                        !isAboveSmallScreens && isMenuToggled
                          ? "translate-x-0 overflow-hidden"
                          : `translate-x-full`
                      }`}
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end pt-11 pr-8">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img
                alt="close-icon"
                className="h-9 w-9 bg-cyan p-2 rounded-full"
                src={closeIcon}
              />
            </button>
          </div>
          {/* MENU ITEMS */}
          <LinkGroup
            className={
              "flex flex-col items-center justify-between my-12 h-1/2 text-xl text-slate"
            }
          />
        </div>
      }
    </nav>
  );
};

export default NavBar;
