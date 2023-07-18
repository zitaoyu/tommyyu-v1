import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MotionDiv from "./MotionDiv";
import { SpinLogo } from "./Logo";
import { Page } from "../util/page";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

const Link = ({
  index,
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}) => {
  // const beforeStyle = `before:content-['${index.toString()}'] before:mr-1 before:text-cyan`;
  return (
    <AnchorLink
      className={`${
        selectedPage === page ? "text-cyan" : "text-slate"
      } font-robotomono hover:text-cyan transition duration-500 p-4`}
      href={`#${page}`}
      onClick={() => {
        setSelectedPage(page);
        setIsMenuToggled(false);
      }}
    >
      <span className="text-cyan mr-1">{"[" + index + "]"}.</span>
      {page.charAt(0).toUpperCase() + page.slice(1)}
    </AnchorLink>
  );
};

const LinkGroup = ({
  className,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled = () => {},
}) => {
  return (
    <div className={className}>
      <MotionDiv delay={0} duration={0.4} y1={-20} y2={0}>
        <Link
          index={0}
          page={Page.Home}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          setIsMenuToggled={setIsMenuToggled}
        />
      </MotionDiv>
      <MotionDiv delay={0.2} duration={0.4} y1={-20} y2={0}>
        <Link
          index={1}
          page={Page.About}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          setIsMenuToggled={setIsMenuToggled}
        />
      </MotionDiv>
      <MotionDiv delay={0.4} duration={0.4} y1={-20} y2={0}>
        <Link
          index={2}
          page={Page.Experience}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          setIsMenuToggled={setIsMenuToggled}
        />
      </MotionDiv>
      <MotionDiv delay={0.6} duration={0.4} y1={-20} y2={0}>
        <Link
          index={3}
          page={Page.Work}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          setIsMenuToggled={setIsMenuToggled}
        />
      </MotionDiv>
      <MotionDiv delay={0.8} duration={0.4} y1={-20} y2={0}>
        <Link
          index={4}
          page={Page.Contact}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          setIsMenuToggled={setIsMenuToggled}
        />
      </MotionDiv>
    </div>
  );
};

const NavBar = ({ selectedPage, setSelectedPage }) => {
  const [y, setY] = useState(0);
  const [mouseAtTop, setMouseAtTop] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const updateNavBar = () => {
    const windowY = window.scrollY;
    if (showNavBar && y < windowY && windowY !== 0 && !isMenuToggled) {
      setShowNavBar(false);
    } else if (!showNavBar && y > windowY) {
      setShowNavBar(true);
    }
    setY(windowY);
  };

  const handleMouseMove = (event) => {
    let y = event.clientY;
    if (y < 80) {
      setMouseAtTop(true);
    } else if (mouseAtTop && y > 112) {
      setMouseAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateNavBar);
    if (isAboveSmallScreens) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("scroll", updateNavBar);
      if (isAboveSmallScreens) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  });

  return (
    <nav
      className={`fixed w-full left-0 top-0 py-[2.5vh] z-40 bg-gray ease-in-out duration-500 bg-gray-transparent-blur
        ${
          // TODO: mobile hide bavbar when y = 0 due to mobile browser
          showNavBar || mouseAtTop || y === 0
            ? "translate-y-0"
            : "-translate-y-full"
        } 
        ${y === 0 ? "shadow-none" : "shadow-md"}`}
    >
      <div className="flex justify-between items-center mx-auto w-11/12">
        <SpinLogo />
        {isAboveSmallScreens ? (
          <LinkGroup
            className={`flex justify-between`}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
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
          className={`fixed right-0 top-0 h-[150vh] bg-navy w-[66%] 
                      ease-in-out duration-300
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
              "top-0 flex flex-col items-center justify-between my-12 h-2/5 text-xl text-slate"
            }
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setIsMenuToggled={setIsMenuToggled}
          />
        </div>
      }
    </nav>
  );
};

export default NavBar;
