import React, { useState } from "react";
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F11]/80 backdrop-blur-xl border-b border-gray-700/30"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="flex justify-between py-4 h-16 items-center ">
          {" "}
          <div className="flex items-center space-x-2 cursor-pointer"               onClick={() => (window.location.href = "/")}
>
            {" "}
            <div
              className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-black font-bold"
            >
              {" "}
              ॐ{" "}
            </div>{" "}
            <span className="text-xl font-bold">संस्कृतम्</span>{" "}
          </div>{" "}
          {/* desktop menu */}{" "}
          <div className="hidden md:flex items-center space-x-8 text-[16px] mr-6">
            {" "}
            <a
              href="#features"
              className="text-gray-300 hover:text-blue-400 transition-colors relative group"
            >
              {" "}
              Features{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>{" "}
            </a>{" "}
            <a
              href="#docs"
              className="text-gray-300 hover:text-blue-400 transition-colors relative group"
            >
              {" "}
              Docs{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>{" "}
            </a>{" "}
            <a
              href="#community"
              className="text-gray-300 hover:text-blue-400 transition-colors relative group"
            >
              {" "}
              Community{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>{" "}
            </a>{" "}
            <button className="mr-2">
              {" "}
              <GitHubLogoIcon className="w-7 h-7 text-[#ADF0DD] hover:text-[#8ADCC5] " />{" "}
            </button>{" "}
          </div>{" "}
          {/* desktop div end */}{" "}
          <button
            className="md:hidden text-white right-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {" "}
            {isOpen ? (
              <Cross2Icon className="w-6 h-6 " />
            ) : (
              <HamburgerMenuIcon className="w-6 h-6" />
            )}{" "}
          </button>{" "}
        </div>{" "}
        {/* mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed right-0 w-40 h-full bg-[#0B0F11]/80 backdrop-blur-xl p-6 z-50 transition-all duration-300 ease-in-out"
          >
            {" "}
            <div className="flex flex-col items-start space-y-4 text-left">
              {" "}
              <a
                href="#features"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {" "}
                Features{" "}
              </a>{" "}
              <a
                href="#docs"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {" "}
                Docs{" "}
              </a>{" "}
              <a
                href="#community"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {" "}
                Community{" "}
              </a>{" "}
              <button>
                {" "}
                <GitHubLogoIcon className="w-7 h-7 text-[#ADF0DD] hover:text-[#8ADCC5]" />{" "}
              </button>{" "}
            </div>{" "}
          </motion.div>
        )}{" "}
        {/* main div end*/}{" "}
      </div>{" "}
      {/* animation div end*/}{" "}
    </motion.nav>
  );
}
export default NavBar;
