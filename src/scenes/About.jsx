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
          stroke-linecap="round"
          stroke-linejoin="round"
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
    <div class="bg-cyan md:h-[60%] min-h-[400px] w-full max-w-[300px] rounded-lg shadow-window-shadow hover:scale-110 transition transition duration-500">
      <div class="h-[25px] inline-flex">
        <div class="border-[8px] rounded-xl m-[6px] text-[#ff5f56]"></div>
        <div class="border-[8px] rounded-xl m-[6px] text-[#ffbd2e]"></div>
        <div class="border-[8px] rounded-xl m-[6px] text-[#27c93f]"></div>
      </div>
      {/* <div className="h-[2px] w-full bg-cyan"></div> */}
      <div
        class="bg-slate h-[calc(100%-25px)] w-full rounded-b-lg flex flex-col justify-center"
        contenteditable
      >
        <img
          className="h-5/6 w-5/6 rounded-lg m-auto"
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
      className="md:h-full md:w-5/6 mx-auto"
      onViewportEnter={() => setSelectedPage(Page.About)}
      viewport={{ amount: 0.7 }}
    >
      <section
        id={Page.About}
        className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
      >
        {/* MAIN SECTION */}
        <div className="z-30 basis-3/5 bg-red ss-max-h:mt-32">
          <MotionDiv duration={0.4} y1={50} y2={0}>
            <h3 className="md:mb-6 mb-4 md:text-5xl sm:text-4xl text-2xl text-light-slate font-robotomono font-semibold">
              <span className="text-cyan mr-1">[1].</span>About Me
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
              <ul className="font-robotomono">
                <li className="mb-4">
                  <BulletPoint
                    title={"Language: "}
                    items={["JavaScript", "TypeScript", "CSS", "Python", "C++"]}
                  ></BulletPoint>
                </li>
                <li className="mb-4">
                  <BulletPoint
                    title={"Framework: "}
                    items={["React", "Angular", "Tailwind CSS"]}
                  ></BulletPoint>
                </li>
              </ul>
            </div>
          </MotionDiv>
        </div>

        <div className="basis-2/5 z-10 mt-8 md:mt-24 flex md:flex-col justify-center h-full">
          {/* PROFILE PICTURE */}
          <ProfilePicture />
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
