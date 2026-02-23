import React from 'react'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-950">

      {/* Orb 1 */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px]
        bg-indigo-500/20 rounded-full blur-3xl animate-float"
      />

      {/* Orb 2 */}
      <div
        className="absolute top-[30%] right-[-10%] w-[500px] h-[500px]
        bg-pink-500/20 rounded-full blur-3xl animate-float"
      />

      {/* Orb 3 */}
      <div
        className="absolute bottom-[-15%] left-[20%] w-[450px] h-[450px]
        bg-purple-500/20 rounded-full blur-3xl animate-float"
      />
    </div>
  );
};

export default AnimatedBackground;