import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#111827]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          My <span className="text-orange-500">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-orange-500 pl-12 space-y-16">

          {/* Timeline Item 1 */}
          <div className="relative">
            {/* Dot */}
            <div className="absolute -left-7 top-1.5 w-6 h-6 bg-orange-500 rounded-full border-2 border-gray-900"></div>

            {/* Content */}
            <h3 className="text-2xl font-semibold text-orange-400 mb-1">
              Frontend Developer
            </h3>
            <p className="text-gray-400 mb-2">2023 - Present</p>
            <p className="text-gray-300">
              Building responsive and modern UI using React & Tailwind. Focused on performance, accessibility, and clean dark-themed design.
            </p>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative">
            <div className="absolute -left-7 top-1.5 w-6 h-6 bg-orange-500 rounded-full border-2 border-gray-900"></div>

            <h3 className="text-2xl font-semibold text-orange-400 mb-1">
              UI Designer
            </h3>
            <p className="text-gray-400 mb-2">2022 - 2023</p>
            <p className="text-gray-300">
              Designed clean user interfaces with strong focus on UX and modern dark-themed layouts for web and mobile apps.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;