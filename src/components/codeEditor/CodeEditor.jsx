import React, { useState } from "react";

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

  const translateSanskritToLanguage = () => {
    const SanskritToEnglish = {
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
  };

  return <div>CodeEditor</div>;
}

export default CodeEditor;
