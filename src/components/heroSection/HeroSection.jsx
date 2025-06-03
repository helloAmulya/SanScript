// import React from "react";
// import { motion } from "framer-motion";
// import {  Sparkles, Zap } from "lucide-react";
// import AnimatedText from "../AnimatedText.jsx";
// import { CodeSandboxLogoIcon, Link1Icon } from "@radix-ui/react-icons";

// function HeroSection() {
//   return (
//     <section className="min-h-screen flex items-start justify-center px-4 pt-20 relative overflow-hidden">
//       {/* bg blur effect */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-[#0B0F11] to-[#0B0F11]"></div>
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl"></div>

//       <div className=" flex flex-col items-center max-w-6xl mx-auto text-center relative z-10 md:mt-8 mt-14">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="flex items-center justify-center w-fit text-[12px] font-semibold mb-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-400/30 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm rounded-full px-3 py-[2px] border"
//         >
//           <Sparkles className="w-4 h-4 mr-2" />
//           Ancient Wisdom, Modern Syntax
//         </motion.div>

//         <div className="mb-8">
//           <AnimatedText
//             text="संस्कृतम्"
//             className="text-6xl tracking-wide md:tracking-[0.17em] md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4 "
//           />
//           <AnimatedText
//             text="Programming Language"
//             className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-300"
//             delay={0.5}
//           />
//         </div>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
//         >
//           Where{" "}
//           <span className="text-blue-400 font-semibold relative">
//             ancient logic
//             <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/50"></span>
//           </span>{" "}
//           meets{" "}
//           <span className="text-cyan-400 font-semibold relative">
//             modern computing
//             <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400/50"></span>
//           </span>
//           . Experience programming in the world's most systematic language,
//           designed for precision and clarity.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//           className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
//         >
//           <div className="flex flex-wrap gap-4">
//             {/* Filled style */}
//             <button className="flex items-center gap-2 bg-[#1E685F] text-white hover:bg-[#207E73] px-6 py-2 rounded-full text-base font-medium backdrop-blur-md transition-all duration-300 shadow-md hover:shadow-[#12A594]">
//               <CodeSandboxLogoIcon className="w-5 h-5" />
//               <span>Try Sanskrit Code</span>
//             </button>

//             {/* Outlined style*/}
//             <button className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-500/10 hover:text-white px-6 py-2 rounded-full text-base font-medium backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-blue-500/20">
//               <Link1Icon className="w-5 h-5" />
//               <span>View Example</span>
//             </button>
//           </div>
//         </motion.div>

//         {/* code Preview */}
//          <motion.div
//           initial={{ opacity: 0, y: 50, scale: 0.9 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1, delay: 1.4 }}
//           className="w-full mx-auto"
//         >
//           <div className="bg-[#0A0E10]/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 shadow-2xl shadow-blue-500/10">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex space-x-2">
//                 <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                 <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//               </div>
//               <span className="text-sm text-gray-400 flex items-center gap-2">
//                 <Zap className="w-4 h-4 text-blue-400" />
//                 hello_world.sanskrit
//               </span>
//             </div>
//             <pre className="text-left text-sm md:text-base overflow-x-auto">
//               <code className="text-gray-300">
//                 <span className="text-blue-400">प्रकार्यम्</span> <span className="text-cyan-400">मुख्यम्</span>() {`{`}<br/>
//                 &nbsp;&nbsp;<span className="text-teal-400">प्रिंट</span>(<span className="text-green-400">"नमस्ते विश्व!"</span>);<br/>
//                 &nbsp;&nbsp;<span className="text-purple-400">वापसी</span> <span className="text-yellow-400">०</span>;<br/>
//                 {`}`}
//               </code>
//             </pre>
//           </div>
//         </motion.div>

//         {/* main divs */}
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

import React from "react";

import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import AnimatedText from "../AnimatedText.jsx"; // Ensure this component handles its own text animation with Framer Motion internally
import { CodeSandboxLogoIcon, Link1Icon } from "@radix-ui/react-icons";

function HeroSection({ onTryClick }) {
  return (
    <section className="min-h-screen flex items-start justify-center px-4 pt-20 relative overflow-hidden">
      {/* bg blur effect - These are purely CSS animations and are fine as is */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-[#0B0F11] to-[#0B0F11]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl"></div>

      <div className=" flex flex-col items-center max-w-6xl mx-auto text-center relative z-10 md:mt-8 mt-14">
        {/* Badge Animation - This is correctly animated with motion.div */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center w-fit text-[12px] font-semibold mb-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-400/30 hover:from-blue-500/30 hover:to-cyan-500/30 backdrop-blur-sm rounded-full px-3 py-[2px] border"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Ancient Wisdom, Modern Syntax
        </motion.div>

        {/* AnimatedText components - Ensure their internal logic handles animation */}
        <div className="mb-8">
          <AnimatedText
            text="संस्कृतम्"
            className="text-6xl tracking-wide md:tracking-[0.17em] md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4 "
          />
          <AnimatedText
            text="Programming Language"
            className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-300"
            delay={0.5} // This delay should be honored by AnimatedText's internal animation
          />
        </div>

        {/* Paragraph Animation - Correctly animated with motion.p */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Where{" "}
          <span className="text-blue-400 font-semibold relative">
            ancient logic
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/50"></span>
          </span>{" "}
          meets{" "}
          <span className="text-cyan-400 font-semibold relative">
            modern computing
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400/50"></span>
          </span>
          . Experience programming in the world's most systematic language,
          designed for precision and clarity.
        </motion.p>

        {/* Buttons - LEGIT FIX APPLIED HERE */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          {/* Filled style button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }} // Starts after paragraph
            className="flex items-center gap-2 bg-[#1E685F] text-white hover:bg-[#207E73] px-6 py-2 rounded-full text-base font-medium backdrop-blur-md transition-all duration-300 shadow-md hover:shadow-[#0d2b27]"
          >
            <CodeSandboxLogoIcon className="w-5 h-5" />
            {/* <span>Try Sanskrit Code</span> */}
            <a
              href="#code-editor"
              onClick={(e) => {
                e.preventDefault();
                onTryClick();
              }}
              className="  text-white  transition"
            >
              Try Sanskrit Code
            </a>
          </motion.button>

          {/* Outlined style button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }} // Staggered slightly after the first button
            className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-500/10 hover:text-white px-6 py-2 rounded-full text-base font-medium backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-blue-500/20"
          >
            <Link1Icon className="w-5 h-5" />
            <span>View Example</span>
          </motion.button>
        </div>

        {/* Code Preview Animation - Correctly animated with motion.div */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.4 }} // Starts after buttons
          className="w-full mx-auto"
        >
          <div className="bg-[#0A0E10]/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 shadow-2xl shadow-blue-500/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                hello_world.sanskrit
              </span>
            </div>
            <pre className="text-left text-sm md:text-base overflow-x-auto">
              <code className="text-gray-300">
                <span className="text-blue-400">प्रकार्यम्</span>{" "}
                <span className="text-cyan-400">मुख्यम्</span>() {`{`}
                <br />
                &nbsp;&nbsp;<span className="text-teal-400">प्रिंट</span>(
                <span className="text-green-400">"नमस्ते विश्व!"</span>);
                <br />
                &nbsp;&nbsp;<span className="text-purple-400">वापसी</span>{" "}
                <span className="text-yellow-400">०</span>;<br />
                {`}`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
