"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
const projects = [
  {
    title: "Breathefree: Lung Health App",
    description:
      " A smart app to monitor, track, and improve your lung health with personalized insights and reminders.",
    image: "/images/project1.png",
    link: "https://play.google.com/store/apps/details?id=breathefree.lung.health.asthma.breathing",

    technologies: ["React", "Node.js", "MongoDB"],
    category: "Web Application",
  },
  {
    title: "Vestige Online Shopping App",
    description:
      "A convenient platform to explore and purchase a wide range of Vestige health, wellness, and personal care products online.",
    link: "https://play.google.com/store/apps/details?id=com.vestigeshopping",

    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Landing Page",
  },
  {
    title: "Cricket Line Guru",
    description:
      "A real-time cricket score app providing live match updates, ball-by-ball commentary, and match insights.",
    image: "/images/project3.png",
    link: "https://play.google.com/store/apps/details?id=com.app.cricketapp",

    technologies: ["React", "Stripe", "Firebase"],
    category: "E-commerce",
  },
  {
    title: "SamratPay",
    description:
      "A secure and reliable platform for seamless digital payments and financial transactions.",
    image: "/images/project4.png",
    link: "https://www.samratpay.com/",
    technologies: ["Next.js", "Three.js", "GSAP"],
    category: "Portfolio",
  },
  {
    title: "Swan Travels",
    description:
      "A trusted travel service offering comfortable and hassle-free tour and transportation solutions.",
    image: "/images/project5.png",
    link: "https://www.swantravels.in/",
    technologies: ["Vue.js", "Express", "MySQL"],
    category: "Web Application",
  },
  {
    title: "DriverStop - Delivery Drivers",
    description:
      "UI/UX design for mobile application with user-centered design principles.",
    image: "/images/project6.png",
    link: "http://driverstop.co.uk/",
    technologies: ["Figma", "Sketch", "Adobe XD"],
    category: "UI/UX Design",
  },
  {
    title: "DriverStop - Delivery Drivers",
    description:
      "UI/UX design for mobile application with user-centered design principles.",
    image: "/images/project6.png",
    link: "http://driverstop.co.uk/",
    technologies: ["Figma", "Sketch", "Adobe XD"],
    category: "UI/UX Design",
  },
  {
    title: "Barosi",
    description:
      "A farm-to-table brand delivering authentic, fresh, and natural food products directly from farms.",
    image: "/images/project6.png",
    link: "https://play.google.com/store/apps/details?id=com.barosi.app",
    technologies: ["Figma", "Sketch", "Adobe XD"],
    category: "UI/UX Design",
  },
  {
    title: "TRIVIA 360: Quiz Game",
    description:
      "A fun and challenging quiz game with multiple categories to test your knowledge and IQ.",
    image: "/images/project6.png",
    link: "http://driverstop.co.uk/",
    technologies: ["Figma", "Sketch", "Adobe XD"],
    category: "UI/UX Design",
  },
  {
    title: "DriverStop - Delivery Drivers",
    description:
      "UI/UX design for mobile application with user-centered design principles.",
    image: "/images/project6.png",
    link: "https://play.google.com/store/apps/details?id=smartowlapps.com.quiz360",
    technologies: ["Figma", "Sketch", "Adobe XD"],
    category: "UI/UX Design",
  },
];

export default function Projects() {
  return (
    <div className="bg-black text-white min-h-screen pt-24">
      {/* Hero Section */}
      <div className="relative py-20 px-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="relative container mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-gray-300 border border-gray-700">
            Our Work
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of innovative solutions, cutting-edge
            designs, and successful implementations that have helped businesses
            transform their digital presence.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-5 pb-20 pt-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 border border-gray-800/50 hover:border-gray-700/50"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-gray-700">
                    {project.category}
                  </span>
                </div>

                {/* Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/70 backdrop-blur-sm rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/70 backdrop-blur-sm rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    ></a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-300 border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors duration-300 group/btn"
                >
                  View Project
                  <ExternalLink
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Let's collaborate and bring your vision to life with our expertise
              and innovative solutions.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
