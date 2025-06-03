import React,{useEffect} from 'react'
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
    <motion.div
       
      id="docs"
      className="min-h-screen bg-[#0B0F11] text-white overflow-x-hidden px-6 py-12"
      style={{
        overflowY: "scroll",
        fontFamily: "'IBM Plex Sans', sans-serif",
      }} 
    >

      <motion.p
        initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1 }}
          className='text-4xl text-center'> Coming Soon</motion.p>
     
    </motion.div>
  );
}

export default Docs