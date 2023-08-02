import React from "react";
import { motion } from "framer-motion";
import { Page } from "../util/page";
import MotionDiv from "../components/MotionDiv";
import SectionTitle from "../components/SectionTitle";
import useMediaQuery from "../hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const experienceSectionContent = {
  sectionTitle: "My Journey",
  timelineItems: [
    {
      icon: "work",
      title: "Software Engineer",
      date: "March 2022 - Present",
      company: "Microsoft",
      bulletPoints: [
        `Contributed to Microsoft Teams front-end development using TypeScript and React, focusing on enhancing the user interface and experience.`,
        `Created a desktop application that simplified the configuration process of conference room devices through USB communication`,
        `Developed a Python-based automation test framework to validate core features on intelligent cameras.`,
        `Played a key role in embedded system engineering, encompassing firmware development and deployment`,
      ],
    },
    {
      icon: "education",
      title: "AWS Certified Cloud Practitioner",
      date: "June 2023",
      company: "AWS",
      bulletPoints: [
        `Validation Number: 1JH9V0GCX24QQJSD`,
        `Foundational, high-level understanding of AWS Cloud, services, and terminology.`,
      ],
    },
    {
      icon: "education",
      title: "Bachelor Degree",
      date: "August 2021",
      company: "University of Washington",
      bulletPoints: [
        `Bachelor of Computer Science and Systems`,
        `Minor in Mathematics, Algorithms.`,
        `GPA: 3.74`,
      ],
    },
  ],
};

const ExperienceSection = ({ setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <motion.div
      className="mx-auto"
      onViewportEnter={() => {
        setSelectedPage(Page.Experience);
      }}
      viewport={{ amount: 0.5 }}
    >
      <section id={Page.Experience} className="py-32 md:py-52">
        <MotionDiv className="mb-4" delay={0.2} duration={0.4} y1={50} y2={0}>
          <SectionTitle
            index={2}
            title={experienceSectionContent.sectionTitle}
            isCenter={isDesktop ? true : false}
          />
        </MotionDiv>
        <div className="container mx-auto h-full w-full py-4 sm:py-10 md:p-10">
          <div className="relative h-full overflow-hidden">
            {/* Timeline */}
            <div className="absolute left-[20px] h-[20vh] w-[2px] bg-cyan bg-gradient-to-t from-cyan to-gray md:left-1/2"></div>
            <div className="absolute left-[20px] top-[20vh] h-full w-[2px] bg-cyan md:left-1/2"></div>
            <div className="absolute bottom-0 left-[20px] h-[20vh] w-[2px] bg-cyan bg-gradient-to-b from-cyan to-gray md:left-1/2"></div>

            {/* Timeline Items */}
            <div className="my-20">
              {experienceSectionContent.timelineItems.map((item, index) => {
                const isLeft = index % 2 !== 0;
                return (
                  <div
                    key={item.title}
                    className={`mb-10 flex w-full items-center md:justify-between ${
                      isLeft && "md:flex-row-reverse"
                    }`}
                  >
                    {/* Blank space */}
                    {isDesktop && <div className="order-1 w-5/12"></div>}
                    {/* Dot */}
                    <motion.div
                      className="z-20 order-1 flex h-10 w-10 items-center rounded-full bg-cyan shadow-xl"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 1 }}
                      transition={{
                        delay: 0.4,
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                      variants={{
                        hidden: { opacity: 0.5, scale: 0 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                    >
                      {/* <h1 class="m-auto font-semibold text-gray">{index}</h1> */}
                      {item.icon === "work" ? (
                        <FontAwesomeIcon
                          className="m-auto rounded-lg bg-cyan text-2xl text-gray"
                          icon={faBriefcase}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="m-auto rounded-lg bg-cyan text-2xl text-gray"
                          icon={faUserGraduate}
                        />
                      )}
                    </motion.div>
                    {/* Container */}
                    <MotionDiv
                      className="order-1 ml-4 w-[calc(100%-60px)] rounded-lg bg-navy px-4 py-2 font-opensans text-light-slate shadow-xl sm:px-6 sm:py-4 md:ml-0 md:w-5/12"
                      delay={0.4}
                      duration={0.4}
                      y1={50}
                      y2={0}
                    >
                      <h3 className="font-bold sm:text-lg">
                        {item.title} -{" "}
                        <span className="text-cyan">{item.company}</span>
                      </h3>
                      <h2 className="mb-3 text-sm italic text-slate">
                        {item.date}
                      </h2>
                      <ul className="ml-4 list-outside list-disc text-slate">
                        {item.bulletPoints.map((content, index) => {
                          return (
                            <li key={`${item.title}_${index}`} className="mb-2">
                              {content}
                            </li>
                          );
                        })}
                      </ul>
                    </MotionDiv>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ExperienceSection;
