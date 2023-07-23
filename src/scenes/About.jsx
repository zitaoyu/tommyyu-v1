import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/MotionDiv";
import profilePicture from "../assets/profile-picture.jpg";

const TechTerm = ({ children }) => {
  return (
    <span className="mr-3 mt-2 rounded-md bg-navy p-1 text-light-slate">
      {children}
    </span>
  );
};

const BulletPoint = ({ title, items }) => {
  return (
    <div>
      <div className="mr-2 inline-block">
        <svg
          className="mr-1 inline-block h-6 w-6 -translate-y-[2px] fill-none stroke-cyan stroke-2"
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
    <div className="flex w-[90%] max-w-[380px] flex-col opacity-80 shadow-window-shadow transition duration-500 hover:scale-105 hover:opacity-90 md:w-full">
      <div className="inline-flex h-[30px] w-full flex-1 rounded-t-lg border border-cyan bg-cyan">
        <div className="m-[6px] rounded-xl border-[8px] text-[#ff5f56]"></div>
        <div className="m-[6px] rounded-xl border-[8px] text-[#ffbd2e]"></div>
        <div className="m-[6px] rounded-xl border-[8px] text-[#27c93f]"></div>
        {/* <span className="text-sm text-gray font-robotomono m-auto">
          profile_picture.jpeg
        </span> */}
      </div>
      <div className="flex aspect-[3/4] max-h-[500px] w-full flex-col justify-center rounded-b-lg border border-cyan bg-light-slate">
        <img
          className="m-auto h-[85%] w-5/6 rounded-lg"
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
      className="mx-auto md:min-h-[90vh] md:w-5/6"
      onViewportEnter={() => setSelectedPage(Page.About)}
      viewport={{ amount: 0.7 }}
    >
      <section
        id={Page.About}
        className="gap-16 py-10 md:flex md:h-full md:items-center md:justify-between"
      >
        {/* MAIN SECTION */}
        <div className="bg-red z-30 basis-3/5 ss-max-h:mt-32">
          <MotionDiv delay={0.5} duration={0.5} y1={50} y2={0}>
            <h3 className="mb-4 font-robotomono text-3xl font-semibold text-light-slate sm:text-4xl md:mb-6 md:text-5xl md:tracking-tight">
              <span className="mr-1 text-cyan">[1].</span>About Me
            </h3>
            <div className="flex max-w-3xl flex-col font-opensans text-slate">
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
          <div className="z-10 mt-12 flex h-full basis-2/5 justify-center md:mt-24 md:flex-col">
            {/* PROFILE PICTURE */}
            <ProfilePicture />
          </div>
        </MotionDiv>
      </section>
    </motion.div>
  );
};

export default AboutSection;
