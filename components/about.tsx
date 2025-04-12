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
        I’m an aspiring Java Developer with a strong focus on{" "}
        <span className="font-medium">backend</span> development, currently
        pursuing a{" "}
        <span className="font-medium">
          Bachelor's degree in Software Engineering at IU Internationale
          Hochschule.
        </span>{" "}
        With a solid foundation in{" "}
        <span className="font-medium">
          {" "}
          Java, object-oriented programming, and web technologies
        </span>{" "}
        , I am actively expanding my skillset through hands-on projects,
        professional certifications, and upcoming specialized training in Java
        development and databases (OTUS, 2025).I’m particularly interested in
        building robust, scalable backend solutions using Java, Spring Boot,
        REST APIs, and related technologies. My previous experience in logistics
        and customer-facing roles has strengthened my problem-solving skills,
        attention to detail, and ability to work in structured, agile
        environments.I’m a highly motivated career changer who thrives on
        learning, and I’m eager to contribute to practical, real-world software
        projects while continuously developing clean code practices and
        deepening my understanding of modern development tools like Git, Docker,
        and Maven.
      </p>

      <p>
        {/* <span className="italic">When I'm not coding</span>, I enjoy producing
        electronic music, watching movies, and doing gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. */}
      </p>
    </motion.section>
  );
}
