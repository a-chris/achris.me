const { default: LinkWithIcon } = require("../../../components/LinkWithIcon");

module.exports = {
  GITHUB_LINK: "Visit on GitHub",
  NAVBAR_PROJECTS: "PROJECTS",
  FRONT_DESCRIPTION: `Hello! I'm Christian, I'm 24 years old, very curious and an IT enthusiast.
  I love to stay up to date with technologies to build a set of skills that allows to solve any tipe of problem.`,
  TITLE_STORY: "My story",
  TITLE_SKILLS: "Skills",
  TITLE_LANGUAGES: "Programming languages",
  SKILLS: [
    {
      name: "Web applications built with React e Next.js (SPA, PWA, SSR)",
      icon: "website.svg",
    },
    {
      name:
        "Backend server and REST API built with Express.js, Spring MVC, Ktor, Vert.x",
      icon: "cloud.svg",
    },
    {
      name: "Mobile applications built in Android and Flutter",
      icon: "mobile.svg",
    },
    {
      name: "Data management with SQL and NoSQL (MongoDB, Redis, Neo4J)",
      icon: "graph.svg",
    },
    { name: "Systems automation and scripting", icon: "cogs.svg" },
  ],
  TIMELINE: [
    {
      title: "March 2021 - now",
      cardTitle: (
        <LinkWithIcon
          text="Extendi"
          href="https://www.extendi.it/"
          icon="resources/icons/link.svg"
          iconPosition="after"
        />
      ),
      content: ["Backend Developer"],
    },
    {
      title: "October 2020 - March 2021",
      cardTitle: (
        <LinkWithIcon
          text="Lab51 srl"
          href="https://lab51.it"
          icon="resources/icons/link.svg"
          iconPosition="after"
        />
      ),
      content: ["Full Stack Developer (React, NodeJS)"],
    },
    {
      title: "April 2019 - October 2020",
      cardTitle: (
        <LinkWithIcon
          text="Mango Mobile Solutions"
          href="https://mangomobi.com"
          icon="resources/icons/link.svg"
          iconPosition="after"
        />
      ),
      content: [
        "Full Stack Developer (React, Spring MVC)",
        "Android Developer",
        "DevOps",
      ],
    },
    {
      title: "March 2019",
      cardTitle: "Bachelor's Degree in Ing. and Computer Science",
      content: ["University of Bologna"],
    },
    {
      title: "November 2016",
      cardTitle: "Moved to the University of Bologna",
    },
    {
      title: "September 2015",
      cardTitle: "Computer Science",
      content: ["University of Messina"],
    },
  ],
  PROJECTS: [
    {
      name: "Peffect Bookmarks",
      description: `I wasn't happy with the Chrome Bookmarks Manager so I've built my own one with dark mode, better UI and black jack.`,
      imgSrc: "pb.png",
      gitHub: "https://github.com/a-chris/peffect-bookmarks-manager",
      year: 2020,
      technologies: ["React", "Redux", "Typescript", "Google Chrome extension"],
    },
    {
      name: "Rosso Fragola",
      description: `I borrowed a few thousands of cooking recipes from the most important italian sites to find something new to cook.
      As of today the database counts 1k of ingredients and 20k of different combinations.`,
      imgSrc: "rf.png",
      link: "https://www.rossofragola.it",
      gitHub: "https://github.com/a-chris/rossofragola",
      year: 2020,
      technologies: [
        "React",
        "NextJS",
        "Neo4J",
        "SQLite",
        "Python",
        "Javascript",
      ],
    },
    // {
    //   name: "Flutter Repeated Alarm",
    //   description: "Il sito piu bello del mondo intero",
    //   imgSrc: "https://via.placeholder.com/500",
    //   gitHub: "",
    //   year: 2020,
    //   technologies: ["Android", "Flutter", "Dart", "Java"],
    // },
    {
      name: "Clear My Followings",
      description: "",
      imgSrc: "cmf.png",
      link: "https://www.clearmyfollowings.xyz",
      gitHub: "https://github.com/a-chris/clear-my-followings",
      year: 2020,
      technologies: ["React", "Typescript", "Reddit API"],
    },
    // {
    //   name: "Eurostreaming bot telegram",
    //   description: "Il sito piu bello del mondo intero",
    //   imgSrc: "https://via.placeholder.com/500",
    //   link: "https://www.clearmyfollowings.xyz",
    //   gitHub: "",
    //   year: 2020,
    //   technologies: ["Telegram", "Kotlin"],
    // },
    {
      name: "Medium No Thanks",
      description:
        "Android application to freely read medium.com articles that works by emulating the browser anonymous navigation.",
      imgSrc: "mnt.png",
      gitHub: "https://github.com/a-chris/medium-no-thanks",
      year: 2020,
      technologies: ["Android", "Kotlin"],
    },
  ],
};
