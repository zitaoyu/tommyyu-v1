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
      "url('./assets/dummy_project.jpg')",
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectInfo(
      "Portfolio Website",
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      "url('./assets/dummy_project.jpg')",
      ["JS", "React", "Framer Motion"],
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

const HighlightedProject = ({ projectInfo }) => {
  return (
    <MotionDiv
      delay={0.2}
      duration={0.5}
      y1={50}
      y2={0}
      className={`relative z-10 w-full rounded-lg p-10 shadow-xl transition duration-300 before:absolute before:left-0 before:top-0
                  before:z-0 before:h-full before:w-full before:rounded-lg 
                  md:p-20 before:bg-[${projectInfo.imageUrl}] before:bg-cover before:bg-no-repeat
                  before:brightness-[30%] before:content-[''] hover:text-primary`}
    >
      <div className="relative flex flex-col gap-4 rounded-lg backdrop-blur-sm">
        <h1 className="font-opensans text-2xl font-bold xs:text-3xl">
          {projectInfo.title}
        </h1>
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
    </MotionDiv>
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
      <section id={Page.Projects} className="py-32 md:py-52">
        <MotionDiv className="mb-4" delay={0.2} duration={0.4} y1={50} y2={0}>
          <SectionTitle
            index={3}
            title={projectSectionContent.sectionTitle}
            isCenter={isDesktop ? true : false}
          />
        </MotionDiv>

        {/* Highlighted Projects Section */}
        <div className="mx-auto my-10 flex w-full flex-col justify-center gap-10 md:max-w-[90%]">
          {projectSectionContent.highlightedProjects.map((projectInfo) => {
            return <HighlightedProject projectInfo={projectInfo} />;
          })}
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
