import React from "react";
import Card from "./Card";

const projects = [
  { title: "Portfolio Website", description: "Built with React & Tailwind" },
  { title: "AI Chatbot", description: "OpenAI GPT-powered chatbot" },
  { title: "E-commerce App", description: "Full-stack MERN app" },
];

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-up" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => <Card key={i} title={project.title} description={project.description} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
