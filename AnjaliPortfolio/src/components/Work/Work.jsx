
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaServer,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Geo Alert",
    image: "/geoalert.png",
    description:
      "A full-stack disaster alert platform with real-time location-based notifications and interactive maps.",
    skills: [FaReact, FaNodeJs, FaDatabase, FaCss3Alt],
    link: "https://github.com/preetcoder12/GeoAlert",
  },
  {
    id: 2,
    name: "TruckByte",
    image: "/truckbyte.png",
    description:
      "A trucking management system to assign, track, and manage trucks with role-based access.",
    skills: [FaReact, FaNodeJs, FaDatabase, FaCss3Alt],
    link: "https://github.com/preetcoder12/Load_Mate",
  },
  {
    id: 3,
    name: "Netflix Clone",
    image: "/netflixpro.png",
    description:
      "A Netflix-inspired streaming platform with authentication and payments.",
    skills: [FaReact, FaNodeJs, FaDatabase, FaCss3Alt],
    link: "https://github.com/preetcoder12/Netflix_preet",
  },
  {
    id: 4,
    name: "AI Imagen",
    image: "/text_2_img.png",
    description:
      "AI-powered application that generates images from text prompts using APIs.",
    skills: [FaReact, FaNodeJs, FaDatabase],
    link: "https://github.com/preetcoder12/RazorPay-clone",
  },
  {
    id: 5,
    name: "Blog Sphere",
    image: "/blogpro.png",
    description:
      "A blogging platform where users can write, edit, and comment on articles.",
    skills: [FaReact, FaNodeJs, FaDatabase],
    link: "https://github.com/preetcoder12/Blog-Sphere",
  },
  {
    id: 6,
    name: "Chat Application",
    image: "/chatpro.png",
    description:
      "A real-time chat app using WebSockets with authentication.",
    skills: [FaHtml5, FaJs, FaServer, FaCss3Alt],
    link: "https://github.com/preetcoder12/Chat_application-login-",
  },
];

// Framer Motion variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.35, duration: 0.8 },
  },
};

const Projects = () => {
  return (
    <section
      id="work"
      className="py-24 px-[8vw] bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Heading */}
      
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A curated selection of projects showcasing my skills in full-stack
          development
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={card} className="group">
            <div className="h-full bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:border-purple-500/40 transition-all">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Skills on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.skills.map((Icon, i) => (
                      <div
                        key={i}
                        className="bg-gray-900 p-3 rounded-full"
                      >
                        <Icon className="text-2xl text-purple-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Projects;
