import { motion } from "framer-motion";
import { Page } from "../util/page";
import { AnchorLinkButton } from "../components/button";
import MotionDiv from "../components/motionDiv";
import { landingSectionContent } from "./constants";

const ShapesCanvas = () => {
  return (
    <div className="h-full stroke-primary stroke-[5px]">
      <svg
        width="500"
        height="500"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="container">
          <path
            className="translate-y-6 opacity-30"
            id="triangle"
            d="M17.7276 159.5L100 17L182.272 159.5H17.7276Z"
          />
          <circle
            className="opacity-60"
            id="circle"
            cx="311"
            cy="99"
            r="57.5"
          />
          <rect
            className="opacity-30"
            id="reactangle"
            x="153.5"
            y="214.5"
            width="145"
            height="145"
          />
        </g>
      </svg>
    </div>
  );
};

const LandingSection = ({ setSelectedPage }) => {
  return (
    <motion.div
      className="min-h-screen"
      onViewportEnter={() => setSelectedPage(Page.Home)}
      viewport={{ amount: 0.7 }}
    >
      <section
        className="flex min-h-screen flex-col justify-center py-10 md:relative"
        id={Page.Home}
      >
        {/* Introduction Section*/}
        <div className="z-10 flex max-w-screen-md flex-col justify-start gap-2 sm:p-6 md:mt-0 md:gap-4 ss-max-h:mt-12">
          <MotionDiv delay={1} duration={0.4} x1={20} x2={0}>
            <h1 className="font-robotomono text-primary">
              {landingSectionContent.heading1}
            </h1>
          </MotionDiv>
          <MotionDiv delay={1.2} duration={0.4} x1={20} x2={0}>
            <h2 className="font-opensans text-5xl font-extrabold tracking-tight text-light-slate sm:text-6xl md:text-7xl">
              {landingSectionContent.heading2}
            </h2>
          </MotionDiv>
          <MotionDiv delay={2.2} duration={0.4} x1={20} x2={0}>
            <h3 className="font-opensans text-4xl font-bold tracking-tight text-slate sm:text-6xl md:text-7xl">
              {landingSectionContent.heading3}
            </h3>
          </MotionDiv>
          <MotionDiv delay={2.4} duration={0.4} x1={20} x2={0}>
            <p className="max-w-3xl font-opensans text-slate">
              {landingSectionContent.intro}
            </p>
          </MotionDiv>
          <MotionDiv delay={2.6} duration={0.4} x1={20} x2={0}>
            <div className="mt-4 flex flex-wrap gap-5 text-sm md:mt-8 md:gap-10 md:text-base">
              <AnchorLinkButton
                className="max-w-[160px] px-4 sm:max-w-[240px] sm:px-10"
                link={Page.About}
                onClick={() => setSelectedPage(Page.About)}
              >
                {landingSectionContent.button1}
              </AnchorLinkButton>

              <AnchorLinkButton
                className="max-w-[160px] px-5 sm:max-w-[240px] sm:px-10"
                link={Page.Contact}
                onClick={() => setSelectedPage(Page.Contact)}
              >
                {landingSectionContent.button2}
              </AnchorLinkButton>
            </div>
          </MotionDiv>
        </div>
        <div className="z-1 invisible absolute right-0 md:visible">
          <MotionDiv delay={3} duration={0.4} x1={20} x2={0}>
            <ShapesCanvas />
          </MotionDiv>
        </div>
      </section>
    </motion.div>
  );
};

export default LandingSection;
