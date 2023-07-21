import { motion } from "framer-motion";
import { Page } from "../util/page";
import { AnchorLinkButton } from "../components/Button";
import MotionDiv from "../components/MotionDiv";

const ShapesCanvas = () => {
  return (
    <div className="h-full stroke-cyan stroke-[5px]">
      <svg
        width="500"
        height="500"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="container">
          <path
            className="opacity-30 translate-y-6"
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
        <div className="ss-max-h:mt-12 md:mt-0 max-w-screen-md sm:p-6 z-10 flex flex-col justify-start md:gap-4 gap-2">
          <MotionDiv delay={1} duration={0.4} x1={20} x2={0}>
            <h1 className="text-cyan text-base font-robotomono">
              Hello world, my name is
            </h1>
          </MotionDiv>
          <MotionDiv delay={1.2} duration={0.4} x1={20} x2={0}>
            <h2 className="text-light-slate md:text-7xl sm:text-6xl text-5xl font-opensans font-extrabold tracking-tight">
              Tommy Yu
            </h2>
          </MotionDiv>
          <MotionDiv delay={2.2} duration={0.4} x1={20} x2={0}>
            <h3 className="text-slate md:text-7xl sm:text-6xl text-4xl font-opensans font-bold tracking-tight">
              I create fun things for the web.
            </h3>
          </MotionDiv>
          <MotionDiv delay={2.4} duration={0.4} x1={20} x2={0}>
            <p className="text-slate font-opensans max-w-3xl">
              I'm a passionate software engineer specializing in crafting web
              applications with exceptional user experiences and captivating
              graphics. From designing seamless interfaces to implementing
              cutting-edge technologies, I'm dedicated to creating digital
              wonders that leave a lasting impression.
            </p>
          </MotionDiv>
          <MotionDiv delay={2.6} duration={0.4} x1={20} x2={0}>
            <div className="flex flex-wrap md:gap-10 gap-5 md:mt-8 mt-4 md:text-base text-sm">
              <AnchorLinkButton
                className={"sm:max-w-[240px] max-w-[160px] sm:px-10 px-4"}
                link={Page.About}
                onClick={() => setSelectedPage(Page.About)}
              >
                Check me out!
              </AnchorLinkButton>

              <AnchorLinkButton
                className={"sm:max-w-[240px] max-w-[160px] sm:px-10 px-5"}
                link={Page.Contact}
                onClick={() => setSelectedPage(Page.Contact)}
              >
                Contact info
              </AnchorLinkButton>
            </div>
          </MotionDiv>
        </div>
        <div className="md:visible invisible absolute z-1 right-0">
          <MotionDiv delay={3} duration={0.4} x1={20} x2={0}>
            <ShapesCanvas />
          </MotionDiv>
        </div>
      </section>
    </motion.div>
  );
};

export default LandingSection;
