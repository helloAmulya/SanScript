import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github } from "lucide-react"; // Replace with actual imports

export default function Footer() {
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
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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
  <button className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20  hover:text-[#AAECDA] transition-colors duration-300 rounded-full text-white px-6 py-3 text-base sm:text-lg flex items-center justify-center w-full sm:w-auto shadow-lg">
  <Download className="mr-2 w-5 h-5" />
  Special Message
</button>

  
 <button className="backdrop-blur-md bg-[#AAECDA]/10 border border-[#AAECDA]/30 text-[#AAECDA]  hover:text-white transition-colors duration-300 rounded-full px-6 py-3 text-base sm:text-lg flex items-center justify-center w-full sm:w-auto shadow-lg">
  <Github className="mr-2 w-5 h-5" />
  View Documentation
</button>

</div>

          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gray-400">
            Made with ❤️ for the future of programming • संस्कृतम् प्रोग्रामिंग
            भाषा
          </div>
        </div>
      </footer>
    </>
  );
}
