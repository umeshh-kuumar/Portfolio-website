"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Task Manager",
    description: "A MERN stack task management platform that allows users to create, organize, and track tasks efficiently with secure authentication and real-time task management features.",
    image: "/images/projects/image5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/umeshh-kuumar/Task-Manager",
    previewUrl: "https://task-managerpro.vercel.app",
  },
  {
    id: 2,
    title: "MOCKMATE",
    description: "An AI-powered mock interview platform that lets users practice real interview questions with instant feedback and performance insights.",
    image: "/images/projects/image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Umesh-kumarr/ai-mock-interview.git",
    previewUrl: "https://ai-mock-interview-alpha-dun.vercel.app/",
  },
  {
    id: 3,
    title: "INTELLICV",
    description: "A clean, modern resume builder that helps users create professional CVs quickly with customizable templates and easy editing.",
    image: "/images/projects/image1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Umesh-kumarr/intellicv.git",
    previewUrl: "https://intellicv.vercel.app/",
  },
  {
    id: 4,
    title: "PORTFOLIO WEBSITE",
    description: "A modern portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, and achievements. Designed for responsiveness and smooth user experience. Features interactive sections and a clean, professional layout",
    image: "/images/projects/image2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Umesh-kumarr/PRODIGY_WD_4.git",
    previewUrl: "https://prodigy-wd-4-hazel.vercel.app/",
  },
  {
    id: 5,
    title: "Weather App",
    description: "A clean, responsive weather dashboard that lets users search for any city and instantly view current weather conditions and temperature in a simple, user-friendly interface.",
    image: "/images/projects/image3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/umeshh-kuumar/Weather-Project",
    previewUrl: "https://weather-project-nu-lemon.vercel.app/",
  },
  {
    id: 6,
    title: "TO DO LIST",
    description: "A responsive to-do list app that lets users add, complete, and delete tasks with real-time updates.",
    image: "/images/projects/image4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/umeshh-kuumar/to-do-list-project",
    previewUrl: "https://to-do-list-project-beta-five.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found for this category.</p>
          </div>
        )}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/umeshh-kuumar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Projects on GitHub
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
