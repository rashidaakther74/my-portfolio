import Container from "../global/Container";

const Skills = () => {
  return (
    <Container>
      <section className="bg-[#0b0f1a] text-white py-32">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-[#111827] p-12 rounded-3xl shadow-2xl">

            {/* Section Title */}
            <h1 className="text-4xl font-bold mb-4 text-center">
              My <span className="text-orange-400">Skills</span>
            </h1>

            {/* Optional Subtitle */}
            <p className="text-gray-400 text-center mb-12">
              Some of my technical skills with proficiency levels
            </p>

            {/* Skill Items */}
            {[
              { name: "HTML", percent: "90%" },
              { name: "CSS", percent: "85%" },
              { name: "JavaScript", percent: "80%" },
              { name: "React", percent: "85%" },
              { name: "Portfolio Projects", percent: "92%" },
              { name: "Backend Basic (Node)", percent: "60%" },
            ].map((skill, index) => {
              // Unique gradient colors
              const colors = [
                "from-red-500 to-pink-500",
                "from-indigo-500 to-purple-500",
                "from-green-400 to-teal-400",
                "from-cyan-400 to-blue-500",
                "from-yellow-400 to-orange-500",
                "from-violet-500 to-fuchsia-500",
              ];
              return (
                <div key={index} className="mb-8">

                  {/* Skill Name + Percentage */}
                  <div className="flex justify-between mb-3 text-lg font-medium text-gray-300">
                    <h2>{skill.name}</h2>
                    <span className="text-white">{skill.percent}</span>
                  </div>

                  {/* Skill Bar */}
                  <div className="w-full bg-gray-700/40 rounded-full h-4">
                    <div
                      className={`h-4 rounded-full bg-gradient-to-r ${colors[index % colors.length]} transition-all duration-700`}
                      style={{ width: skill.percent }}
                    ></div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>
    </Container>
  );
};

export default Skills;