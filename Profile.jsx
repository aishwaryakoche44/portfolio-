import React from 'react'

const Profile = () => {
   return (
    <section className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-5xl mx-auto px-8">

        {/* Heading */}
        <h1
          className="text-4xl font-extrabold mb-10
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent"
        >
          About Me
        </h1>

        {/* Content Card */}
        <div
          className="bg-gradient-to-br from-gray-900 to-gray-800
          rounded-2xl p-10 shadow-xl"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hi, I’m{" "}
            <span className="text-indigo-400 font-semibold">
              Aishwarya Koche
            </span>
            , a Frontend Developer from Nagpur, Maharashtra. I am currently
            pursuing my B.Sc. in Information Technology and continuously
            improving my skills in modern web development.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I have a strong interest in building clean, responsive, and
            user-friendly web interfaces using React JS, JavaScript, HTML,
            CSS, and Tailwind CSS. I enjoy turning ideas into beautiful
            and functional web experiences.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Apart from coding, I love listening to music, watching
            K-dramas, and writing a diary. These hobbies help me stay
            creative and focused in my daily life.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I am a kind, dedicated, and disciplined person. Once I start
            working on something, I stay committed and don’t rest until
            the task is completed. I strongly believe in consistency,
            continuous learning, and giving my best in everything I do.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Profile;