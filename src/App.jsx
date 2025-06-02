
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Toaster } from 'react-hot-toast';


import "./App.css";

import NavBar from "./components/navbar/NavBar.jsx";
import HeroSection from "./components/heroSection/HeroSection.jsx";
import NasaApproved from "./components/acknowledge/NasaApproved.jsx";
import FeatureSection from "./components/featureSection/FeatureSection.jsx";
import CodeEditor from "./components/codeEditor/CodeEditor.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const codeEditorRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToEditor = () => {
    codeEditorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div
      className="min-h-screen bg-[#0B0F11] text-white overflow-x-hidden"
      style={{ overflowY: "scroll" }} // force scrollbar always visible
    >
      <NavBar />
            <Toaster position="bottom-right" reverseOrder={false} />


      {mounted ? (
        <motion.div style={{ opacity, scale }}>
          <HeroSection onTryClick={scrollToEditor} />
        </motion.div>
      ) : (
        <HeroSection onTryClick={scrollToEditor} />
      )}

      <FeatureSection />

      <section
        className="py-20 px-4 relative"
        ref={codeEditorRef}
        id="code-editor"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-3xl"
          style={{ willChange: "transform" }}
        ></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              संस्कृतम् <span className="text-white">Playground</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of Sanskrit syntax. Write, edit, and execute
              code in the world's most logical programming language.
            </p>
          </motion.div>

          <CodeEditor />
        </div>
      </section>

      <NasaApproved />

      <Footer/>
    </div>
  );
}

export default App;
