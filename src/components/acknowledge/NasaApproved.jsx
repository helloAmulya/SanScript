import { motion } from "framer-motion";
import React, { useCallback } from "react";

function NasaApproved() {
  return (
    <section className="bg-transparent text-gray-200 py-6 px-6 md:px-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/10 to-transparent  pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-3"
      >
        {/* Hero Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug text-center">
          <span className="text-blue-200 border border-blue-500 rounded-full px-4">
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
          <span className="text-purple-300/90 rounded-full px-4 font-semibold border border-purple-500">
            Dev-Unverified
          </span>
        </h2>

        <article className="bg-[#0B0F11] rounded-2xl p-6 md:p-10 shadow-xl border border-gray-800">
          <header className="mb-4">
            <p className="text-sm text-gray-400">
              📰 *Indian ExpressTech* | June 2, 2025
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">
              "Code Like a Rishi": CM Gupta Launches Sanskrit IDE with NASA-ish
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
              "most logical programming language"
            </span>{" "}
            and that NASA had "basically built ChatGPT in it—back in '85".
          </p>

          <p className="mt-4 text-gray-400">
            "Syntax so pure, even the semicolons meditate," Gupta declared as
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

          {/* CTA Buttons - Fixed Link */}

          

          <div className="mt-8 flex flex-col md:flex-row gap-3">
  {/* <a
    href="https://indianexpress.com/article/cities/delhi/delhi-cm-rekha-gupta-sanskrit-scientific-computer-friendly-language-nasa-papers-9982625/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-white text-black px-6 py-2 md:px-8 rounded-sm hover:bg-yellow-300 font-bold shadow-inner transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 md:h-5 md:w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
    <span className="text-sm md:text-base">Read Article</span>
  </a> */}

  <a
  href="https://indianexpress.com/article/cities/delhi/delhi-cm-rekha-gupta-sanskrit-scientific-computer-friendly-language-nasa-papers-9982625/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    // fallback: try to force open in new tab (some React setups intercept anchor clicks)
    try {
      window.open(e.currentTarget.href, "_blank", "noopener,noreferrer");
      e.preventDefault();
    } catch (error) {
      console.error("Failed to open link:", error);
    }
  }}
  className="flex items-center justify-center gap-2 bg-white text-black px-6 py-2 md:px-8 rounded-sm hover:bg-yellow-300 font-bold shadow-inner transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 md:h-5 md:w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
  </svg>
  <span className="text-sm md:text-base">Read Article</span>
</a>



  <button className="border border-red-400 text-red-300 px-6 py-2 rounded-lg hover:bg-red-900/30 transition-colors font-medium text-sm md:text-base">
    View NASA Paper  (Time Machine Required)
  </button>
</div>

        </article>
      </motion.div>
    </section>
  );
}

export default NasaApproved;
