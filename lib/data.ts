import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import githubImg from "@/public/Primer.jpg";

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

export const experiencesData = [
  {
    title: "Virtual Reality Developer Student at Nackademin",
    location: "Stockholm",
    description:
      "Nackademin AB is a vocational school offering training for careers and custom courses for businesses and individuals. It is located at Tomtebodavägen 3 in Solna.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "Virtual Reality Developer at Vobling (Intern)",
    location: "Stockholm",
    description:
      "During my two year of VR-education, i had a five-month internship at Vobling, I worked on their VR Fire Trainer, a cutting-edge virtual reality tool designed to simulate fire emergencies and enhance firefighting training.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Frontend Developer Student at KYH",
    location: "Stockholm",
    description:
      "Frontend development involves creating and optimizing the visual and interactive elements of websites and applications to ensure an engaging and user-friendly experience.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025 - present",
  },
  {
    title: "Frontend Developer at Webbyro (Self-employed)",
    location: "Remote",
    description:
      "At Webbyro, we specialize in creating high-quality websites at reasonable prices, delivering tailored solutions that meet clients' needs ",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present",
  },
  // {
  //   title: "Sales at Djurgårdsbrons Sjöcafé",
  //   location: "Stockholm",
  //   description:
  //     "At Sales Djurgårdsbrons Sjöcafé, I managed the cashier and handled sales of beer, drinks, food, cakes, and alcohol, providing exceptional customer service.",
  //   icon: React.createElement(FaReact),
  //   date: "2019 - 2020",
  // },
  // {
  //   title: "Sales at SATS",
  //   location: "Stockholm",
  //   description:
  //     "At SATS, I worked at the cashier, handled member support, managed equipment maintenance, and processed mail.",
  //   icon: React.createElement(FaReact),
  //   date: "2018 - 2019",
  // },
  // {
  //   title: "Sales at Huddingehallen",
  //   location: "Stockholm",
  //   description:
  //     "At Huddingehallen, I worked at the cashier, supported gym operations, managed equipment maintenance and class coordination, processed mail, and taught swimming lessons.",
  //   icon: React.createElement(FaReact),
  //   date: "2018 - 2019",
  // },
] as const;

export const projectsData = [
  {
    title: "Event",
    description:
      "Event is a collaborative full-stack project aimed at building a backoffice system with a CMS for managing events",
    tags: ["React", "Next.js", "JAVASCRIPT", "FireBase", "Tailwind", "Clerk"],
    imageUrl: githubImg,
  },
  {
    title: "Eventify",
    description:
      "Eventify is an event management system built with React/Next.js/Tailwind. It leverages an API created in the event group project",
    tags: ["React", "Next.js", "JAVASCRIPT", "FireBase", "Tailwind", "Clerk"],
    imageUrl: githubImg,
  },
  {
    title: "Byte",
    description:
      "Byte is a full-stack React + Vite project using CSS, Redux. An e-commerce website that interacts with Node.js and Express.js server and MongoDB",
    tags: ["React", "VITE", "CSS", "REDUX", "NODE", "EXPRESS", "MONGODB"],
    imageUrl: githubImg,
  },
  {
    title: "Value",
    description:
      "Value is an e-commerce front-end project highly inspired by Louis Vuitton",
    tags: ["HTML", "SCSS", "JAVASCRIPT"],
    imageUrl: githubImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "C#",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "Blender",
  "Unity",
  "WordPress",
  "Figma",
  "SCSS",
  "Firebase",
  "Clerk",
  "Context",
] as const;
