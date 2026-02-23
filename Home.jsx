import React from 'react'

const Home = () => {
  return (
    <section className="relative min-h-screen bg-gray-950 flex items-center overflow-hidden">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-24 left-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="animate-fadeInUp">
          <h1 className="text-5xl font-extrabold leading-tight 
            bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
            bg-clip-text text-transparent">
            Hi, I’m Aishwarya Koche
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-300">
            Frontend Developer | React JS
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
            I’m a B.Sc. IT student and a passionate Frontend Developer who loves 
            building clean, responsive, and user-friendly web applications.
            Once I start working on something, I stay focused until it’s done.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-5">
            <a
              href="/Projects"
              className="px-7 py-3 rounded-xl font-semibold
              bg-indigo-500 hover:bg-indigo-600
              hover:scale-105 transition-all duration-300 text-white shadow-lg"
            >
              View Projects
            </a>

            <a
              href="/Contact"
              className="px-7 py-3 rounded-xl font-semibold
              border border-gray-700 text-gray-300
              hover:border-indigo-400 hover:text-indigo-400
              hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative group">

          {/* Glow behind card */}
          <div className="absolute inset-0 bg-gradient-to-r
            from-indigo-500/30 to-pink-500/30
            rounded-3xl blur-2xl
            group-hover:blur-3xl transition-all duration-500">
          </div>

          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800
            rounded-2xl p-8 shadow-xl
            border border-gray-800
            hover:-translate-y-2 transition-all duration-500">

            <h3 className="text-xl font-semibold text-indigo-400 mb-4">
              Tech Stack
            </h3>

            <ul className="space-y-3 text-gray-300 text-lg">
              <li>⚡ React JS</li>
              <li>⚡ JavaScript (ES6+)</li>
              <li>⚡ HTML5 & CSS3</li>
              <li>⚡ Tailwind CSS</li>
              <li>⚡ Responsive Web Design</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;