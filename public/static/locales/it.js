const { default: LinkWithIcon } = require("../../../components/LinkWithIcon");

module.exports = {
  GITHUB_LINK: "Visita su GitHub",
  NAVBAR_PROJECTS: "PROGETTI",
  FRONT_DESCRIPTION: `Ciao! Io sono Christian, ho 24 anni, sono estremamente curioso e appassionato di informatica in ogni sua forma. 
  Mi piace essere aggiornato sulle nuove tecnologie per avere un bagaglio di conoscenze che mi permetta di risolvere ogni tipo di problema.`,
  TITLE_STORY: "Il mio percorso",
  TITLE_SKILLS: "Competenze",
  TITLE_LANGUAGES: "Linguaggi di programmazione",
  SKILLS: [
    {
      name: "Applicazioni web in React e Next.js (SPA, PWA, SSR)",
      icon: "website.svg",
    },
    {
      name: "Backend server e REST API in Express.js, Spring MVC, Ktor, Vert.x",
      icon: "cloud.svg",
    },
    { name: "Applicazioni mobile in Android e Flutter", icon: "mobile.svg" },
    {
      name: "Gestione dei dati in SQL e NoSQL (MongoDB, Redis, Neo4J)",
      icon: "graph.svg",
    },
    { name: "Automazione di sistemi e scripting", icon: "cogs.svg" },
  ],
  TIMELINE: [
    {
      title: "Marzo 2021 - Attuale",
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
      title: "Ottobre 2020 - Marzo 2021",
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
      title: "Aprile 2019 - Ottobre 2020",
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
      title: "Marzo 2019",
      cardTitle: "Laura Triennale in Ing. e Scienze Informatiche",
      content: ["Universita' di Bologna"],
    },
    {
      title: "Novembre 2016",
      cardTitle: "Trasferimento all'Universita' di Bologna",
    },
    {
      title: "Settembre 2015",
      cardTitle: "Iscrizione al corso di Scienze Informatiche",
      content: ["Universita' di Messina"],
    },
  ],
  PROJECTS: [
    {
      name: "Peffect Bookmarks",
      description: `Stanco del bookmarks manager di Google Chrome, ho deciso di costruire le mia personale versione con navigazione migliorata, funzionalità extra e dark mode. Work in progress.`,
      imgSrc: "pb.png",
      gitHub: "https://github.com/a-chris/peffect-bookmarks-manager",
      year: 2020,
      technologies: ["React", "Redux", "Typescript", "Google Chrome extension"],
    },
    {
      name: "Rosso Fragola",
      description: `Ho preso in prestito migliaia di ricette dai principali siti italiani con lo scopo di trovare nuovi ingredienti da abbinare i cibi di sempre. 
    Ad oggi il database contiene quasi mille ingredienti e 20mila diverse combinazioni.`,
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
      description:
        "Un modo più comodo di gestire i propri followings di Reddit. Forse un giorno arriverà anche la gestione dei followings di Twitter.",
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
        "Applicazione Android per leggere gratuitamente tutti gli articoli di medium.com simulando la navigazione anonima.",
      imgSrc: "mnt.png",
      gitHub: "https://github.com/a-chris/medium-no-thanks",
      year: 2020,
      technologies: ["Android", "Kotlin"],
    },
  ],
};
