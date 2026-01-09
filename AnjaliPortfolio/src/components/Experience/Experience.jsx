// import React from "react";
// import { experiences } from "../../constants"; // Import your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* Company Logo/Image */}
//                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Role, Company Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400">{experience.desc}</p>
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;


// import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeft, ChevronRight, Award, Briefcase } from "lucide-react";

// const Experience = () => {
//   const [activeTab, setActiveTab] = useState("experience");

//   // Custom arrows for slider
//   const SlickArrow = ({ className, onClick, icon }) => (
//     <div
//       className={`${className} z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 bg-opacity-80 backdrop-blur-sm text-white cursor-pointer transition-all hover:bg-blue-500 hover:scale-110 before:hidden`}
//       onClick={onClick}
//     >
//       {icon}
//     </div>
//   );

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     nextArrow: <SlickArrow icon={<ChevronRight size={20} />} />,
//     prevArrow: <SlickArrow icon={<ChevronLeft size={20} />} />,
//     dotsClass: "slick-dots custom-dots",
//     appendDots: (dots) => (
//       <div>
//         <ul className="flex gap-2 justify-center mt-8">{dots}</ul>
//       </div>
//     ),
//     customPaging: () => (
//       <div className="w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-400 transition-all"></div>
//     ),
//   };

//   const experiences = [
//     {
//       title: "Frontend Developer - Prodigy Infotech",
//       images: "prodigy.png",
//       date: "Jan 2024 - Feb 2024",
//       description:
//         "Built scalable UI with React & Tailwind, integrated REST APIs, and optimized performance.",
//       learned:
//         "Learned React, API integration, and UI performance optimization with Tailwind CSS.",
//     },
//     {
//       title:
//         "Campus Ambassador - International Model United Nations Association",
//       images: "imunalogo.jpg",
//       date: "Jun 2024 - Aug 2024",
//       description:
//         "Promoted IMUNA conferences, engaged students, and strengthened leadership and event management skills.",
//       learned: "Improved Leadership, Communication, and Event Management skills.",
//     },
//   ];

//   const certifications = [
//     {
//       id: "1",
//       title: "Certification of Completion - C",
//       image: "C.jpeg",
//       issued_by: "IIT Bombay",
//       date: "Jan 2024",
//       logo: "iitb.png",
//       desc:
//         "Completed C programming certification covering loops, functions, pointers, arrays, and memory management with hands-on exercises.",
//     },
//     {
//       id: "2",
//       title: "Career Essentials in Data Analytics",
//       image: "dataAnalytics.png",
//       issued_by: "Microsoft & LinkedIn",
//       date: "Feb 2025",
//       logo: "microsoft.png",
//       desc:
//         "Developed expertise in data analysis, visualization, SQL, and Python.",
//     },
//     {
//       id: "3",
//       title: "DSA with OOPS in C++",
//       image: "DSA.jpeg",
//       issued_by: "Udemy",
//       date: "Oct 2024",
//       logo: "Udemy-Logo.png",
//       desc:
//         "Mastered Data Structures, Algorithms, and Object-Oriented Programming in C++.",
//     },
//     {
//       id: "4",
//       title: "Machine Learning",
//       image: "ML.jpeg",
//       issued_by: "Udemy",
//       date: "Nov 2024",
//       logo: "Udemy-Logo.png",
//       desc:
//         "Learned ML concepts including regression, classification, clustering, and NLP.",
//     },
//     {
//       id: "5",
//       title: "SQL BootCamp",
//       image: "SQL.jpeg",
//       issued_by: "Udemy",
//       date: "Feb 2025",
//       logo: "Udemy-Logo.png",
//       desc:
//         "Mastered SQL, database design, and querying using MySQL and SQLite.",
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="py-24 text-white bg-gradient-to-b from-gray-900 to-gray-800"
//     >
//       <div className="w-full max-w-6xl mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
//             Professional{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
//               Journey
//             </span>
//           </h2>
//           <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
//             Explore my professional experiences and achievements that have
//             shaped my career path
//           </p>
//           <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-6"></div>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="flex bg-gray-800 p-1 rounded-full border border-gray-700">
//             <button
//               onClick={() => setActiveTab("experience")}
//               className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
//                 activeTab === "experience"
//                   ? "bg-blue-600 text-white"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               <Briefcase size={18} />
//               Experience
//             </button>
//             <button
//               onClick={() => setActiveTab("certifications")}
//               className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
//                 activeTab === "certifications"
//                   ? "bg-blue-600 text-white"
//                   : "text-gray-300 hover:text-white"
//               }`}
//             >
//               <Award size={18} />
//               Certifications
//             </button>
//           </div>
//         </div>

//         {/* Experience */}
//         {activeTab === "experience" && (
//           <div className="grid md:grid-cols-2 gap-8">
//             {experiences.map((exp, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-xl hover:-translate-y-1 transition"
//               >
//                 <div className="flex gap-5">
//                   <img
//                     src={exp.images}
//                     alt={exp.title}
//                     className="w-16 h-16 object-contain bg-gray-700 rounded-xl p-2"
//                   />
//                   <div>
//                     <h3 className="text-xl font-bold">{exp.title}</h3>
//                     <span className="inline-block mt-1 px-3 py-1 text-sm bg-blue-900/30 rounded-full text-blue-300">
//                       {exp.date}
//                     </span>
//                     <p className="mt-3 text-gray-300">{exp.description}</p>
//                     <p className="mt-3 text-sm text-amber-400">
//                       Skills Gained: {exp.learned}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Certifications */}
//         {activeTab === "certifications" && (
//           <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-xl">
//             <Slider {...settings}>
//               {certifications.map((cert) => (
//                 <div key={cert.id} className="px-4">
//                   <div className="flex flex-col md:flex-row gap-8 items-center">
//                     <img
//                       src={cert.image}
//                       alt={cert.title}
//                       className="w-full md:w-2/5 h-48 object-cover rounded-lg"
//                     />
//                     <div className="md:w-3/5">
//                       <div className="flex items-center gap-3 mb-4">
//                         <img
//                           src={cert.logo}
//                           alt={cert.issued_by}
//                           className="w-10 h-10 bg-white rounded-md p-1"
//                         />
//                         <span className="text-blue-300">
//                           {cert.issued_by}
//                         </span>
//                       </div>
//                       <h3 className="text-2xl font-bold mb-2">
//                         {cert.title}
//                       </h3>
//                       <span className="inline-block mb-4 px-3 py-1 bg-blue-900/30 rounded-full text-blue-300 text-sm">
//                         {cert.date}
//                       </span>
//                       <p className="text-gray-300">{cert.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Experience;

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Award, Briefcase } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const SlickArrow = ({ className, onClick, icon }) => (
    <div
      className={`${className} z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white cursor-pointer hover:bg-blue-500 before:hidden`}
      onClick={onClick}
    >
      {icon}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SlickArrow icon={<ChevronRight size={20} />} />,
    prevArrow: <SlickArrow icon={<ChevronLeft size={20} />} />,
  };

  const experiences = [
    {
      title: "Frontend Developer - CodSoft",
      image: "codsoft.png",
      date: "Jan 2024 - Feb 2024",
      description:
        "Built responsive UI components using React and Tailwind CSS.",
      learned: "React, Tailwind CSS, Component Architecture",
    },
    {
      title: "Frontend Developer - Prodigy Infotech",
      image: "prodigy.png",
      date: "Jan 2024 - Feb 2024",
      description:
        "Built scalable UI with React & Tailwind, integrated REST APIs.",
      learned: "API Integration, Performance Optimization",
    },
    {
      title:
        "Campus Ambassador - International Model United Nations Association",
      image: "imunalogo.jpg",
      date: "Jun 2024 - Aug 2024",
      description:
        "Promoted IMUNA conferences and enhanced leadership skills.",
      learned: "Leadership, Communication, Event Management",
    },
  ];

  const certifications = [
    {
      title: "Certification of Solution Architecture",
      image: "AWS.png",
      issued_by: "Forage",
      date: "Jan 2024",
      logo: "awslogo.png",
      desc:
        "Designed a simple, scalable AWS hosting architecture using Elastic Beanstalk to resolve performance issues and support rapid business growth. Explained the architecture and cost model in plain, non-technical language, ensuring the client clearly understood system behavior and month-to-month cost variations.",

    },
    {
      title: "Career Essentials in Data Analytics",
      image: "dataAnalytics.png",
      issued_by: "Microsoft & LinkedIn",
      date: "Feb 2025",
      logo: "microsoft.png",
      desc:
        "Learned data analysis, visualization, SQL, and Python.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Professional Journey</h2>
          <p className="text-gray-400 mt-4">
            Explore my professional experiences and achievements
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-800 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-3 rounded-full flex items-center gap-2 ${
                activeTab === "experience"
                  ? "bg-purple-600"
                  : "text-gray-300"
              }`}
            >
              <Briefcase size={18} /> Experience
            </button>

            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-6 py-3 rounded-full flex items-center gap-2 ${
                activeTab === "certifications"
                  ? "bg-purple-600"
                  : "text-gray-300"
              }`}
            >
              <Award size={18} /> Certifications
            </button>
          </div>
        </div>

        {/* Experience */}
        {activeTab === "experience" && (
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <span className="text-sm text-purple-400">{exp.date}</span>
                <p className="text-gray-300 mt-3">{exp.description}</p>
                <p className="text-sm text-amber-400 mt-3">
                  Skills Gained: {exp.learned}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {activeTab === "certifications" && (
          <div className="bg-gray-800 p-8 rounded-xl">
            <Slider {...settings}>
              {certifications.map((cert, i) => (
                <div key={i} className="px-4">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-48 rounded-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-bold">{cert.title}</h3>
                      <p className="text-purple-400">
                        {cert.issued_by} • {cert.date}
                      </p>
                      <p className="text-gray-300 mt-4">{cert.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
