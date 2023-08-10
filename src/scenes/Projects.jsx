import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/MotionDiv";
import SectionTitle from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class ProjectInfo {
  constructor(
    title,
    description,
    imageUrl,
    techTerms,
    githubLink,
    externalLink,
  ) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.techTerms = techTerms;
    this.githubLink = githubLink;
    this.externalLink = externalLink;
  }
}

const projectSectionContent = {
  sectionTitle: "Projects",
  subSectionTitle: "Other Projects",
  highlightedProjects: [
    new ProjectInfo(
      "Portfolio Website",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "bg-project_0",
      [
        "JavaScript",
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "FontAwesome",
        "Netlify",
      ],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectInfo(
      "Dummy Project Holder",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "bg-project_1",
      [
        "JavaScript",
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "FontAwesome",
        "Netlify",
      ],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectInfo(
      "Dummy Project Holder",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "bg-project_1",
      [
        "JavaScript",
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "FontAwesome",
        "Netlify",
      ],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
  ],
  projects: [
    new ProjectInfo(
      "Portfolio Website",
      "An aesthetically designed portfolio website showcasing my creative journey and professional accomplishments.",
      null,
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectInfo(
      "Automation Framework",
      "Daily Automation test to validate intelligent camera features.",
      null,
      ["Python", "cv2", "pyautogui"],
      null,
      null,
    ),
    new ProjectInfo(
      "Portfolio Website",
      "An aesthetically designed portfolio website showcasing my creative journey and professional accomplishments.",
      null,
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectInfo(
      "Portfolio Website",
      "An aesthetically designed portfolio website showcasing my creative journey and professional accomplishments.",
      null,
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectInfo(
      "Portfolio Website",
      "An aesthetically designed portfolio website showcasing my creative journey and professional accomplishments.",
      null,
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectInfo(
      "Portfolio Website",
      "An aesthetically designed portfolio website showcasing my creative journey and professional accomplishments.",
      null,
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
  ],
};

const HighlightedProject = ({ isDesktop, projectInfo, index }) => {
  const isRight = index % 2 === 1;
  const imageCss = isDesktop
    ? `${isRight ? "before:left-0" : "before:right-0"} before:w-[60%]`
    : "before:left-0 before:w-full";

  return (
    <div
      className={`${
        isRight && isDesktop && "flex justify-end"
      } relative z-10 w-full rounded-lg shadow-xl transition duration-300 before:absolute before:top-0 
      before:z-0 before:h-full before:rounded-lg ${imageCss} before:${
        projectInfo.imageUrl
      } before:bg-cover before:bg-fixed before:bg-center before:bg-no-repeat before:brightness-[30%]
      before:transition before:duration-300 before:content-[''] hover:text-primary before:hover:brightness-[80%]
      md:shadow-none
      `}
    >
      <div
        className={`${
          isRight && isDesktop ? "text-right md:pr-0" : "md:pl-0"
        } flex flex-col gap-4 rounded-lg p-6 backdrop-blur-sm md:w-[80%] md:p-20 md:backdrop-blur-none`}
      >
        <a
          href={projectInfo?.externalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="font-opensans text-2xl font-bold xs:text-3xl">
            {projectInfo.title}
          </h1>
        </a>
        <p className="mb-10 text-slate xs:text-xl">{projectInfo.description}</p>
        <div className="font-robotomono text-sm text-slate">
          {projectInfo.techTerms.map((term) => {
            return <span className="mr-4">{term}</span>;
          })}
        </div>
        <div className="text-slate">
          {projectInfo.githubLink && (
            <a
              href={projectInfo.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="mr-6 text-2xl hover:text-primary"
                icon={faGithub}
              />
            </a>
          )}
          {projectInfo.externalLink && (
            <a
              href={projectInfo.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="mr-6 text-2xl hover:text-primary"
                icon={faUpRightFromSquare}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Project = ({ projectInfo }) => {
  return (
    <div
      className={`project-folder relative m-auto mt-10 h-64 w-full max-w-sm rounded-b-lg rounded-tr-lg border-2 border-bgc-light bg-bgc-light p-5 shadow-xl 
      before:absolute before:bottom-[calc(100%+2px)] before:left-[-2px] before:h-6 before:w-[40%] before:rounded-t-lg before:border-2 before:border-primary before:bg-primary  before:brightness-50 before:content-[''] 
      hover:border-primary hover:text-primary before:hover:border-primary before:hover:brightness-100`}
    >
      <div className="flex h-full w-full flex-col justify-between text-left">
        <div>
          <h1 className="font-opensans text-2xl font-bold">
            {projectInfo.title}
          </h1>
          <p className="text-slate">{projectInfo.description}</p>
        </div>
        <div className="bottom-0 right-0 flex flex-col gap-4 text-right text-slate">
          <div className="font-robotomono text-sm text-slate">
            {projectInfo.techTerms.map((term) => {
              return <span className="mr-4">{term}</span>;
            })}
          </div>
          <div>
            {projectInfo.githubLink && (
              <a
                href={projectInfo.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mr-4 text-2xl hover:text-primary"
                  icon={faGithub}
                />
              </a>
            )}
            {projectInfo.externalLink && (
              <a
                href={projectInfo.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mr-4 text-2xl hover:text-primary"
                  icon={faUpRightFromSquare}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ isDesktop, setSelectedPage }) => {
  const maxProjects = projectSectionContent.projects.length;
  const initialDisplayProjects = isDesktop ? 6 : 3;
  const [displayedProjects, setDisplayProjects] = useState(
    initialDisplayProjects,
  );

  const toggleShowMore = () => {
    setDisplayProjects(displayedProjects + 3);
  };

  return (
    <motion.div
      className="mx-auto"
      onViewportEnter={() => {
        setSelectedPage(Page.Projects);
      }}
      viewport={{ amount: 0.2 }}
    >
      <section id={Page.Projects} className="pt-4">
        <MotionDiv className="mb-4" delay={0.2} duration={0.4} y1={50} y2={0}>
          <SectionTitle
            index={3}
            title={projectSectionContent.sectionTitle}
            isCenter={isDesktop ? true : false}
          />
        </MotionDiv>

        {/* Highlighted Projects Section */}
        <div className="mx-auto my-10 flex w-full flex-col justify-center gap-10 md:my-28 md:max-w-[90%] md:gap-28">
          {projectSectionContent.highlightedProjects.map(
            (projectInfo, index) => {
              return (
                <MotionDiv delay={0.1 * index} duration={0.5} y1={50} y2={0}>
                  <HighlightedProject
                    isDesktop={isDesktop}
                    projectInfo={projectInfo}
                    index={index}
                  />
                </MotionDiv>
              );
            },
          )}
        </div>

        {/* Other Projects Section */}
        <h3 className="mb-6 text-center font-robotomono text-3xl font-semibold tracking-tight text-light-slate">
          {projectSectionContent.subSectionTitle}
        </h3>
        <div className="mx-auto grid max-w-[100%] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectSectionContent.projects
            .slice(0, displayedProjects)
            .map((projectInfo, index) => {
              return (
                <MotionDiv delay={0.2 * index} duration={0.5} y1={50} y2={0}>
                  <Project projectInfo={projectInfo} />
                </MotionDiv>
              );
            })}
        </div>
        {displayedProjects < maxProjects && (
          <div className="mt-10 flex justify-center">
            <button
              className="rounded-lg border-2 border-primary p-4 text-center font-robotomono text-primary hover:animate-pulse-slow hover:bg-primary hover:text-gray"
              onClick={toggleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default ProjectsSection;
