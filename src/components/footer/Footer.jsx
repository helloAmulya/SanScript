
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Download, Mail, Github } from "lucide-react";
// import { Twitter } from "lucide-react"; 

// export default function Footer() {
//   const [showContact, setShowContact] = useState(false);


//   const backdropVariants = {
//     visible: { opacity: 1, pointerEvents: "auto" },
//     hidden: { opacity: 0, pointerEvents: "none" },
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>

//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { number: "5000+", label: "Years of Logic", sanskrit: "वर्षाणि" },
//               { number: "99.9%", label: "Precision Rate", sanskrit: "शुद्धता" },
//               { number: "∞", label: "Possibilities", sanskrit: "अनन्तता" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-300 text-lg">{stat.label}</div>
//                 <div className="text-blue-400 text-sm">{stat.sanskrit}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA  */}
//       <section className="py-20 px-4 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl"></div>
//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-6xl font-bold mb-8">
//               प्रारम्भः <span className="text-blue-400">करोतु</span>
//             </h2>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               अब समय आ गया है — C++ छोड़ो, Python भूलो। <br />
//               <span className="italic text-cyan-400">
//                 "संस्कृतम् एव समाधानम्।"
//               </span>
//               <br />
//               कम्पाइलर डाउनलोड करो, और कोड करते-करते आत्मबोध प्राप्त करो। 😉
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
//               <button className="backdrop-blur-md bg-white/10 border border-white/20   hover:text-[#00D3F2] transition-colors duration-300 rounded-full text-white px-6 py-3 text-base sm:text-lg flex items-center justify-center w-full sm:w-auto shadow-lg">
//                 <Download className="mr-2 w-5 h-5" />
//                 Special Message
//               </button>

//               <button className="backdrop-blur-md bg-[#AAECDA]/10 border border-[#AAECDA]/30 text-[#AAECDA]  hover:text-white transition-colors duration-300 rounded-full px-6 py-3 text-base sm:text-lg flex items-center justify-center w-full sm:w-auto shadow-lg">
//                 <Github className="mr-2 w-5 h-5" />
//                 View Documentation
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* footer in Footer */}
//       <footer className="py-12 px-4 border-t border-gray-800">
//         <div className="max-w-6xl mx-auto text-center">
//           <div
//             onClick={() => setShowContact(true)}
//             className="relative inline-block text-[16px] text-gray-500 font-mono cursor-pointer group select-none"
//             aria-label="Open contact modal"
//             role="button"
//             tabIndex={0}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" || e.key === " ") setShowContact(true);
//             }}
//           >
//             &lt;/&gt; with ❤️ by
//             <span className="ml-1 relative">
//               अमूल्य रत्न
//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
//             </span>
//           </div>
//         </div>
//       </footer>

//       {/* Contact open dialog */}
//       <motion.div
//         variants={backdropVariants}
//         initial="hidden"
//         animate={showContact ? "visible" : "hidden"}
//         onClick={() => setShowContact(false)}
//         className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//       >
//         <motion.div
//           variants={modalVariants}
//           initial="hidden"
//           animate={showContact ? "visible" : "hidden"}
//           onClick={(e) => e.stopPropagation()} // Prevent closing modal on clicking inside
//           className="bg-gray-900 rounded-xl p-8 max-w-md w-full mx-4"
//         >
//           <h2 className="text-3xl font-bold text-center mb-6">
//             <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Let's Connect
//             </span>
//           </h2>

//           <p className="text-gray-400 text-center mb-6">
//             Whether you have a project idea or just want to chat tech, I'm always open to interesting conversations.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-6">
//             <a
//               href="mailto:ratna.amulya98@gmail.com"
//               className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all text-purple-400"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Mail size={20} />
//               <span className="font-medium">Send an Email</span>
//             </a>

//             <a
//               href="https://x.com/helloAmulya"
//               className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all text-blue-400"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Twitter size={20} />
//               <span className="font-medium">DM on Twitter</span>
//             </a>
//           </div>

//           <button
//             onClick={() => setShowContact(false)}
//             className="mt-8 w-full py-3 bg-red-600 rounded-lg text-white font-semibold hover:bg-red-700 transition"
//           >
//             Close
//           </button>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }




import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Twitter } from "lucide-react";

export default function Footer() {
  const [showContact, setShowContact] = useState(false);

  const backdropVariants = {
    visible: { opacity: 1, pointerEvents: "auto" },
    hidden: { opacity: 0, pointerEvents: "none" },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "5000+", label: "Years of Logic", sanskrit: "वर्षाणि" },
              { number: "99.9%", label: "Precision Rate", sanskrit: "शुद्धता" },
              { number: "∞", label: "Possibilities", sanskrit: "अनन्तता" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
                <div className="text-blue-400 text-sm">{stat.sanskrit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              प्रारम्भः <span className="text-blue-400">करोतु</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              अब समय आ गया है — C++ छोड़ो, Python भूलो। <br />
              <span className="italic text-cyan-400">
                "संस्कृतम् एव समाधानम्।"
              </span>
              <br />
              कम्पाइलर डाउनलोड करो, और कोड करते-करते आत्मबोध प्राप्त करो। 😉
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
              <button className="backdrop-blur-md bg-white/10 border border-white/20 hover:text-[#00D3F2] transition-colors duration-300 rounded-full text-white px-6 py-3 text-base sm:text-lg flex items-center justify-center w-full sm:w-auto shadow-lg">
                <Download className="mr-2 w-5 h-5" />
                Special Message
              </button>

              <button className="backdrop-blur-md bg-[#AAECDA]/10 border border-[#AAECDA]/30 text-[#AAECDA] hover:text-white transition-colors duration-300 rounded-full px-6 py-3 text-base sm:text-lg flex items-center justify-center w-full sm:w-auto shadow-lg">
                <Github className="mr-2 w-5 h-5" />
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setShowContact(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setShowContact(true);
            }}
            className="relative inline-block text-[16px] text-gray-500 font-mono cursor-pointer group select-none"
            aria-label="Open contact modal"
          >
            &lt;/&gt; with ❤️ by
            <span className="ml-1 relative">
              अमूल्य रत्न
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate={showContact ? "visible" : "hidden"}
        onClick={() => setShowContact(false)}
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate={showContact ? "visible" : "hidden"}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900 rounded-xl p-8 max-w-md w-full mx-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <h2
            id="contact-modal-title"
            className="text-3xl font-bold text-center mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <p className="text-gray-400 text-center mb-6">
            Whether you have a project idea or just want to chat tech, I'm always open to interesting conversations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="mailto:ratna.amulya98@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all text-purple-400"
            >
              <Mail size={20} />
              <span className="font-medium">Send an Email</span>
            </a>

            <a
              href="https://x.com/helloAmulya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all text-blue-400"
            >
              <Twitter size={20} />
              <span className="font-medium">DM on Twitter</span>
            </a>
          </div>

          <button
            onClick={() => setShowContact(false)}
            className="mt-8 w-full py-3 bg-red-600 rounded-lg text-white font-semibold hover:bg-red-700 transition"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}
