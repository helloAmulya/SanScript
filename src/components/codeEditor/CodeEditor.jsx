import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp, Play, Copy, RotateCcw, Download, Languages } from 'lucide-react';

function CodeEditor() {
  const [currentLang, setCurrentLang] = useState("sanskrit");

  const [originalSanskritCode] = useState(`प्रकार्यम् गणनम्(अंकः क, अंकः ख) {
  यदि (क > ख) {
    प्रिंट("प्रथमः अधिकः");
    वापसी क;
  } अन्यथा {
    प्रिंट("द्वितीयः अधिकः");
    वापसी ख;
  }
}

प्रकार्यम् मुख्यम्() {
  अंकः परिणामः = गणनम्(१०, २०);
  प्रिंट("परिणामः: " + परिणामः);
  वापसी ०;
}`);

  const [code, setCode] = useState(originalSanskritCode);
  const [output, setOutput] = useState(`द्वितीयः अधिकः
परिणामः: २०

प्रक्रिया समाप्तः। निर्गम कोडः: ०`);
  const [isRunning, setIsRunning] = useState(false);

  const translateSanskritToLanguage = (sanskritCode, targetLanguage) => {
    // First replace all Sanskrit keywords with English equivalents
    const keywordMap = {
      'प्रकार्यम्': 'function',
      'गणनम्': 'calculate',
      'अंकः': 'int',
      'यदि': 'if',
      'अन्यथा': 'else',
      'प्रिंट': 'print',
      'वापसी': 'return',
      'मुख्यम्': 'main',
      'परिणामः': 'result',
      'क': 'a',
      'ख': 'b',
      '१०': '10',
      '२०': '20',
      '०': '0',
      'प्रथमः अधिकः': 'First is greater',
      'द्वितीयः अधिकः': 'Second is greater',
      'परिणामः: ': 'Result: ',
      'प्रक्रिया समाप्तः। निर्गम कोडः: ': 'Process finished. Exit code: '
    };

    let translatedCode = sanskritCode;
    Object.entries(keywordMap).forEach(([sanskrit, english]) => {
      translatedCode = translatedCode.replace(new RegExp(sanskrit, 'g'), english);
    });

    // Then apply language-specific transformations
    switch (targetLanguage) {
      case 'javascript':
        return translatedCode
          .replace(/int /g, 'let ')
          .replace(/print\(/g, 'console.log(');

      case 'python':
        return translatedCode
          .replace(/function (\w+)\(/g, 'def $1(')
          .replace(/int /g, '')
          .replace(/\{/g, ':')
          .replace(/\}/g, '')
          .replace(/;/g, '')
          .split('\n')
          .map(line => {
            if (line.includes(':') || line.trim().startsWith('return')) {
              return line;
            }
            if (line.trim() && !line.includes('def ')) {
              return '    ' + line;
            }
            return line;
          })
          .join('\n');

      case 'cpp':
        return `#include <iostream>
using namespace std;

${translatedCode
          .replace(/function/g, 'int')
          .replace(/print\(/g, 'cout << ')
          .replace(/\);/g, ' << endl;')
          .replace(/\+ "/g, ' << "')
        }`;

      case 'java':
        return `public class Main {
    public static void main(String[] args) {
${translatedCode
          .replace(/function/g, 'public static int')
          .replace(/int /g, 'int ')
          .replace(/print\(/g, 'System.out.println(')
          .replace(/main\(\)\s*\{/, '')
          .replace(/\}\s*$/, '    }\n}')
        }`;

      case 'csharp':
        return `using System;

public class Program {
    public static void Main(string[] args) {
${translatedCode
          .replace(/function/g, 'public static int')
          .replace(/int /g, 'int ')
          .replace(/print\(/g, 'Console.WriteLine(')
          .replace(/main\(\)\s*\{/, '')
          .replace(/\}\s*$/, '    }\n}')
        }`;

      default:
        return translatedCode;
    }
  };

  function handleLanguageChange(lang) {
    if (lang === "sanskrit") {
      setCode(originalSanskritCode);
      setCurrentLang("sanskrit");
      toast.success("Switched to Sanskrit");
    } else {
      const translatedCode = translateSanskritToLanguage(originalSanskritCode, lang);
      setCode(translatedCode);
      setCurrentLang(lang);
      toast.success(`Switched to ${lang.toUpperCase()}`);
    }
  }

  function runCode() {
    setIsRunning(true);
    setTimeout(() => {
      if (currentLang === "sanskrit") {
        setOutput(`द्वितीयः अधिकः
परिणामः: २०

प्रक्रिया समाप्तः। निर्गम कोडः: ०`);
      } else {
        setOutput(`Second is greater
Result: 20

Process finished. Exit code: 0`);
      }
      setIsRunning(false);
      toast.success("Code executed successfully!");
    }, 1000);
  }

  function copyCode() {
    navigator.clipboard.writeText(code)
      .then(() => toast.success("Code copied to clipboard!"))
      .catch(err => toast.error("Failed to copy code"));
  }

  function resetCode() {
    setCode(originalSanskritCode);
    setCurrentLang("sanskrit");
    setOutput("");
    toast.success("Editor reset to Sanskrit");
  }

  function getFileExtension() {
    switch (currentLang) {
      case "javascript": return ".js";
      case "python": return ".py";
      case "cpp": return ".cpp";
      case "java": return ".java";
      case "csharp": return ".cs";
      default: return ".संस्कृतम्";
    }
  }

  function getFileName() {
    return currentLang === "sanskrit" ? "गणनम्" : "calculate";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-800 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-400">
              {getFileName()}{getFileExtension()}
            </span>
            <div className="flex items-center space-x-2">
              <Select.Root value={currentLang} onValueChange={handleLanguageChange}>
                <Select.Trigger className="inline-flex items-center justify-between rounded-md px-3 py-1.5 text-xs text-gray-300 bg-gray-800 border border-gray-700">
                  <div className="flex items-center">
                    <Languages className="w-3 h-3 mr-2" />
                    <Select.Value />
                  </div>
                  <Select.Icon className="ml-2">
                    <ChevronDown className="h-3 w-3" />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="z-50 overflow-hidden rounded-md bg-gray-800 border border-gray-700 text-gray-200 shadow-lg">
                    <Select.Viewport className="p-1">
                      {['sanskrit', 'javascript', 'python', 'cpp', 'java', 'csharp'].map((lang) => (
                        <Select.Item
                          key={lang}
                          value={lang}
                          className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-300 cursor-pointer hover:bg-gray-700 rounded-md"
                        >
                          <Select.ItemText>
                            {lang.charAt(0).toUpperCase() + lang.slice(1)}
                          </Select.ItemText>
                          <Select.ItemIndicator>
                            <Check className="h-3 w-3 ml-auto text-green-400" />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>

              <button
                onClick={copyCode}
                className="p-1 text-gray-400 hover:text-white"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={resetCode}
                className="p-1 text-gray-400 hover:text-white"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <motion.div
              key={currentLang}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <textarea
                value={code}
                onChange={(e) => currentLang === "sanskrit" && setCode(e.target.value)}
                className="w-full h-80 bg-transparent text-gray-300 font-mono text-sm leading-relaxed resize-none outline-none"
                style={{ fontFamily: 'JetBrains Mono, Monaco, Consolas, monospace' }}
                spellCheck={false}
                readOnly={currentLang !== "sanskrit"}
              />
            </motion.div>
          </div>

          <div className="p-4 border-t border-gray-800">
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-md"
            >
              {isRunning ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              {isRunning
                ? currentLang === "sanskrit"
                  ? "चालित..."
                  : "Running..."
                : currentLang === "sanskrit"
                ? "चालन करें"
                : "Run Code"}
            </button>
          </div>
        </div>

        {/* Output Terminal */}
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-800 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Output Terminal</span>
            </div>
            <button className="p-1 text-gray-400 hover:text-white">
              <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4">
            <div className="h-80 overflow-y-auto">
              <div className="text-green-400 text-sm mb-2">
                {currentLang === "sanskrit"
                  ? "संस्कृत कंपाइलर v2.0.1"
                  : `${currentLang.toUpperCase()} Compiler v2.0.1`}
              </div>
              <div className="text-gray-400 text-sm mb-4">
                Compiling {getFileName()}{getFileExtension()}...
              </div>

              {output && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                    {output}
                  </pre>
                </motion.div>
              )}

              {isRunning && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center text-yellow-400 text-sm"
                >
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mr-2"
                  >
                    ●
                  </motion.div>
                  {currentLang === "sanskrit"
                    ? "Running Sanskrit code..."
                    : `Running ${currentLang.toUpperCase()} code...`}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Code Explanation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6"
      >
        <h3 className="text-xl font-semibold text-orange-400 mb-4">
          {currentLang === "sanskrit" ? "Code Explanation" : `${currentLang.toUpperCase()} Translation`}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="text-pink-400 font-medium mb-2">
              {currentLang === "sanskrit" ? "Sanskrit Keywords:" : "Key Features:"}
            </h4>
            <ul className="space-y-1 text-gray-300">
              {currentLang === "sanskrit" ? (
                <>
                  <li><span className="text-orange-400">प्रकार्यम्</span> - Function declaration</li>
                  <li><span className="text-orange-400">अंकः</span> - Integer type</li>
                  <li><span className="text-orange-400">यदि</span> - If condition</li>
                  <li><span className="text-orange-400">अन्यथा</span> - Else statement</li>
                </>
              ) : (
                <>
                  <li><span className="text-orange-400">Translated</span> - From Sanskrit syntax</li>
                  <li><span className="text-orange-400">Native</span> - {currentLang.toUpperCase()} syntax</li>
                  <li><span className="text-orange-400">Compiled</span> - Ready to execute</li>
                  <li><span className="text-orange-400">Optimized</span> - Language-specific</li>
                </>
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-pink-400 font-medium mb-2">
              {currentLang === "sanskrit" ? "Operations:" : "Functions:"}
            </h4>
            <ul className="space-y-1 text-gray-300">
              {currentLang === "sanskrit" ? (
                <>
                  <li><span className="text-orange-400">प्रिंट</span> - Print function</li>
                  <li><span className="text-orange-400">वापसी</span> - Return statement</li>
                  <li><span className="text-orange-400">गणनम्</span> - Custom function name</li>
                  <li><span className="text-orange-400">परिणामः</span> - Result variable</li>
                </>
              ) : (
                <>
                  <li><span className="text-orange-400">calculate()</span> - Main logic function</li>
                  <li><span className="text-orange-400">main()</span> - Entry point</li>
                  <li><span className="text-orange-400">print/log</span> - Output function</li>
                  <li><span className="text-orange-400">result</span> - Return value</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default CodeEditor;