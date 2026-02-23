import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-950 py-24 px-10 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-16
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE – TEXT */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Let’s Connect
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I’m always open to learning opportunities, collaborations,
              and meaningful conversations. Feel free to reach out if
              you’d like to connect or discuss something interesting.
            </p>

            <div className="space-y-4 text-lg text-gray-300">
              <p>📍 Nagpur, Maharashtra, India</p>
              <p>📧 aashukoche44@email.com</p>
              <p>📞 +91 9356071058</p>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <form className="bg-gradient-to-br from-gray-900 to-gray-800
            border border-gray-800 rounded-2xl p-8 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-950 border border-gray-700
              rounded-lg px-4 py-3 text-gray-300
              focus:outline-none focus:border-indigo-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-950 border border-gray-700
              rounded-lg px-4 py-3 text-gray-300
              focus:outline-none focus:border-indigo-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-gray-950 border border-gray-700
              rounded-lg px-4 py-3 text-gray-300
              focus:outline-none focus:border-indigo-400"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold
              bg-indigo-500 hover:bg-indigo-600
              transition-all duration-300"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact
