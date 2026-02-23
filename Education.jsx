import React from 'react'

const Education = () => {
    return (
    <section className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-5xl mx-auto px-8">

        {/* Heading */}
        <h1
          className="text-4xl font-extrabold mb-14
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent"
        >
          Education
        </h1>

        {/* Timeline */}
        <div className="relative border-l border-gray-800 pl-10 space-y-12">

          {/* BSC IT */}
          <div className="relative">
            <span className="absolute -left-[18px] top-1 w-4 h-4 bg-indigo-500 rounded-full"></span>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-indigo-400">
                B.Sc. in Information Technology
              </h2>
              <p className="text-gray-300 mt-2">
                Dr. S. C. Gulhane Prerna College, Nagpur
              </p>
              <p className="text-gray-400 text-sm mt-1">
                2023 – 2026 (Pursuing)
              </p>
            </div>
          </div>

          {/* HSC */}
          <div className="relative">
            <span className="absolute -left-[18px] top-1 w-4 h-4 bg-indigo-500 rounded-full"></span>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-indigo-400">
                Higher Secondary Certificate (HSC)
              </h2>
              <p className="text-gray-300 mt-2">
                Vidarbha Buniyadi Junior College, Nagpur
              </p>
              <p className="text-gray-400 text-sm mt-1">
                2023 • Percentage: 50%
              </p>
            </div>
          </div>

          {/* SSC */}
          <div className="relative">
            <span className="absolute -left-[18px] top-1 w-4 h-4 bg-indigo-500 rounded-full"></span>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-indigo-400">
                Secondary School Certificate (SSC)
              </h2>
              <p className="text-gray-300 mt-2">
                Vidarbha Buniyadi High School, Nagpur
              </p>
              <p className="text-gray-400 text-sm mt-1">
                2021 • Percentage: 81.80%
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;