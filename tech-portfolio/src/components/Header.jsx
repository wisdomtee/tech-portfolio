import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["hero", "about", "projects", "contact"];
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-500">Wisdom Toyin</div>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a key={link} href={`#${link}`} className="hover:text-blue-500 transition">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-2xl">
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <li key={link}>
                <a href={`#${link}`} onClick={toggleMenu} className="hover:text-blue-500 transition">
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
