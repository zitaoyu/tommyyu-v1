import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/MotionDiv";
import profilePicture from "../assets/profile-picture.jpg";

const AboutSection = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <motion.div
      className="md:h-full md:w-5/6 mx-auto"
      amount="some"
      onViewportEnter={() => setSelectedPage(Page.About)}
    >
      <section
        id={Page.About}
        className="md:flex md:justify-between md:items-center md:h-full md:py-[15%] gap-16 py-10"
      >
        {/* MAIN SECTION */}
        <div className="z-30 basis-3/5 mt-12 md:mt-32 bg-red">
          <MotionDiv duration={0.4} y1={50} y2={0}>
            <h3 className="md:mb-12 mb-8 md:text-5xl sm:text-4xl text-2xl text-light-slate font-opensans font-bold">
              <span className="text-cyan mr-1">[1]. </span>About Me
            </h3>
            <div className="flex flex-col gap-6 text-slate font-opensans max-w-3xl">
              <p>
                I'm a passionate software engineer specializing in crafting web
                applications with exceptional user experiences and captivating
                graphics. From designing seamless interfaces to implementing
                cutting-edge technologies, I'm dedicated to creating digital
                wonders that leave a lasting impression.
              </p>
              <p>
                I'm a passionate software engineer specializing in crafting web
                applications with exceptional user experiences and captivating
                graphics. From designing seamless interfaces to implementing
                cutting-edge technologies, I'm dedicated to creating digital
                wonders that leave a lasting impression.
              </p>
              <p>
                I'm a passionate software engineer specializing in crafting web
                applications with exceptional user experiences and captivating
                graphics. From designing seamless interfaces to implementing
                cutting-edge technologies, I'm dedicated to creating digital
                wonders that leave a lasting impression.
              </p>
            </div>
          </MotionDiv>
        </div>

        <div className="basis-2/5 z-10 mt-16 md:mt-32 flex justify-center">
          {/* PROFILE PICTURE */}
          <div
            id="profile-pic-border"
            className={
              isAboveMediumScreen
                ? `relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
              before:w-full before:max-w-[600px] before:h-full before:border-2 
            before:border-blue before:z-[-1]`
                : ""
            }
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-150 transition duration-500 z-10 
                w-full max-w-[400px] md:max-w-lg"
              src={profilePicture}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
