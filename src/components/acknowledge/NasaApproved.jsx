import { motion } from "framer-motion";
import React from "react";

function NasaApproved() {
  return (
    // <section className="bg-[#0b0c10] text-gray-200 py-16 px-6 md:px-20 border-t border-gray-700">
    <section className="bg-transparent text-gray-200 py-6 px-6 md:px-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/10 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-3"
      >
        {/* Hero Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug text-center">
          <span className=" text-blue-200 border border-blue-500 rounded-full px-4">
            NASA-Approved
            <br />
          </span>
          <span className="inline-block text-white font-semibold">
            मुख्यमंत्री प्रमाणित
          </span>
          <span
            className="mx-2 px-0 ml-5"
            style={{
              display: "inline-block",
              borderLeft: "2px solid rgba(251 146 60 / 0.9)",
              height: "3rem",
              width: "1px",
              verticalAlign: "middle",
            }}
          />{" "}
          <span className="text-purple-300/90  rounded-full px-4 font-semibold border border-purple-500">
            Dev-Unverified
          </span>
        </h2>

        {/* Fake Article Block */}
        {/* <article className="bg-[#1a1c22] rounded-2xl p-6 md:p-10 shadow-xl border border-gray-800"> */}
        <article className="bg-[#0B0F11] rounded-2xl p-6 md:p-10 shadow-xl border border-gray-800">
          <header className="mb-4">
            <p className="text-sm text-gray-400">
              📰 *Indian ExpressTech* | June 2, 2025
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">
              “Code Like a Rishi”: CM Gupta Launches Sanskrit IDE with NASA-ish
              Approval
            </h3>
          </header>

          <p className="text-gray-300 mt-4 leading-relaxed">
            In a{" "}
            <span className="font-semibold text-yellow-400">
              groundbreaking keynote
            </span>
            , Delhi CM Rekha Gupta claimed that Sanskrit was the
            <span className="italic text-teal-400">
              {" "}
              “most logical programming language”
            </span>{" "}
            and that NASA had “basically built ChatGPT in it—back in '85”.
          </p>

          <p className="mt-4 text-gray-400">
            “Syntax so pure, even the semicolons meditate,” Gupta declared as
            she live-coded a "Hello Vishwa" app. The IDE crashed—clearly a sign
            of enlightenment.
          </p>

          {/* Custom Badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-purple-700/30 border border-purple-500 text-purple-300 px-3 py-1 rounded-full text-xs font-mono">
              #NASAApprovalPending
            </span>
            <span className="bg-blue-700/20 border border-blue-500 text-blue-200 px-3 py-1 rounded-full text-xs font-mono">
              #GitSpiritMerge
            </span>
            <span className="bg-pink-800/20 border border-pink-500 text-pink-300 px-3 py-1 rounded-full text-xs font-mono">
              #CIByKarma
            </span>
          </div>

          {/* Fake Code Snippet */}
          <div className="bg-[#111317] text-green-400 text-sm font-mono mt-6 p-4 rounded-lg border border-gray-700">
            <pre>
              {`// The future is ancient.
कार्यं buildConsciousness() {
  यदि (लोक.दुःखम्) {
    जाप("ॐ शांति");
    वापसी समाधानम्;
  }
}`}
            </pre>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <a
              href="https://indianexpress.com/article/cities/delhi/delhi-cm-rekha-gupta-sanskrit-scientific-computer-friendly-language-nasa-papers-9982625/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-5 py-2 rounded-sm hover:bg-yellow-300 font-bold shadow-inner flex items-center gap-2"
            >
              <span>Read Article</span>
            </a>
            <button className="border border-red-400 text-red-300 px-5 py-2 rounded-lg hover:bg-red-900/30 transition font-medium">
              View NASA Paper (Time Machine Required)
            </button>
          </div>
        </article>
      </motion.div>
    </section>
  );
}

export default NasaApproved;
