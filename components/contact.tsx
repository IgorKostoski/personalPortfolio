"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane, FaRegPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {


    const { ref } = useSectionInView("Contact");

   

    
  return (
    <motion.section id="contact" 
    ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{
        opacity: 0,
    }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}

        viewport={{ 
          once: true, 
        }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:igorkostoski@ymail.com">
          igorkostoski@ymail.com
        </a>{" "}
        or throught this form.
      </p>

      <form className="mb-10 flex flex-col"
      action={async (formData) => {
        await sendEmail(formData);
      }}
      
  
      >
        <input
          className="
                    h-14 rounded-lg borderBlack"
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder=" Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack"
          name='message'
          required
          maxLength={5000}
          placeholder=" Your Message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center 
                    gap-2
                    h-[3rem]
                    w-[8rem] bg-sky-300 text-white rounded-full
                    outline-none transition-all focus:scale-110 
                    hover:scale-110 active:scale-105 hover:bg-sky-900 hover:text-white
                    active:scale-105"
        >
          Submit{" "}
          <FaRegPaperPlane
            className="text-xs
                    opacity-70 transition-all 
                    group-hover:translate-x-1
                    grouo-hover:-translate-y-1"
          />{" "}
        </button>
      </form>
    </motion.section>
  );
}
