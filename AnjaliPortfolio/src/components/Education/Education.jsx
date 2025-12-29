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
