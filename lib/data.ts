import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaUniversity } from "react-icons/fa";
import { SiHtmlacademy } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

type experiencesData = {
  title: string;
  location: string;
  description: string[];
  icon: JSX.Element;
  date: string;
};
export const experiencesData = [
  {
    title: "Graduated Gymnasium- 'Pance Popovski'",
    location: "Gostivar, North Macedonia",
    description: "I graduated after 4 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2006 - 2009",
  },
  {
    title: "Iustinianus Primus Faculty of Law",
    location: "Skopje, North Macedonia",
    description:
      "I graduated after 3 years of studying, with a degree as Bachelor of Political Science",
    icon: React.createElement(FaUniversity),
    date: "2012 - 2014",
  },
  // {
  //   title: "Rotation Worker at Burger King",
  //   location: "Cologne, Germany",
  //   description:[
  //     "Delivered exceptional customer service at the cash register, showcasing strong communication and interpersonal skills.",
  //     "Trained and mentored new employees, demonstrating leadership, adaptability, and the ability to explain processes clearly.",
  //     "Maintained high standards of cleanliness and organization, emphasizing attention to detail and consistency in following procedures.",
  //   ]

  //     ,
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
  {
    title: "Software Testing Academy- Brainster",
    location: "Remote",
    description:
      "I gained hands-on experience with tools like Selenium, JMeter, and Appium, along with C# and OOP. I developed skills in manual and automated testing, REST API testing, and bug tracking, while learning agile methodologies like Scrum.",
    date: "January 2023 - September 2023",
    icon: React.createElement(SiHtmlacademy),
  },

  {
    title: "IU International University of Applied Sciences",
    location: "Cologne, Germany",
    description:
      "At IU International University of Applied Sciences, I am pursuing a Bachelor of Science in Software Development, where I am gaining skills in Java, Spring Boot, JUnit, SQL, Hibernate, Selenium, and Git/GitHub. My studies include hands-on experience with data structures, algorithms, CI/CD, as well as working with frameworks like Spring, SpringBoot and tools such as IntelliJ/Eclipse and MySQL, providing a solid foundation for my ongoing development in software engineering.",
    date: "2023 - current",
    icon: React.createElement(FaUniversity),
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Java Syntax",
  "Java Core",
  "Maven",
  "Java EE",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Spring",
  "Hibernate",
  "Docker",
  "Java-Core",
  "Selenium",
  "SpringBoot",
  "Git",
  "GitHub",
  "JUnit",
  "Linux",
  "CI/CD",
  "Eclipse",
  "IntelliJ",
] as const;
