import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/motionDiv";
import profilePicture from "../assets/profile-picture.jpg";
import SectionTitle from "../components/sectionTitle";
import { aboutSectionContent } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const TechTerm = ({ children }) => {
  return (
    <span className="mr-3 mt-2 rounded-md bg-bgc-light p-1 text-light-slate">
      {children}
    </span>
  );
};

const BulletPoint = ({ title, items }) => {
  return (
    <div>
      <div className="mr-2 inline-block">
        <FontAwesomeIcon
          className="mr-1 text-lg inline-block text-primary"
          icon={faCode}
        />
        <span className="text-primary">{title}</span>
      </div>
      <div className="flex flex-wrap">
        {items.map((item) => {
          return <TechTerm key={item}>{item}</TechTerm>;
        })}
      </div>
    </div>
  );
};

const ProfilePicture = () => {
  return (
    <div className="flex w-[90%] max-w-[380px] flex-col opacity-80 shadow-window-shadow transition duration-500 hover:opacity-90 md:w-full">
      <div className="inline-flex h-[30px] w-full flex-1 rounded-t-lg border border-primary bg-primary">
        <div className="m-[6px] rounded-xl border-[8px] text-[#ff5f56]"></div>
        <div className="m-[6px] rounded-xl border-[8px] text-[#ffbd2e]"></div>
        <div className="m-[6px] rounded-xl border-[8px] text-[#27c93f]"></div>
      </div>
      <div className="flex aspect-[3/4] max-h-[500px] w-full flex-col justify-center rounded-b-lg border border-primary bg-light-slate">
        <img
          className="m-[10px] rounded-lg md:m-[20px] md:transition md:duration-500 md:hover:scale-110"
          alt="profile"
          src={profilePicture}
        />
      </div>
    </div>
  );
};

const AboutSection = ({ setSelectedPage }) => {
  return (
    <motion.div
      className="mx-auto md:w-5/6 "
      onViewportEnter={() => setSelectedPage(Page.About)}
      viewport={{ amount: 0.7 }}
    >
      <section
        id={Page.About}
        className="justify-centertext-left flex flex-col pb-32 pt-4 md:pb-64"
      >
        {/* SECTION TITLE */}
        <MotionDiv delay={0.2} duration={0.5} y1={50} y2={0}>
          <SectionTitle
            index={1}
            title={aboutSectionContent.sectionTitle}
          ></SectionTitle>
        </MotionDiv>
        <MotionDiv delay={0.5} duration={0.5} y1={50} y2={0}>
          <div className="gap-16 sm:flex sm:h-full sm:justify-between">
            {/* LEFT */}
            <div className="z-30 basis-3/5">
              <div className="flex flex-col font-opensans text-slate md:max-w-3xl">
                {/* Intro */}
                <p className="mb-4">{aboutSectionContent.intro}</p>
                {/* Skills section intro */}
                <p className="mb-2">{aboutSectionContent.skillIntro}</p>
                {/* Skills */}
                <ul className="font-robotomono">
                  {aboutSectionContent.skills.map((item) => {
                    return (
                      <li key={item.title} className="mb-4">
                        <BulletPoint
                          title={`${item.title}: `}
                          items={item.items}
                        ></BulletPoint>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* RIGHT */}
            <div className="z-10 mt-12 flex h-full basis-2/5 justify-center sm:mt-0 sm:flex-col">
              <ProfilePicture />
            </div>
          </div>
        </MotionDiv>
      </section>
    </motion.div>
  );
};

export default AboutSection;
