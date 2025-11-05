import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center bg-gray-900"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Wisdom Toyin</h1>
        <p className="text-xl mb-6">
          Full-Stack Developer | AI Enthusiast | React & Node.js Expert
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/wisdomtee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/oginni-adiguntoyin-174297231/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-700 hover:bg-gray-200 transition"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="mailto:wisdomtoyin@gmail.com"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-red-500 hover:bg-gray-200 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* CV Download Button */}
        <div className="mt-4 flex justify-center">
          <a
            href="/Adigun-Wisdom-CV.pdf"
            download
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            <FaFileDownload size={20} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
