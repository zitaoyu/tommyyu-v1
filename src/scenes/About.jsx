import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/MotionDiv";
import profilePicture from "../assets/profile-picture.jpg";

const TechTerm = ({ children }) => {
  return (
    <span className="text-light-slate bg-navy rounded-md p-1 mr-3 mt-2">
      {children}
    </span>
  );
};

const BulletPoint = ({ title, items }) => {
  return (
    <div>
      <div className="inline-block mr-2">
        <svg
          className="w-6 h-6 stroke-2 stroke-cyan fill-none inline-block mr-1 -translate-y-[2px]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 8L3 12L7 16" />
          <path d="M17 8L21 12L17 16" />
          <path d="M14 4L9.8589 19.4548" />
        </svg>
        <span className="text-cyan">{title}</span>
      </div>
      <div className="flex flex-wrap">
        {items.map((item) => {
          return <TechTerm>{item}</TechTerm>;
        })}
      </div>
    </div>
  );
};

const ProfilePicture = () => {
  return (
    <div className="md:w-full w-[90%] max-w-[380px] shadow-window-shadow flex flex-col opacity-80 hover:opacity-90 hover:scale-105 transition duration-500">
      <div className="h-[30px] bg-cyan border border-cyan rounded-t-lg w-full inline-flex flex-1">
        <div className="border-[8px] rounded-xl m-[6px] text-[#ff5f56]"></div>
        <div className="border-[8px] rounded-xl m-[6px] text-[#ffbd2e]"></div>
        <div className="border-[8px] rounded-xl m-[6px] text-[#27c93f]"></div>
        {/* <span className="text-sm text-gray font-robotomono m-auto">
          profile_picture.jpeg
        </span> */}
      </div>
      <div className="max-h-[500px] w-full aspect-[3/4] rounded-b-lg flex flex-col justify-center bg-light-slate border border-cyan">
        <img
          className="h-[85%] w-[85%] w-5/6 rounded-lg m-auto"
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
      className="md:min-h-[90vh] md:w-5/6 mx-auto"
      onViewportEnter={() => setSelectedPage(Page.About)}
      viewport={{ amount: 0.7 }}
    >
      <section
        id={Page.About}
        className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
      >
        {/* MAIN SECTION */}
        <div className="z-30 basis-3/5 bg-red ss-max-h:mt-32">
          <MotionDiv delay={0.5} duration={0.5} y1={50} y2={0}>
            <h3 className="md:mb-6 mb-4 md:text-5xl sm:text-4xl text-3xl text-light-slate font-robotomono font-semibold md:tracking-tight">
              <span className="text-cyan mr-1">[1].</span>About Me
            </h3>
            <div className="flex flex-col text-slate font-opensans max-w-3xl">
              <p className="mb-4">
                I'm a passionate software engineer specializing in crafting web
                applications with exceptional user experiences and captivating
                graphics. From designing seamless interfaces to implementing
                cutting-edge technologies, I'm dedicated to creating digital
                wonders that leave a lasting impression.
              </p>
              <p className="mb-2">
                Here are some of the technologies I've been working with:
              </p>
              <ul className="font-robotomono">
                <li className="mb-4">
                  <BulletPoint
                    title={"Language: "}
                    items={[
                      "JavaScript",
                      "TypeScript",
                      "CSS",
                      "Python",
                      "Java",
                      "C++",
                    ]}
                  ></BulletPoint>
                </li>
                <li className="mb-4">
                  <BulletPoint
                    title={"Framework: "}
                    items={["React", "Angular", "Tailwind CSS"]}
                  ></BulletPoint>
                </li>{" "}
                <li className="mb-4">
                  <BulletPoint
                    title={"Dev Tools: "}
                    items={["AWS", "Azure DevOps", "Linux"]}
                  ></BulletPoint>
                </li>
              </ul>
            </div>
          </MotionDiv>
        </div>

        <MotionDiv delay={0.7} duration={0.5} x1={50} x2={0}>
          <div className="basis-2/5 z-10 mt-12 md:mt-24 flex md:flex-col justify-center h-full">
            {/* PROFILE PICTURE */}
            <ProfilePicture />
          </div>
        </MotionDiv>
      </section>
    </motion.div>
  );
};

export default AboutSection;
