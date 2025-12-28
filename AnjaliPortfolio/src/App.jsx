

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
// import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
// import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

// Add new imports ⬇️
import GithubStats from "./components/GithubStats";
import GithubHeatmap from "./components/GithubHeatmap";
import Leetstat from "./components/leetstat";

const App = () => {
  return (
    <div className="bg-[#050414] relative overflow-hidden">

      {/* Blurry glow blob */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      <div className="relative pt-20 z-10">
        <Navbar />
        <About />
        <Skills />
        {/* <CodingProfiles />  */}
         {/* <div className="min-h-screen p-6 bg-gray-50 dark:bg-[#121212] transition-colors">
      <div className="max-w-4xl mx-auto">
        <GithubStats username="AnjaliiRamesh" />
        <GithubHeatmap username="AnjaliiRamesh" />
        <Leetstat username="anjaliramesh14012005" />
      </div>
    </div> */}

    {/* Coding Profiles Section */}
<section className="relative min-h-screen p-6">
  {/* Background Grid */}
  <div className="absolute inset-0 
                  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
                      linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                  bg-[size:14px_24px] 
                  [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] 
                  z-0">
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-white mb-8 text-center">
      Coding Activity & Stats
    </h1>

    <div className="flex flex-col ">
      <GithubStats username="AnjaliiRamesh" />
      <GithubHeatmap username="AnjaliiRamesh" />
      <Leetstat username="anjaliramesh14012005" />
    </div>
  </div>
</section>

        <Work />
        {/* <Experience /> */}
        {/* <Education /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
