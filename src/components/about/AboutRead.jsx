import Container from "../global/Container";

const AboutRead = () => {
  return (
    <Container>
      <section className="bg-[#0b0f1a] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-[#111827] p-12 rounded-3xl shadow-2xl space-y-10">

            {/* Title */}
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                Education & <span className="text-sky-400">Skills Overview</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Get to know more about my education, skills, and career goals.
              </p>
            </div>

            {/* Introduction */}
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am a dedicated Computer Science & Technology student at
                Moulvibazar Polytechnic Institute (2022–2023 batch), currently
                studying in the 7th semester. Alongside my academic journey, I
                am building my career as a passionate Frontend Developer.
              </p>

              <p>
                I enjoy creating modern, responsive, and user-friendly web
                interfaces. My journey started with HTML and CSS, then I
                explored JavaScript and React to build dynamic web
                applications.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
                Education
              </h2>
              <div className="bg-[#1f2937] p-6 rounded-xl text-gray-300">
                <p className="font-semibold">
                  Diploma in Computer Science & Technology
                </p>
                <p>Moulvibazar Polytechnic Institute</p>
                <p>Session: 2022–2023</p>
                <p>Currently in 7th Semester</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
                Core Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div className="bg-[#1f2937] p-4 rounded-lg">HTML5</div>
                <div className="bg-[#1f2937] p-4 rounded-lg">CSS3</div>
                <div className="bg-[#1f2937] p-4 rounded-lg">JavaScript</div>
                <div className="bg-[#1f2937] p-4 rounded-lg">React.js</div>
                <div className="bg-[#1f2937] p-4 rounded-lg">Tailwind CSS</div>
                <div className="bg-[#1f2937] p-4 rounded-lg">Git & GitHub</div>
              </div>
            </div>

            {/* Current Learning */}
            <div>
              <h2 className="text-2xl font-semibold text-pink-400 mb-4">
                Currently Learning
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div className="bg-[#1f2937] p-4 rounded-lg">Node.js (Basic Backend)</div>
                <div className="bg-[#1f2937] p-4 rounded-lg">MongoDB</div>
                <div className="bg-[#1f2937] p-4 rounded-lg">Advanced React Concepts</div>
                <div className="bg-[#1f2937] p-4 rounded-lg">API Integration</div>
              </div>
            </div>

            {/* Career Goal */}
            <div>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                Career Goal
              </h2>
              <p className="text-gray-300 leading-relaxed">
                My goal is to become a skilled full-stack developer and work on
                real-world projects that create meaningful impact. I am always
                eager to learn new technologies and continuously improve my
                problem-solving and development skills.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutRead;