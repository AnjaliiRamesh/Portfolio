
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
