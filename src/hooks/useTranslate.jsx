import { useEffect, useState } from "react";

// Language name to code mapping (expand as needed)
const languageMap = {
  english: "en",
  hindi: "hi",
  spanish: "es",
  french: "fr",
  german: "de",
  chinese: "zh-CN",
  japanese: "ja",
  russian: "ru",
  arabic: "ar",
  italian: "it",
  portuguese: "pt",
  korean: "ko",
  // Add more as needed
};

const useTranslate = (sourceText, selected) => {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleTranslate = async (text) => {
      const targetLang = languageMap[selected?.toLowerCase()] || "en";
      console.log(`Translating "${text}" to "${selected}" (${targetLang})`);

      try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(
          text
        )}`;
        const res = await fetch(url);
        const data = await res.json();
        // The translated text is in data[0][0][0]
        const translated =
          Array.isArray(data) && data[0] && Array.isArray(data[0]) && data[0][0]
            ? data[0][0][0]
            : "";
        setTargetText(translated);
        console.log("Translation result:", translated);
      } catch (error) {
        console.error("Error translating text:", error);
        setTargetText("");
      }
    };

    if (sourceText?.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500);

      return () => clearTimeout(timeoutId);
    } else {
      setTargetText("");
    }
  }, [sourceText, selected]);

  return targetText;
};

export default useTranslate;
