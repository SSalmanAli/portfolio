import React from "react";
import { skillsConfig } from "../../config/skillsConfig";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="md:py-15 scroll-mt-navbar-height bg-primary-white px-4 py-10 pt-navbar-height md:px-20"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        {/* Section Title */}
        <div className="mb-4 text-center md:mb-8">
          <h1 className="text-display-medium font-regular text-primary-black dark:text-primary-white">
            My <span className="font-extrabold">Skills</span>
          </h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {skillsConfig.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.label}
                className="group flex flex-col items-center justify-center rounded-md border-2 border-primary-black p-8 transition-transform duration-300 ease-in-out hover:bg-primary-black hover:text-primary-white"
              >
                <div className="mb-3 text-[3.5rem] text-current">
                  <IconComponent aria-hidden="true" />
                </div>
                <span className="text-h6 font-semibold">{skill.label}</span>
                <h1 className="mt-2 text-[15px]">{skill.para}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
