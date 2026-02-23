import React from 'react'
import { FaCertificate} from "react-icons/fa";

const certificates = [
  {
    title: "SkillUP 101 – Java",
    description:
      "Specialized in Java fundamentals and Object-Oriented Programming (OOP) concepts.",
  },
  {
    title: "AI For All",
    description:
      "Gained awareness of Artificial Intelligence concepts, ethics, and real-world applications.",
  },
];

const Certificates = () => {
  return (
    <section className="min-h-screen bg-gray-950 py-24 px-10 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-16
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent">
          Certificates
        </h1>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE – INFO */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              My Achievements
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              These certifications reflect my continuous learning journey
              and my interest in strengthening both technical and conceptual
              knowledge in computer science and emerging technologies.
            </p>
          </div>

          {/* RIGHT SIDE – CERTIFICATE CARDS */}
          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800
                border border-gray-800 rounded-2xl p-8
                hover:-translate-y-2 hover:shadow-xl
                transition-all duration-500"
              >
                <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
                  {cert.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificates;