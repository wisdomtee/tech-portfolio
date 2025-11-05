import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Wisdom Portfolio. All rights reserved.</p>
        <p>
          Follow me:{" "}
          <a href="https://github.com/" className="text-blue-400 hover:underline">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://linkedin.com/" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
