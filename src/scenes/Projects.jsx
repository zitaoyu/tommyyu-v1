import React from "react";
import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/MotionDiv";
import SectionTitle from "../components/SectionTitle";
import useMediaQuery from "../hooks/useMediaQuery";
import projectPicture from "../assets/dummy_project.jpg";

class ProjectItem {
  constructor(title, description, image, techTerms, githubLink, projectLink) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.techTerms = techTerms;
    this.githubLink = githubLink;
    this.projectLink = projectLink;
  }
}

const projectSectionContent = {
  sectionTitle: "Projects",
  highlightedProjects: [
    new ProjectItem("Project 1", "Description of Project 1", projectPicture, [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 2", "Description of Project 2", projectPicture, [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 2", "Description of Project 2", projectPicture, [
      "javaScript",
      "React",
    ]),
  ],
  projects: [
    new ProjectItem("Project 3", "Description of Project 1", projectPicture, [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 4", "Description of Project 2", projectPicture, [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 4", "Description of Project 2", projectPicture, [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 3", "Description of Project 1", projectPicture, [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 4", "Description of Project 2", projectPicture, [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 4", "Description of Project 2", projectPicture, [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 4", "Description of Project 2", projectPicture, [
      "javaScript",
      "React",
    ]),
  ],
};

const HighlightedProject = () => {
  return (
    <MotionDiv
      delay={0.2}
      duration={0.5}
      y1={50}
      y2={0}
      className="h-[20vh] w-full rounded-lg bg-navy"
    ></MotionDiv>
  );
};

const Project = () => {
  return (
    <div
      className={`project-folder rounded-b-lg rounded-tr-lg mt-10 m-auto p-4 h-60 border-2 border-cyan relative 
      before:rounded-t-lg before:absolute before:w-[40%] before:content-[''] before:h-6 before:bottom-[100%] before:left-[-2px]
      before:border-2 before:border-cyan`}
    >
      <div className="w-full h-full">
        <h1>Project Name</h1>
        <p>
          dummy text dummy text dummy text dummy text dummy text dummy text
          dummy text dummy text dummy text dummy text dummy text dummy text
        </p>
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
        <div className="my-10 flex flex-col justify-center gap-10">
          {projectSectionContent.highlightedProjects.map((item, index) => {
            return <HighlightedProject />;
          })}
        </div>

        {/* Other Projects Section */}
        <h3 className="mb-6 text-center font-robotomono text-3xl font-semibold tracking-tight text-light-slate">
          Other Projects
        </h3>
        <div className="max-w-[80%] mx-auto gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projectSectionContent.projects.map((item, index) => {
            return (
              <MotionDiv delay={0.2 * index} duration={0.5} y1={50} y2={0}>
                <Project />
              </MotionDiv>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsSection;
