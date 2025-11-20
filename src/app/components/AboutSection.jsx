"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-blue-400 mb-1">Frontend</h4>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-200">
            <li className="bg-gray-800 px-3 py-1 rounded-full">React</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">Next.js</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">vite</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">HTML5</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">CSS3</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">Tailwind CSS</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">JavaScript</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-purple-400 mb-1">Backend</h4>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-200">
            <li className="bg-gray-800 px-3 py-1 rounded-full">Node.js</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">Expressjs</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">PostgreSQL</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">Sql</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">Spring Boot</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">Firebase</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-pink-400 mb-1">Tools & Other</h4>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-200">
            <li className="bg-gray-800 px-3 py-1 rounded-full">Git</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">GitHub</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">VsCode</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">Intellij</li>
            <li className="bg-gray-800 px-3 py-1 rounded-full">Clerk</li>

          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-2">
        <div className="border-l-4 border-blue-500 pl-4 mb-2">
          <h4 className="font-semibold text-white">B.Tech in Computer Science</h4>
          <p className="text-blue-300 text-sm">St Andrews Institute of Technology and Management, Gurugram</p>
          <p className="text-gray-400 text-xs">2022 - 2025</p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4">
          <h4 className="font-semibold text-white">Diploma in Electronic and Communication Engineering</h4>
          <p className="text-purple-300 text-sm">Guru Nanak Dev institute of technology</p>
          <p className="text-gray-400 text-xs">2019 - 2022</p>
        </div>
      </div>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <div className="space-y-2">
        <div className="border-l-4 border-lime-500 pl-4">
          <h4 className="font-semibold text-white">Artificial Intelligence Fundamentals</h4>
          <p className="text-lime-300 text-sm">IBM</p>
          <p className="text-gray-400 text-xs">Issued Nov 2025</p>
        </div>
        <div className="border-l-4 border-red-500 pl-4">
          <h4 className="font-semibold text-white">Deloitte Australia - Technology  Job Simulation</h4>
          <p className="text-red-300 text-sm">forage</p>
          <p className="text-gray-400 text-xs">Issued June 2025</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-semibold text-white">AWS APAC - Solutions Architecture Job Simulation</h4>
          <p className="text-blue-300 text-sm">forage</p>
          <p className="text-gray-400 text-xs">Issued June 2025</p>
        </div>
        <div className="border-l-4 border-pink-500 pl-4">
          <h4 className="font-semibold text-white">Advanced Java Programming</h4>
          <p className="text-pink-300 text-sm">Anudip</p>
          <p className="text-gray-400 text-xs">Mar 2024 – Oct 2024</p>
        </div>
        <div className="border-l-4 border-green-500 pl-4 mb-2">
          <h4 className="font-semibold text-white">JavaScript Certificate</h4>
          <p className="text-green-300 text-sm">Scaler Academy</p>
          <p className="text-gray-400 text-xs">Issued Feb 2024</p>
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
