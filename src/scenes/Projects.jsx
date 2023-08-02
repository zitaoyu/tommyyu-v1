import React from "react";
import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/MotionDiv";
import SectionTitle from "../components/SectionTitle";
import useMediaQuery from "../hooks/useMediaQuery";

class ProjectItem {
  constructor(title, description, image, terms) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.terms = terms;
  }
}

const projectSectionContent = {
  sectionTitle: "Projects",
  highlightedProjects: [
    new ProjectItem("Project 1", "Description of Project 1", "image1.jpg", [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 2", "Description of Project 2", "image2.jpg", [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 2", "Description of Project 2", "image2.jpg", [
      "javaScript",
      "React",
    ]),
  ],
  projects: [
    new ProjectItem("Project 3", "Description of Project 1", "image1.jpg", [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 4", "Description of Project 2", "image2.jpg", [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 4", "Description of Project 2", "image2.jpg", [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 3", "Description of Project 1", "image1.jpg", [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 4", "Description of Project 2", "image2.jpg", [
      "javaScript",
      "React",
    ]),
    new ProjectItem("Project 4", "Description of Project 2", "image2.jpg", [
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
  return <div className="m-auto h-60 w-60 rounded-lg bg-navy"></div>;
};

const ProjectsSection = ({ setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <motion.div
      className="mx-auto"
      onViewportEnter={() => {
        setSelectedPage(Page.Projects);
      }}
      viewport={{ amount: 0.7 }}
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
        <h3 className="text-center font-robotomono text-3xl font-semibold text-light-slate sm:mb-6 sm:tracking-tight">
          Other Projects
        </h3>
        <div className="my-10 grid grid-cols-2 justify-center gap-10 md:grid-cols-3">
          {projectSectionContent.projects.map((item, index) => {
            return <Project />;
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsSection;
