import projectImage_0 from "../assets/tommy-yu.png";
// import projectImage_1 from "../assets/sorting-visualizer.png";
import projectImage_2 from "../assets/hollow-tree-01.png";
// import projectImage_3 from "../assets/profit-tracker.png";
import projectImage_4 from "../assets/bnb.png";
import projectImage_5 from "../assets/porygondex.png";

// landing.jsx
export const landingSectionContent = {
  heading1: `Hello world, my name is`,
  heading2: `Tommy Yu`,
  heading3: `I create fun things for the web.`,
  intro: `I'm a a Full-Stack developer specializing in crafting web
          applications with exceptional user experiences and captivating
          graphics.`,
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
          my free time, I love to learn new tech, cooking up fun projects, 
          and just enjoying the thrill of creating. Oh, and if I'm not glued 
          to my keyboard, I'm probably out in Paldea, hunting shiny 
          Pokémons.`,
  skillIntro: `Here are some of the technologies I've been working with:`,
  skills: [
    {
      title: `Languages`,
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C++",
        "C#",
        "Golang",
      ],
    },
    {
      title: `Frameworks`,
      items: [
        "React",
        "Next.js",
        "Django",
        "ASP.NET",
        "Ruby on Rails",
        "Electron.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: `Dev Tools`,
      items: [
        "AWS",
        "Azure",
        "Firebase",
        "MySQL",
        "MongoDB",
        "RESTful API",
        "Linux",
        "Bash",
      ],
    },
  ],
};

// experience.jsx
export const experienceSectionContent = {
  sectionTitle: "My Work",
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
      "Bednbreakfast",
      `Bednbreakfast (Airbnb clone) is a fully functional online booking site implemented with MERN stack and other
      cloud services. Users can register account, list a place, book a place, and more. Click the link below to try 
      it out!`,
      projectImage_4,
      ["MongoDB", "Express", "React", "Node.js", "AWS S3", "Firebase"],
      "https://github.com/zitaoyu/bed-and-breakfast-client",
      "https://bnbapp.netlify.app",
    ),
    new ProjectInfo(
      "Porygon Dex",
      `Porygon Dex serves as a wiki site for the Pokémon main series games, dedicated to the Pokémon community. 
      Since most other wiki sites are primarily designed for desktop clients, navigating them on a mobile device 
      can be challenging. The goal of this project is to ensure smooth site navigation for both mobile and 
      desktop browsers.`,
      projectImage_5,
      ["Next.js", "TypeScript", "React", "NextUI"],
      "https://github.com/zitaoyu/porygondex",
      "https://porygondex.vercel.app",
    ),
    new ProjectInfo(
      "Portfolio V1 (This website)",
      `A portfolio website project that rocks a dark gray and blue aesthetic reminiscent of the Linux terminal. Crafted using React 
      with libraries such as Framer Motion, Tailwind CSS, and FontAwesome.`,
      projectImage_0,
      [
        "JavaScript",
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "FontAwesome",
        "Netlify",
      ],
      "https://github.com/zitaoyu/tommyyu-v1",
      "https://tommy-yu.com",
    ),
    new ProjectInfo(
      "Hollow Tree",
      `A Metroidvania 2D platformer game, powered by Googler Seth Ladd's game engine and inspired by his Google IO talk in 2011. In 
      this game, you play as a druid who collects powerful magic stones to learn new spells and upgrades, all to combat terrifying 
      bugs (no pun intended).`,
      projectImage_2,
      ["JavaScript", "HTML"],
      "https://github.com/zitaoyu/Hollow-Tree",
      "https://zitaoyu.github.io/Hollow-Tree/",
    ),
  ],
  projects: [
    new ProjectInfo(
      "SmartManage",
      "An ASP.NET web app to manage and organize billing information.",
      null,
      ["C#", "ASP.NET"],
      "https://github.com/zitaoyu/SmartManage",
      null,
    ),
    new ProjectInfo(
      "Profit Tracker",
      "A Ruby on Rails web application to help you efficiently manage your investments and track profits.",
      null,
      ["Ruby on Rails", "Bootstrap", "PostgreSQL"],
      "https://github.com/zitaoyu/profit-tracker",
      null,
    ),
    new ProjectInfo(
      "Sorting Visualizer",
      "Showcase various sorting algorithms, providing step-by-step visualization with color indication.",
      null,
      ["JavaScript", "React"],
      "https://github.com/zitaoyu/Sorting-Visualiser",
      "https://tommy-zitaoy.github.io/Sorting_Visualiser/",
    ),
    new ProjectInfo(
      "Automation Framework",
      "An automation bot designed to execute E2E tests on a daily basis, triggering email alerts when errors are detected.",
      null,
      ["Python", "PyAutoGUI", "OpenCV"],
      null,
      null,
    ),
    new ProjectInfo(
      "CosmoWeb",
      "A websitefor my cat Cosmo, powered by Facebook develper APIs.",
      null,
      ["React", "RESTful API"],
      "https://github.com/zitaoyu/cosmoweb",
      "https://zitaoyu.github.io/cosmoweb/",
    ),
    new ProjectInfo(
      "Pokemon Battle Simulator",
      "A Pokemon battle simulator to build teams and practice battles.",
      null,
      ["Python", "PyGame"],
      "https://github.com/zitaoyu/pygame-poke",
      null,
    ),

    new ProjectInfo(
      "Pentago AI",
      "Play Pentago game with an AI but you would never win.",
      null,
      ["Java"],
      "https://github.com/zitaoyu/Pentago-AI",
      null,
    ),
    new ProjectInfo(
      "ProgrammerJoke API",
      "A RESTful API service that delivers jokes for programmers.",
      null,
      ["JavaScript", "RESTful API"],
      "https://github.com/zitaoyu/ProgrammerJokeAPI",
      null,
    ),
  ],
  showMoreButton: "Show More",
};

// contact.jsx
export const contactSectionContent = {
  sectionTitle: "Contact Me",
  intro: `Thank you for checking out my page. I'm always open to new oppuntunities and
          conversations, if you like what you see, feel free to say hello to me.`,
  button: "Say Hello",
};
