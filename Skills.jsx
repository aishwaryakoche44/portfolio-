import React from 'react'

const skills = [
  { name: "React JS", level: "80%" },
  { name: "JavaScript (ES6+)", level: "75%" },
  { name: "HTML5", level: "90%" },
  { name: "CSS3", level: "85%" },
  { name: "Tailwind CSS", level: "80%" },
  { name: "Responsive Web Design", level: "85%" },
  { name: "Core Java", level: "65%" },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-5xl mx-auto px-8">

        {/* Heading */}
        <h1
          className="text-4xl font-extrabold mb-14
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent"
        >
          Skills
        </h1>

        {/* Skills Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800
          rounded-2xl p-10 shadow-xl space-y-8">

          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">
                  {skill.name}
                </span>
                <span className="text-indigo-400 font-medium">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div
                  className="h-3 rounded-full
                  bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;