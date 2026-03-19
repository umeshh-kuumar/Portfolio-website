"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-6">
        {/* Frontend Skills */}
        <div className="border-l-4 border-blue-400 pl-4">
          <h4 className="font-semibold text-blue-400 mb-3 text-sm uppercase tracking-wider">Frontend</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 text-blue-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-blue-300/60 hover:bg-blue-500/30 transition-all duration-200">React</span>
            <span className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 text-blue-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-blue-300/60 hover:bg-blue-500/30 transition-all duration-200">Next.js</span>
            <span className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 text-blue-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-blue-300/60 hover:bg-blue-500/30 transition-all duration-200">Vite</span>
            <span className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 text-blue-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-blue-300/60 hover:bg-blue-500/30 transition-all duration-200">TypeScript</span>
            <span className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 text-blue-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-blue-300/60 hover:bg-blue-500/30 transition-all duration-200">Tailwind CSS</span>
            <span className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 text-blue-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-blue-300/60 hover:bg-blue-500/30 transition-all duration-200">JavaScript</span>
            <span className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 text-blue-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-blue-300/60 hover:bg-blue-500/30 transition-all duration-200">HTML5</span>
            <span className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 text-blue-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-blue-300/60 hover:bg-blue-500/30 transition-all duration-200">CSS3</span>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="border-l-4 border-purple-400 pl-4">
          <h4 className="font-semibold text-purple-400 mb-3 text-sm uppercase tracking-wider">Backend</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gradient-to-r from-purple-500/20 to-purple-400/10 border border-purple-400/30 text-purple-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-purple-300/60 hover:bg-purple-500/30 transition-all duration-200">Node.js</span>
            <span className="bg-gradient-to-r from-purple-500/20 to-purple-400/10 border border-purple-400/30 text-purple-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-purple-300/60 hover:bg-purple-500/30 transition-all duration-200">Express.js</span>
            <span className="bg-gradient-to-r from-purple-500/20 to-purple-400/10 border border-purple-400/30 text-purple-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-purple-300/60 hover:bg-purple-500/30 transition-all duration-200">PostgreSQL</span>
            <span className="bg-gradient-to-r from-purple-500/20 to-purple-400/10 border border-purple-400/30 text-purple-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-purple-300/60 hover:bg-purple-500/30 transition-all duration-200">SQL</span>
            <span className="bg-gradient-to-r from-purple-500/20 to-purple-400/10 border border-purple-400/30 text-purple-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-purple-300/60 hover:bg-purple-500/30 transition-all duration-200">Spring Boot</span>
            <span className="bg-gradient-to-r from-purple-500/20 to-purple-400/10 border border-purple-400/30 text-purple-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-purple-300/60 hover:bg-purple-500/30 transition-all duration-200">Firebase</span>
          </div>
        </div>

        {/* Tools & Other */}
        <div className="border-l-4 border-pink-400 pl-4">
          <h4 className="font-semibold text-pink-400 mb-3 text-sm uppercase tracking-wider">Tools & Workflow</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gradient-to-r from-pink-500/20 to-pink-400/10 border border-pink-400/30 text-pink-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-pink-300/60 hover:bg-pink-500/30 transition-all duration-200">Git</span>
            <span className="bg-gradient-to-r from-pink-500/20 to-pink-400/10 border border-pink-400/30 text-pink-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-pink-300/60 hover:bg-pink-500/30 transition-all duration-200">GitHub</span>
            <span className="bg-gradient-to-r from-pink-500/20 to-pink-400/10 border border-pink-400/30 text-pink-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-pink-300/60 hover:bg-pink-500/30 transition-all duration-200">VS Code</span>
            <span className="bg-gradient-to-r from-pink-500/20 to-pink-400/10 border border-pink-400/30 text-pink-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-pink-300/60 hover:bg-pink-500/30 transition-all duration-200">IntelliJ</span>
            <span className="bg-gradient-to-r from-pink-500/20 to-pink-400/10 border border-pink-400/30 text-pink-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-pink-300/60 hover:bg-pink-500/30 transition-all duration-200">Clerk Auth</span>
            <span className="bg-gradient-to-r from-pink-500/20 to-pink-400/10 border border-pink-400/30 text-pink-200 px-3 py-1.5 rounded-md text-sm font-medium hover:border-pink-300/60 hover:bg-pink-500/30 transition-all duration-200">REST APIs</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div className="border-l-4 border-blue-400 pl-4 py-3 group hover:bg-blue-500/5 transition-all duration-200 rounded-r-md">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-white text-base group-hover:text-blue-300 transition-colors">B.Tech in Computer Science</h4>
              <p className="text-blue-300 text-sm mt-1">St Andrews Institute of Technology and Management, Gurugram</p>
            </div>
            <span className="text-xs font-mono text-gray-500 ml-2 whitespace-nowrap">2022 - 2025</span>
          </div>
          <div className="mt-2 inline-block px-2 py-1 bg-blue-500/20 border border-blue-400/40 rounded text-xs text-blue-200 font-medium">
            Completed
          </div>
        </div>
        <div className="border-l-4 border-purple-400 pl-4 py-3 group hover:bg-purple-500/5 transition-all duration-200 rounded-r-md">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-white text-base group-hover:text-purple-300 transition-colors">Diploma in Electronics & Communication Engineering</h4>
              <p className="text-purple-300 text-sm mt-1">Guru Nanak Dev Institute of Technology</p>
            </div>
            <span className="text-xs font-mono text-gray-500 ml-2 whitespace-nowrap">2019 - 2022</span>
          </div>
          <div className="mt-2 inline-block px-2 py-1 bg-purple-500/20 border border-purple-400/40 rounded text-xs text-purple-200 font-medium">
            Completed
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <div className="space-y-2">
        <div className="border-l-4 border-lime-400 pl-4 py-2 group hover:bg-lime-500/5 transition-all duration-200 rounded-r-md">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-white text-base group-hover:text-lime-300 transition-colors">
                Artificial Intelligence Fundamentals
              </h4>
              <p className="text-lime-300 text-sm mt-1">IBM</p>
            </div>
            <div className="flex flex-col items-end ml-4">
              <span className="text-xs font-mono text-gray-500 whitespace-nowrap">
                Nov 2025
              </span>
              <div className="mt-2 inline-block px-2 py-1 bg-lime-500/20 border border-lime-400/40 rounded text-xs text-lime-200 font-medium">
                Verified
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-red-400 pl-4 py-2 group hover:bg-red-500/5 transition-all duration-200 rounded-r-md">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-white text-base group-hover:text-red-300 transition-colors">Deloitte Australia - Technology Job Simulation</h4>
              <p className="text-red-300 text-sm mt-1">Forage</p>
            </div>
            <div className="flex flex-col items-end ml-4">
              <span className="text-xs font-mono text-gray-500 ml-2 whitespace-nowrap">June 2025</span>
              <div className="mt-2 inline-block px-2 py-1 bg-red-500/20 border border-red-400/40 rounded text-xs text-red-200 font-medium">
                Verified
              </div>
            </div>
          </div>

        </div>

        <div className="border-l-4 border-blue-400 pl-4 py-2 group hover:bg-blue-500/5 transition-all duration-200 rounded-r-md">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-white text-base group-hover:text-blue-300 transition-colors">AWS APAC - Solutions Architecture Job Simulation</h4>
              <p className="text-blue-300 text-sm mt-1">Forage</p>
            </div>

            <div className="flex flex-col items-end ml-4">
              <span className="text-xs font-mono text-gray-500 ml-2 whitespace-nowrap">June 2025</span>
              <div className="mt-2 inline-block px-2 py-1 bg-blue-500/20 border border-blue-400/40 rounded text-xs text-blue-200 font-medium">
                Verified
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-pink-400 pl-4 py-2 group hover:bg-pink-500/5 transition-all duration-200 rounded-r-md">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-white text-base group-hover:text-pink-300 transition-colors">Advanced Java Programming</h4>
              <p className="text-pink-300 text-sm mt-1">Anudip</p>
            </div>
            <div className="flex flex-col items-end ml-4">
              <span className="text-xs font-mono text-gray-500 ml-2 whitespace-nowrap">Mar 2024 - Oct 2024</span>
              <div className="mt-2 inline-block px-2 py-1 bg-pink-500/20 border border-pink-400/40 rounded text-xs text-pink-200 font-medium">
                Completed
              </div>
            </div>
          </div>

        </div>

        <div className="border-l-4 border-green-400 pl-4 py-2 group hover:bg-green-500/5 transition-all duration-200 rounded-r-md">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-white text-base group-hover:text-green-300 transition-colors">JavaScript Certificate</h4>
              <p className="text-green-300 text-sm mt-1">Scaler Academy</p>
            </div>
            <div className="flex flex-col items-end ml-4">
              <span className="text-xs font-mono text-gray-500 ml-2 whitespace-nowrap">Feb 2024</span>
              <div className="mt-2 inline-block px-2 py-1 bg-green-500/20 border border-green-400/40 rounded text-xs text-green-200 font-medium">
                Verified
              </div>
            </div>
          </div>

        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto">
            Hi! I'm Umesh, a passionate full-stack developer who loves building interactive, user-focused web applications. I thrive on solving real-world problems with clean code and modern technologies, specializing in creating scalable, maintainable, and beautiful digital experiences. Driven by curiosity and a desire to make a positive impact through technology, I believe in continuous learning and enjoy collaborating in dynamic, team-oriented environments.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500
              w-72 h-72  md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]">
              <Image
                src="/images/about.png"
                alt="About Umesh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className=" lg:pt-4 text-left flex flex-col h-full">
            <div className="flex flex-row flex-wrap gap-2">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certification")}
                active={tab === "certification"}
              >
                Certification
              </TabButton>
            </div>
            <div className="mt-8 min-h-[120px]">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;