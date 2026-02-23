import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <header className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
  <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
    
     <h1 className="text-3xl font-extrabold 
  bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
  bg-clip-text text-transparent">
  Aishwarya Koche
</h1>
        {/* Nav Links */}
        <div className="flex gap-8 text-lg font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Profile", path: "/Profile" },
            { name: "Education", path: "/Education" },
            { name: "Skills", path: "/Skills" },
            { name: "Courses", path: "/Courses" },
            { name: "Projects", path: "/Projects" },
            { name: "Certificates", path: "/Certificates" },
          ].map((link) => (
          <NavLink
  key={link.name}
  to={link.path}
  className={({ isActive }) =>
    `relative px-5 py-2 text-lg font-semibold rounded-xl
     transition-all duration-300
     ${
       isActive
         ? "text-indigo-400 bg-gray-900"
         : "text-gray-300 hover:text-indigo-400 hover:bg-gray-900"
     }`
  }
>
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
