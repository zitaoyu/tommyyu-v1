import projectImage_0 from "../assets/dummy_project.jpg";

// landing.jsx
export const landingSectionContent = {
  heading1: `Hello world, my name is`,
  heading2: `Tommy Yu`,
  heading3: `I create fun things for the web.`,
  intro: `I'm a passionate developer specializing in crafting web
          applications with exceptional user experiences and captivating
          graphics. From designing seamless interfaces to implementing
          cutting-edge technologies, I'm dedicated to creating digital
          wonders that leave a lasting impression.`,
  button1: `Check me out!`,
  button2: `Contact info`,
};

// about.jsx
export const aboutSectionContent = {
  sectionTitle: "About Me",
  intro: `Hey there, I'm Tommy! I'm a passionate developer, especially 
          interested in web applications and game development. I discovered 
          my passion for programming in my Junior year of Highschool, and I 
          love the limitless creativity of programming ever since then. In 
          my free time, you'll find me diving into new tech, cooking up fun 
          projects, and just enjoying the thrill of creating. Oh, and if I'm 
          not glued to my keyboard, I'm probably out in Paldea, hunting shiny 
          Pokémons.`,
  skillIntro: `Here are some of the technologies I've been working with:`,
  skills: [
    {
      title: `Languages`,
      items: [
        "JavaScript",
        "TypeScript",
        "CSS",
        "Python",
        "Java",
        "C++",
        "C#",
        "Golang",
        "Shell Scripting",
      ],
    },
    {
      title: `Frameworks`,
      items: ["React", "Electron.js", "Angular", "Tailwind CSS", "GraphQL"],
    },
    {
      title: `Dev Tools`,
      items: ["Netlify", "AWS", "Azure DevOps", "Unity", "Linux"],
    },
  ],
};

// experience.jsx
export const experienceSectionContent = {
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
      ],
    },
  ],
};

// projects.jsx
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

export const projectSectionContent = {
  sectionTitle: "Projects",
  subSectionTitle: "Other Projects",
  highlightedProjects: [
    new ProjectInfo(
      "Portfolio Website",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      projectImage_0,
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
      projectImage_0,
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
      projectImage_0,
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
  showMoreButton: "Show More",
};

// contact.jsx
export const contactSectionContent = {
  sectionTitle: "Contact Me",
  intro: `Since you have reached this part of the page, I want to thank you
          for checking out my page. I'm always open to new oppuntunities and
          conversations, feel free to say hello to me.`,
  button: "Say Hello",
};
