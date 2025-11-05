import React from "react";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" data-aos="fade-up" className="py-20 bg-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 mb-8">
          I'm a full-stack developer with experience in React, Node.js, and AI-powered applications.
          Passionate about building scalable web solutions and integrating machine learning models
          into modern applications.
        </p>

        <a
          href="/Adigun-Wisdom-CV.pdf"
          download
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          <FaFileDownload size={18} />
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
};

export default About;
