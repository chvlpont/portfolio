"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import useSectionInView from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With one year left until I graduate, I've spent the last three years
        immersed in coding. I began my journey with{" "}
        <span className="font-medium">C#</span>, but my passion for{" "}
        <span className="font-medium">front-end development</span> led me to
        focus on{" "}
        <span className="font-medium">React, Next.js, JavaScript,</span> and{" "}
        <span className="font-medium">MongoDB</span> for backend solutions. In
        addition to my studies, I'm self-employed at a web agency, where I get
        to apply and expand my skills in real-world projects.{" "}
        <span className="italic">
          I love the blend of creativity and problem-solving
        </span>{" "}
        that programming offers. Outside of coding, I’m passionate about
        training and staying active. I'm currently seeking an{" "}
        <span className="font-medium">internship opportunity</span> to gain
        further experience and contribute to innovative projects.
      </p>
    </motion.section>
  );
};

export default About;
