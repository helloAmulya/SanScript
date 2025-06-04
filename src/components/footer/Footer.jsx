import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Twitter, WineOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import daddy from "../../assets/daddy.png";

export default function Footer() {
  const navigate = useNavigate();

  const [showContact, setShowContact] = useState(false);

  const backdropVariants = {
    visible: { opacity: 1, pointerEvents: "auto" },
    hidden: { opacity: 0, pointerEvents: "none" },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // the special message
  function handleDownload() {
    const link = document.createElement("a");
    link.href = daddy;
    link.download = "daddy.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
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
              <button
                onClick={handleDownload}
                className="relative group backdrop-blur-md bg-gradient-to-r from-[#0f172a]/40 to-[#1e293b]/40
             border border-cyan-400/30 hover:border-cyan-300 text-white
             hover:text-white transition-all duration-300 rounded-full 
             px-6 py-3 text-base sm:text-lg flex items-center justify-center 
             w-full sm:w-auto shadow-xl shadow-cyan-500/10 overflow-hidden"
              >
                <Download className="mr-2 w-5 h-5 relative z-10" />
                <span className="relative z-10">Special Message</span>

                {/* Vibrant inner shimmer glow */}
                <span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 
                   opacity-0 group-hover:opacity-100 transition duration-700 blur-md rounded-full z-0"
                ></span>

                {/* Bright glowing border on hover */}
                <span
                  className="absolute -inset-px rounded-full border border-cyan-500/30 
                   group-hover:border-cyan-400/60 pointer-events-none z-0"
                ></span>

                {/* Subtle shimmer pulse ring */}
                <span
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent 
                   opacity-0 group-hover:opacity-50 animate-pulse z-0"
                ></span>
              </button>

              <button
                className="gap-2 flex-row backdrop-blur-md bg-[#AAECDA]/10 border border-[#AAECDA]/30 text-[#AAECDA] hover:text-white transition-colors duration-300 rounded-full px-6 py-3 text-base sm:text-lg flex items-center justify-center w-full sm:w-auto shadow-lg"
                onClick={() => navigate("/community")}
              >
                {/* <Github className="mr-2 w-5 h-5" /> */}
                Community
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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
            <span className="bg-gradient-to-b from-[#BCD8FC] to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <p className="text-gray-400 text-center mb-6">
            Whether you have a project idea or just want to chat tech, I'm
            always open to interesting conversations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="mailto:ratna.amulya98@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all text-purple-400 whitespace-nowrap"
            >
              <Mail size={20} />
              <span className="font-medium">Send an Email</span>
            </a>

            <a
              href="https://x.com/helloAmulya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all text-blue-400 whitespace-nowrap"
            >
              <Twitter size={20} />
              <span className="font-medium">DM on Twitter</span>
            </a>
          </div>

          <button
            onClick={() => setShowContact(false)}
            className="mt-8 w-full py-3 px-6 rounded-xl text-white font-semibold
             bg-gradient-to-tr from-white/10 via-white/5 to-white/10
             backdrop-blur-xl border border-white/20
             hover:from-pink-400/10 hover:via-purple-500/10 hover:to-blue-500/10
             hover:border-white/40
             shadow-lg shadow-pink-500/10
             transition-all duration-300 ease-in-out
             relative overflow-hidden group"
          >
            <span className="relative z-10">Close</span>

            {/* Inner glowing shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition duration-700 blur-md"></span>

            {/* Border glow effect */}
            <span className="absolute -inset-px rounded-xl border border-white/10 group-hover:border-purple-400/30 pointer-events-none"></span>

            {/* Shimmer line */}
            <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70 animate-pulse"></span>
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}
