import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MotionDiv from "../components/motionDiv";
import { SpinLogo } from "../components/logo";
import { Page } from "../util/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Link = ({
  index,
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}) => {
  // const beforeStyle = `before:content-['${index.toString()}'] before:mr-1 before:text-primary`;
  return (
    <AnchorLink
      className={`${
        selectedPage === page ? "text-primary" : "text-slate"
      } p-4 font-robotomono transition duration-500 hover:text-primary`}
      href={`#${page}`}
      onClick={() => {
        setSelectedPage(page);
        setIsMenuToggled(false);
      }}
    >
      <span className="mr-1 text-primary">{"[" + index + "]"}.</span>
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
          page={Page.Projects}
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
      className={`fixed left-0 top-0 z-40 w-full bg-gray bg-gray-transparent-blur py-[2.5vh] duration-500 ease-in-out
        ${
          // TODO: mobile hide bavbar when y = 0 due to mobile browser
          showNavBar || mouseAtTop || y === 0
            ? "translate-y-0"
            : "-translate-y-full"
        } 
        ${y === 0 ? "shadow-none" : "shadow-md"}`}
    >
      <div className="mx-auto flex w-11/12 items-center justify-between">
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
              <FontAwesomeIcon
                className="h-8 w-8 p-2 text-primary"
                icon={faBars}
              />
            </button>
          </MotionDiv>
        )}
      </div>
      <div
        className={`fixed right-0 top-0 h-screen w-screen bg-transparent blur
          ${!isAboveSmallScreens && isMenuToggled ? "visible" : `invisible`}`}
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      ></div>
      {/* MOBILE MENU POPUP */}
      {
        <div
          className={`fixed right-0 top-0 h-[150vh] w-[66%] overflow-hidden 
                      bg-bgc-light duration-300 ease-in-out
          ${
            !isAboveSmallScreens && isMenuToggled
              ? "translate-x-0"
              : `translate-x-full`
          }`}
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end pr-8 pt-[3vh]">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FontAwesomeIcon
                className="h-9 w-9 p-2 text-primary"
                icon={faXmark}
              />
            </button>
          </div>
          {/* MENU ITEMS */}
          <LinkGroup
            className={
              "top-0 my-12 flex h-2/5 flex-col items-center justify-between text-xl text-slate"
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
