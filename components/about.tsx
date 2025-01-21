"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 ">
        {/* After graduating with a degree in
        , I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.  */}
        I'm a Junior Java Developer with a strong focus on{" "}
        <span className="font-medium">backend</span> development, currently
        pursuing a{" "}
        <span className="font-medium">
          Bachelor's degree in Software Engineering at IU Internationale
          Hochschule.
        </span>{" "}
        I’m actively learning and using {" "}
        <span className="font-medium"> Java and Spring technologies,</span>{" "}
        to build efficient and scalable backend solutions. As I
        continue developing my technical skills, I’m also passionate about
        understanding industry best practices and exploring new ways to create
        impactful software. I’m excited about the challenges and opportunities
        in backend development and am eager to grow my knowledge and contribute
        to innovative projects.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy producing
        electronic music, watching movies, and doing gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
