// import React, { useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// import "./App.css";

// import NavBar from "./components/navbar/NavBar.jsx";
// import HeroSection from "./components/heroSection/HeroSection.jsx";
// import FeatureSection from "./components/featureSection/FeatureSection.jsx";
// function App() {
//   const { scrollYProgress } = useScroll();
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

//   return (
//     <>
//       <div className="min-h-screen bg-[#0B0F11] text-white overflow-x-hidden">
//         <NavBar />
//         {/* Hero Section */}
//         <motion.div style={{ opacity, scale }}>
//           <HeroSection />
//         </motion.div>

//         <FeatureSection />
//       </div>
//     </>
//   );
// }
// export default App;

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./App.css";

import NavBar from "./components/navbar/NavBar.jsx";
import HeroSection from "./components/heroSection/HeroSection.jsx";
import NasaApproved from "./components/acknowledge/NasaApproved.jsx";
import FeatureSection from "./components/featureSection/FeatureSection.jsx";
import CodeEditor from "./components/codeEditor/CodeEditor.jsx";

function App() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <>
      <div className="min-h-screen bg-[#0B0F11] text-white overflow-x-hidden">
        <NavBar />

        <motion.div style={{ opacity, scale }}>
          <HeroSection />
        </motion.div>

        {/* <FeatureSection /> */}

        <NasaApproved />
        <CodeEditor/>
      </div>
    </>
  );
}

export default App;
