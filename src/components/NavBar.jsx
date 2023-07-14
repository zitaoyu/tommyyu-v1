import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MotionDiv from "./MotionDiv";
import { SpinLogo } from "./Logo";
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
      <span className="text-cyan mr-1">{index}.</span>
      {page}
    </AnchorLink>
  );
};

const LinkGroup = () => {
  return (
    <div className="flex justify-between">
      <MotionDiv delay={0} duration={0.4} y1={-20} y2={0}>
        <Link index={"[0]"} page={"Home"} />
      </MotionDiv>
      <MotionDiv delay={0.2} duration={0.4} y1={-20} y2={0}>
        <Link index={"[1]"} page={"About"} />
      </MotionDiv>
      <MotionDiv delay={0.4} duration={0.4} y1={-20} y2={0}>
        <Link index={"[2]"} page={"Experience"} />
      </MotionDiv>
      <MotionDiv delay={0.6} duration={0.4} y1={-20} y2={0}>
        <Link index={"[3]"} page={"Work"} />
      </MotionDiv>
      <MotionDiv delay={0.8} duration={0.4} y1={-20} y2={0}>
        <Link index={"[4]"} page={"Contact"} />
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
    if (showNavBar && y < windowY) {
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
          <LinkGroup />
        ) : (
          <button
            className="rounded-full bg-cyan p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={menuIcon} />
          </button>
        )}
      </div>

      {/* MOBILE MENU POPUP */}
      {
        <div
          className={`fixed right-0 top-0 h-screen bg-dark-grey w-[66%] 
                      ease-in-out duration-500
                      ${
                        !isAboveSmallScreens && isMenuToggled
                          ? "translate-x-0"
                          : `translate-x-full`
                      }`}
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end pt-11 pr-8">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img alt="close-icon" className="h-8 w-8" src={closeIcon} />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="flex flex-col items-center justify-between h-1/2 gap-10 my-4 text-2xl text-slate">
            <MotionDiv delay={0} duration={0.4} y1={-20} y2={0}>
              <Link index={"[0]"} page={"Home"} />
            </MotionDiv>
            <MotionDiv delay={0.2} duration={0.4} y1={-20} y2={0}>
              <Link index={"[1]"} page={"About"} />
            </MotionDiv>
            <MotionDiv delay={0.4} duration={0.4} y1={-20} y2={0}>
              <Link index={"[2]"} page={"Experience"} />
            </MotionDiv>
            <MotionDiv delay={0.6} duration={0.4} y1={-20} y2={0}>
              <Link index={"[3]"} page={"Work"} />
            </MotionDiv>
            <MotionDiv delay={0.8} duration={0.4} y1={-20} y2={0}>
              <Link index={"[4]"} page={"Contact"} />
            </MotionDiv>
          </div>
        </div>
      }
    </nav>
  );
};

export default NavBar;
