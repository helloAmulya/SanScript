import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Docs() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      id="docs"
      className="min-h-screen  bg-[#0B0F11] text-white overflow-x-hidden px-6 py-12 flex flex-col justify-center items-center"
      style={{
        overflowY: "hidden",
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}
    >

      <div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-[#0B0F11] to-[#0B0F11]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl"></div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className=" text-5xl md:text-7xl md:text-center"
      >
      
        Coming Soon
      </motion.p>
    </div>
  );
}

export default Docs;
