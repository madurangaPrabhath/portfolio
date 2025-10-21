"use client";

import React from "react";

import { skills } from "@/data";

const Skills = () => {
  return (
    <section className="py-20">
      <div
        className="flex flex-wrap items-center justify-center gap-8 md:gap-32
         max-lg:mt-10"
      >
        {skills.map((skill) => (
          <React.Fragment key={skill.id}>
            <div className="flex md:max-w-72 max-w-48 gap-6">
              <img src={skill.img} alt={skill.name} className="md:w-20 w-12" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Skills;
