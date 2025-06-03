

import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Community() {
  useEffect(() => {
    // Dynamically loads the IBM Plex Sans font for consistent styling.
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cleanup function to remove the link when the component unmounts.
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      id="community"
      className="min-h-screen bg-[#0B0F11] text-white overflow-x-hidden px-6 py-12"
      style={{ overflowY: "scroll", fontFamily: "'IBM Plex Sans', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-start">
        <h3 className="text-4xl text-center font-semibold mb-8">
          To Political Entities
        </h3>

        <p className="text-lg leading-relaxed mb-6">
          from the Ceo of daddyCorp and a vibe coder prodigy of this great nation:
        </p>

        <p className="mb-4">
          Before declaring Sanskrit as the “most scientific” and “computer-friendly” language — a claim allegedly backed by NASA scientists — might we suggest a modest proposal?
        </p>

        <p
          className="mb-6 text-2xl font-extrabold text-yellow-400 italic border-l-4 border-yellow-400 pl-4"
          style={{ lineHeight: 1.3 }}
        >
          <b>Consult an IT technician.</b> <br />
          Yes, one of those elusive professionals who spend actual hours debugging real code, not reciting verses from ancient scripts.
        </p>

        <p className="mb-4">
          We fully appreciate the vibrant cultural pride behind the idea that Sanskrit could power the future of AI and coding. But in the present reality, where Delhi grapples with pollution, traffic jams, and a government busy tweeting more than coding — perhaps scientific accuracy should precede political poetry.
        </p>

        <p className="mb-4">
          Our humble suggestion: before launching 15-day Sanskrit learning initiatives, instead of just setting up camps in temples, schools, and colleges, maybe set up workshops with professional programmers? Just to be safe.
        </p>

        <p className="mb-4">
          Because while Sanskrit’s grammatical structure is elegant, the latest JavaScript framework probably won’t emerge from the Vedas anytime soon.
        </p>

        <p className="mb-4">
          So here’s to blending cultural heritage with genuine technical progress — may future announcements come after consulting actual coders, and not just political PR teams.
        </p>

        <hr className="border-gray-700 my-8 w-full" />

        <p className="text-sm text-gray-400 text-center max-w-lg">
          <b>Disclaimer:</b> This section is a work of satire and parody created purely for humorous and educational purposes. Any resemblance to real persons, living or dead, or actual statements is purely coincidental or intentionally mocked.
          All trademarks, logos, and references belong to their respective owners.
          No offense intended to any individual or group. Please consult qualified experts before making public statements about technology or language.
          Use this content responsibly and enjoy the satire.
        </p>
      </div>
    </motion.div>
  );
}

export default Community;
