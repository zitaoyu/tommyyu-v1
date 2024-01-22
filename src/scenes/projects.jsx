import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/motionDiv";
import SectionTitle from "../components/sectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectSectionContent } from "./constants";

const TechTerms = ({ terms, isRight = true }) => {
  return (
    <div
      className={`flex flex-wrap gap-4 font-robotomono text-sm text-slate ${
        isRight && "justify-end"
      }`}
    >
      {terms.map((term) => {
        return <span>{term}</span>;
      })}
    </div>
  );
};

const ProjectIcons = ({ githubLink, externalLink, isRight = true }) => {
  return (
    <div
      className={`flex flex-wrap gap-6 text-2xl text-slate ${
        isRight && "justify-end"
      }`}
    >
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="hover:text-primary" icon={faGithub} />
        </a>
      )}
      {externalLink && (
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="hover:text-primary"
            icon={faUpRightFromSquare}
          />
        </a>
      )}
    </div>
  );
};

const HighlightedProject = ({ isDesktop, projectInfo, index }) => {
  const isRight = index % 2 === 1;
  const imageCss = isDesktop
    ? `${
        isRight ? "left-0" : "right-0"
      } w-[45%] bottom-0 top-0 z-0 my-auto aspect-[4/3]`
    : "left-0 w-full h-full";

  return (
    <div
      className={`group relative z-10 w-full rounded-lg shadow-xl transition duration-300 md:shadow-none ${
        isRight && isDesktop && "flex justify-end"
      }`}
    >
      {/* Project Image */}
      <a
        href={projectInfo?.externalLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={`absolute cursor-pointer rounded-lg bg-cover bg-center brightness-[40%] 
                      transition duration-300 md:hover:brightness-[65%] ${imageCss}`}
          src={projectInfo.imageUrl}
          alt={projectInfo.imageUrl.toString()}
        />
      </a>
      {/* Prject Info Box */}
      <div
        className={`${
          isRight && isDesktop
            ? "text-right md:ml-20 md:pr-0"
            : "md:mr-20 md:pl-0"
        } flex flex-col gap-4 rounded-lg p-6 backdrop-blur-sm md:w-[65%] md:py-14 md:backdrop-blur-none`}
      >
        <a
          href={projectInfo?.externalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="font-opensans text-2xl font-bold text-primary xs:text-3xl">
            {projectInfo.title}
          </h1>
        </a>
        <p className="mb-10 text-slate transition group-hover:text-light-slate xs:text-xl">
          {projectInfo.description}
        </p>
        <TechTerms
          terms={projectInfo.techTerms}
          isRight={(isDesktop && isRight) || !isDesktop}
        />
        <ProjectIcons
          githubLink={projectInfo.githubLink}
          externalLink={projectInfo.externalLink}
          isRight={(isDesktop && isRight) || !isDesktop}
        />
      </div>
    </div>
  );
};

const Project = ({ projectInfo }) => {
  return (
    <div
      className={`project-folder relative m-auto mt-10 h-[256px] w-full max-w-sm rounded-b-lg rounded-tr-lg border-2 border-bgc-light bg-bgc-light p-5 shadow-xl 
      before:absolute before:bottom-[calc(100%+2px)] before:left-[-2px] before:h-6 before:w-[40%] before:rounded-t-lg before:border-2 before:border-primary before:bg-primary  before:brightness-50 before:content-[''] 
      hover:border-primary hover:text-primary before:hover:border-primary before:hover:brightness-100`}
    >
      <div className="flex h-full w-full flex-col justify-between text-left">
        <div>
          <h1 className="mb-2 font-opensans text-2xl font-bold">
            {projectInfo.title}
          </h1>
          <p className="text-slate">{projectInfo.description}</p>
        </div>
        <div className="bottom-0 right-0 flex flex-col gap-4 text-right text-slate">
          <TechTerms terms={projectInfo.techTerms} />
          <ProjectIcons
            githubLink={projectInfo.githubLink}
            externalLink={projectInfo.externalLink}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ isDesktop, setSelectedPage }) => {
  const maxProjects = projectSectionContent.projects.length;
  const initialDisplayProjects = isDesktop ? 6 : 3;
  const [displayedProjects, setDisplayedProjects] = useState(0);
  const [projects, setProjects] = useState(initialDisplayProjects);

  const toggleShowMore = () => {
    setDisplayedProjects(projects);
    setProjects(projects + 3);
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
        <div className="mx-auto mb-10 flex w-full flex-col justify-center gap-10 md:mb-28 md:mt-20 md:max-w-[90%] md:gap-20">
          {projectSectionContent.highlightedProjects.map(
            (projectInfo, index) => {
              return (
                <MotionDiv
                  viewAmount={isDesktop ? 0.4 : 0.25}
                  delay={0.1 * index}
                  duration={0.5}
                  y1={50}
                  y2={0}
                >
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
            .slice(0, projects)
            .map((projectInfo, index) => {
              return (
                <MotionDiv
                  viewAmount={0.2}
                  delay={isDesktop ? 0.2 * index - displayedProjects * 0.2 : 0}
                  duration={0.5}
                  y1={50}
                  y2={0}
                >
                  <Project projectInfo={projectInfo} />
                </MotionDiv>
              );
            })}
        </div>
        {projects < maxProjects && (
          <MotionDiv delay={0.4} duration={0.4} y1={50} y2={0}>
            <div className="mt-10 flex justify-center">
              <button
                className="rounded-lg border-2 border-primary p-4 text-center font-robotomono text-primary hover:animate-pulse-slow hover:bg-primary hover:text-gray"
                onClick={toggleShowMore}
              >
                {projectSectionContent.showMoreButton}
              </button>
            </div>
          </MotionDiv>
        )}
      </section>
    </motion.div>
  );
};

export default ProjectsSection;
