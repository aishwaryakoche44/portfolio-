import React from 'react'

const Courses = () => {
  return (
    <section className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-5xl mx-auto px-8">

        {/* Heading */}
        <h1
          className="text-4xl font-extrabold mb-14
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent"
        >
          Courses
        </h1>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Course 1 */}
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800
            rounded-2xl p-8 shadow-xl hover:scale-[1.02]
            transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-400 mb-2">
              Full Stack Developer (Frontend)
            </h2>
            <p className="text-gray-300">
              Ashirwad Coaching Classes
            </p>
            <p className="text-gray-400 text-sm mt-1">
              June 2025 – Present
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Focused on frontend development using React JS, JavaScript,
              HTML, CSS, and Tailwind CSS. Gained practical experience in
              building responsive and component-based web applications.
            </p>
          </div>

          {/* Course 2 */}
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800
            rounded-2xl p-8 shadow-xl hover:scale-[1.02]
            transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-400 mb-2">
              C and C++ Programming
            </h2>
            <p className="text-gray-300">
              Commence Academy
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Jan 2023 – Aug 2023
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Learned core programming concepts, logic building,
              problem-solving techniques, and basic data structures,
              strengthening my foundation in programming.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Courses;
