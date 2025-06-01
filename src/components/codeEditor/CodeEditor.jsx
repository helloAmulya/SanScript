import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

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

  const [isRunning, setIsRunnig] = useState(false);

  const translateSanskritToLanguage = (sanskritCode, targetLanguage) => {
    const sanskritToEnglish = {
      प्रकार्यम्: "function",
      गणनम्: "calculate",
      अंकः: "number",
      यदि: "if",
      अन्यथा: "else",
      प्रिंट: "console.log",
      वापसी: "return",
      मुख्यम्: "main",
      परिणामः: "result",
      कोडः: "code",
      क: "a",
      ख: "b",
      "१०": "10",
      "२०": "20",
      "०": "0",
    };

    let translatedCode = code;
    Object.entries(sanskritToEnglish).forEach(([sanskrit, english]) => {
      const regex = new RegExp(sanskrit, "g");
      translatedCode = translatedCode.replace(regex, english);
    });

    // other lagnuage translation

    switch (targetLanguage) {
      case "javascript":
        translatedCode = translatedCode
          .replace(/function/g, "function")
          .replace(/int /g, "let")
          .replace(/print\(/g, "console.log(")
          .replace(/main\(\)/g, "main()")
          .replace(/return/g, "return");

        break;

      case "python":
        translatedCode = translatedCode

          .replace(/function (\w+)\(/g, "def $1(")
          .replace(/int /g, "")
          .replace(/\{/g, ":")
          .replace(/\}/g, "")
          .replace(/print\(/g, "print(")
          .replace(/;/g, "")
          .replace(/main\(\):/g, "def main():")
          .split("\n")
          .map((line) => {
            if (
              line.includes(":") &&
              !line.trim().startsWith("print") &&
              !line.trim().endsWith("return")
            ) {
              return line;
            }
            if (line.trim() && !line.includes("def ") && !line.includes(":")) {
              return "    " + line.trim();
            }
            return line;
          })
          .join("\n");
        break;

      case "cpp":
        translatedCode =
          `#include <iostream>
#include <string>
using namespace std;

` +
          translatedCode
            .replace(/function/g, "int")
            .replace(/int main/g, "int main")
            .replace(/print\(/g, "cout << ")
            .replace(/\+ "/g, ' << "')
            .replace(/"\)/g, '" << endl')
            .replace(/let /g, "int ");
        break;

      case "java":
        translatedCode =
          `public class Main {
    ` +
          translatedCode
            .replace(/function/g, "public static int")
            .replace(/let /g, "int ")
            .replace(/print\(/g, "System.out.println(")
            .replace(/main\(\)/g, "main(String[] args)")
            .replace(/public static int main/g, "public static void main") +
          `
}`;
        break;

      case "csharp":
        translatedCode =
          `using System;

public class Program {
    ` +
          translatedCode
            .replace(/function/g, "public static int")
            .replace(/let /g, "int ")
            .replace(/print\(/g, "Console.WriteLine(")
            .replace(/main\(\)/g, "Main(string[] args)")
            .replace(/public static int Main/g, "public static void Main") +
          `
}`;
        break;

      default:
        break;
    }
    return translatedCode;
  };

  function handleLanguageChange() {
    if (currentLang === "sanskrit") {
      setCode(originalSanskritCode);
      setCurrentLang("sanskrit");
    } else {
      const translatedCode = translateSanskritToLanguage(
        originalSanskritCode,
        currentLang
      );
      setCode(translatedCode);
      setCurrentLang(currentLang);
    }

    toast({
      title: `Switched to ${
        currentLang === "sanskrit" ? "Sanskrit" : currentLang.toUpperCase()
      }`,
      description: `Code editor now showing ${
        currentLang === "sanskrit" ? "Sanskrit" : currentLang.toUpperCase()
      } syntax.`,
    });

    function getFileExtension(currentLang) {
      switch (currentLang) {
        case "javascript":
          return ".js";
        case "python":
          return ".py";
        case "cpp":
          return ".cpp";
        case "java":
          return ".java";
        case "csharp":
          return ".cs";
        default:
          return ".संस्कृतम्"; // Default file extension
      }
    }
    function getFileName() {
      switch (currentLang) {
        case "sanskrit":
          return "गणनम्";
        default:
          return "calculate";
      }
    }

    const runCode = () => {
      setIsRunnig(true);
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
        setIsRunnig(false);
        toast({
          title: "Code executed successfully!",
          description: `${
            currentLang === "sanskrit" ? "Sanskrit" : currentLang.toUpperCase()
          } code compiled and run without errors.`,
        });
      }, 2000);
    };
    function copyCode() {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          toast.success({
            title: "Code copied!",
            description: `${
              currentLang === "sanskrit"
                ? "Sanskrit"
                : currentLang.toUpperCase()
            } code copied to clipboard.`,
          });
        })
        .catch((err) => {
          toast.error("Failed to copy code: " + err);
        });
    }
    const resetCode = () => {
      setCode(originalSanskritCode);
      setCurrentLang("sanskrit");
      setOutput("");
      toast({
        title: "Code reset!",
        description: "Editor reset to original Sanskrit code.",
      });
    };
  }

  return <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* code editor */}
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-800 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-2 border-gray-800">
             <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm">{getFileName()}{getFileExtension()}</span>
        </div>
        </div>
      </div>
    </motion.div>
}

export default CodeEditor;
