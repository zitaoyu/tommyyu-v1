import React from "react";
import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/MotionDiv";
import SectionTitle from "../components/SectionTitle";
import useMediaQuery from "../hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectPicture from "../assets/dummy_project.jpg";

class ProjectItem {
  constructor(title, description, image, techTerms, githubLink, externalLink) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.techTerms = techTerms;
    this.githubLink = githubLink;
    this.externalLink = externalLink;
  }
}

const projectSectionContent = {
  sectionTitle: "Projects",
  subSectionTitle: "Other Projects",
  highlightedProjects: [
    new ProjectItem("Project 1", "Description of Project 1", projectPicture, [
      "JS",
      "React",
    ]),
    new ProjectItem("Project 2", "Description of Project 2", projectPicture, [
      "JS",
      "React",
    ]),
    new ProjectItem("Project 2", "Description of Project 2", projectPicture, [
      "JS",
      "React",
    ]),
  ],
  projects: [
    new ProjectItem(
      "Portfolio Website",
      "An aesthetically designed portfolio website showcasing my creative journey and professional accomplishments.",
      null,
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectItem(
      "Automation Framework",
      "Daily Automation test to validate intelligent camera features.",
      null,
      ["Python", "cv2", "pyautogui"],
      null,
      null,
    ),
    new ProjectItem(
      "Portfolio Website",
      "An aesthetically designed portfolio website showcasing my creative journey and professional accomplishments.",
      null,
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectItem(
      "Portfolio Website",
      "An aesthetically designed portfolio website showcasing my creative journey and professional accomplishments.",
      null,
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectItem(
      "Portfolio Website",
      "An aesthetically designed portfolio website showcasing my creative journey and professional accomplishments.",
      null,
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
    new ProjectItem(
      "Portfolio Website",
      "An aesthetically designed portfolio website showcasing my creative journey and professional accomplishments.",
      null,
      ["JS", "React", "Framer Motion"],
      "https://github.com/zitaoyu/tommyyu-v1-example",
      "https://zitaoyu.github.io/tommyyu-v1-example/",
    ),
  ],
};

const HighlightedProject = () => {
  return (
    <MotionDiv
      delay={0.2}
      duration={0.5}
      y1={50}
      y2={0}
      className="w-full min-h-[500px] rounded-lg shadow-xl bg-project_1 bg-cover bg-no-repeat brightness-[40%]"
    ></MotionDiv>
  );
};

const Project = ({
  title,
  description,
  techTerms = [],
  githubLink = null,
  externalLink = null,
}) => {
  return (
    <div
      className={`project-folder relative m-auto mt-10 h-64 w-full max-w-sm rounded-b-lg rounded-tr-lg bg-bgc-light p-5 shadow-xl border-2 border-bgc-light 
      hover:border-primary hover:text-primary 
      before:absolute before:bottom-[calc(100%+2px)] before:left-[-2px] before:h-6 before:w-[40%] before:rounded-t-lg before:bg-primary  before:content-[''] 
      before:brightness-50 before:hover:brightness-100 before:border-2 before:border-primary before:hover:border-primary`}
    >
      <div className="flex h-full w-full flex-col justify-between text-left hover:left-[-2px] hover:top-[-2px]">
        <div>
          <h1 className="font-opensans text-2xl font-bold">{title}</h1>
          <p className="text-slate">{description}</p>
        </div>
        <div className="bottom-0 right-0 flex flex-col gap-4 text-right text-slate">
          <div className="font-robotomono text-sm text-slate">
            {techTerms.map((term) => {
              return <span className="mr-4">{term}</span>;
            })}
          </div>
          <div className="">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="mr-4 text-2xl hover:text-primary"
                  icon={faGithub}
                />
              </a>
            )}
            {externalLink && (
              <a href={externalLink} target="_blank" rel="noopener noreferrer">
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

const ProjectsSection = ({ setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 1060px)");

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
        <div className="max-w-[90%] mx-auto my-10 flex flex-col justify-center gap-10">
          {projectSectionContent.highlightedProjects.map((item, index) => {
            return <HighlightedProject />;
          })}
        </div>

        {/* Other Projects Section */}
        <h3 className="mb-6 text-center font-robotomono text-3xl font-semibold tracking-tight text-light-slate">
          {projectSectionContent.subSectionTitle}
        </h3>
        <div className="mx-auto grid max-w-[100%] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectSectionContent.projects.map((project, index) => {
            return (
              <MotionDiv delay={0.2 * index} duration={0.5} y1={50} y2={0}>
                <Project
                  title={project.title}
                  description={project.description}
                  techTerms={project.techTerms}
                  githubLink={project.githubLink}
                  externalLink={project.externalLink}
                />
              </MotionDiv>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsSection;
